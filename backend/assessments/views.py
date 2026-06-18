from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.utils import timezone
from .models import Area, Resultado, ReflexionAutoconocimiento, ProyectoVida
from .serializers import ResultadoSerializer, ReflexionSerializer, ProyectoVidaSerializer
from accounts.models import Usuario
from core.responses import SuccessResponse, ErrorResponse

# We extract user directly from request.user (which is accounts.Usuario because of JWT)
# Wait, JWT token returns the `id` of Usuario. In `accounts/views.py`, the token `user_id` is the ID of the Usuario!
# The JWT authentication automatically sets `request.user` to the model defined in AUTH_USER_MODEL.
# But AUTH_USER_MODEL='accounts.User', which is NOT 'Usuario'!
# Aha! Let's check `accounts/views.py`, the `_get_usuario_from_token(request)` parses JWT itself.
# Since standard JWT auth might fail or return the wrong model, we should parse the user ourselves or rely on the custom view getter.
from accounts.views import _get_usuario_from_token

class BaseAuthAPIView(APIView):
    def get_usuario(self, request):
        return _get_usuario_from_token(request)

class ReflexionListView(BaseAuthAPIView):
    permission_classes = (permissions.AllowAny,)  # we check token manually to support the custom Usuario table

    def get(self, request):
        usuario = self.get_usuario(request)
        if not usuario: return Response({'error': 'No autenticado'}, status=401)
        
        reflexiones = ReflexionAutoconocimiento.objects.filter(usuario=usuario).order_by('orden')
        serializer = ReflexionSerializer(reflexiones, many=True)
        return SuccessResponse(data=serializer.data)

    def post(self, request):
        usuario = self.get_usuario(request)
        if not usuario: return Response({'error': 'No autenticado'}, status=401)

        # Expecting a list of objects or a dict of {orden: respuesta}
        data = request.data
        if isinstance(data, dict):
            # Dict mapping orden to respuesta
            for orden_str, resp in data.items():
                try: 
                    orden = int(orden_str.split('-')[1]) if '-' in orden_str else int(orden_str)
                except ValueError: continue
                # update or create
                obj, _ = ReflexionAutoconocimiento.objects.get_or_create(usuario=usuario, orden=orden)
                obj.respuesta = resp
                obj.save()
            return SuccessResponse(message='Reflexiones guardadas')
        return ErrorResponse(message='Formato inválido', status=400)


class ReflexionDetailView(BaseAuthAPIView):
    def get(self, request, orden):
        usuario = self.get_usuario(request)
        if not usuario: return Response({'error': 'No autenticado'}, status=401)

        try:
            reflexion = ReflexionAutoconocimiento.objects.get(usuario=usuario, orden=orden)
            serializer = ReflexionSerializer(reflexion)
            return SuccessResponse(data=serializer.data)
        except ReflexionAutoconocimiento.DoesNotExist:
            return ErrorResponse(message='No encontrada', status=404)


class ResultadoView(BaseAuthAPIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        usuario = self.get_usuario(request)
        if not usuario: return Response({'error': 'No autenticado'}, status=401)

        # We assume one result record per user (the latest or unique)
        resultado = Resultado.objects.filter(usuario=usuario).order_by('-fecha_realizacion').first()
        if not resultado:
            return SuccessResponse(data=None, message="No hay resultados")
        serializer = ResultadoSerializer(resultado)
        return SuccessResponse(data=serializer.data)

    def post(self, request):
        usuario = self.get_usuario(request)
        if not usuario: return Response({'error': 'No autenticado'}, status=401)

        # Body contains 'respuestas' dict AND 'resultados_por_area' dict
        respuestas = request.data.get('respuestas', {})
        resultados_por_area = request.data.get('resultados_por_area', {})
        respondidas = len([r for r in respuestas.values() if r])
        porcentaje = min(100.0, (respondidas / 80.0) * 100)
        estado = 'COMPLETADO' if respondidas == 80 else 'INICIADO'

        resultado, _ = Resultado.objects.get_or_create(usuario=usuario)
        resultado.datos = {
            'respuestas': respuestas,
            'resultados_por_area': resultados_por_area,
        }
        resultado.preguntas_respondidas = respondidas
        resultado.progreso_porcentaje = porcentaje
        resultado.estado = estado

        # Calculate area_principal, area_secundaria from resultados_por_area
        if resultados_por_area and isinstance(resultados_por_area, dict):
            sorted_areas = sorted(
                resultados_por_area.items(),
                key=lambda item: item[1].get('puntos', 0) if isinstance(item[1], dict) else 0,
                reverse=True,
            )
            if sorted_areas:
                top = sorted_areas[0][1]
                if isinstance(top, dict) and top.get('area_id'):
                    resultado.area_principal_id = top['area_id']
                    resultado.puntaje_maximo = top.get('puntos', 0)
                if len(sorted_areas) > 1:
                    second = sorted_areas[1][1]
                    if isinstance(second, dict) and second.get('area_id'):
                        resultado.area_secundaria_id = second['area_id']

        if estado == 'COMPLETADO':
            resultado.fecha_completado = timezone.now()

        resultado.save()

        serializer = ResultadoSerializer(resultado)
        return SuccessResponse(data=serializer.data, message='Avance guardado')


class ProyectoVidaView(BaseAuthAPIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        usuario = self.get_usuario(request)
        if not usuario: return Response({'error': 'No autenticado'}, status=401)

        proyecto, _ = ProyectoVida.objects.get_or_create(usuario=usuario)
        serializer = ProyectoVidaSerializer(proyecto)
        return SuccessResponse(data=serializer.data)

    def put(self, request):
        usuario = self.get_usuario(request)
        if not usuario: return Response({'error': 'No autenticado'}, status=401)

        proyecto, _ = ProyectoVida.objects.get_or_create(usuario=usuario)
        serializer = ProyectoVidaSerializer(proyecto, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return SuccessResponse(data=serializer.data, message='Proyecto de vida actualizado')
        return ErrorResponse(message='Datos inválidos', status=400)


class AdminStatsView(BaseAuthAPIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        usuario = self.get_usuario(request)
        if not usuario or not usuario.is_admin:
            return Response({'error': 'No autorizado'}, status=403)

        total_usuarios = Usuario.objects.filter(activo=True).exclude(rol_id=1).count()
        test_completados = Resultado.objects.filter(estado='COMPLETADO').values('usuario').distinct().count()

        areas_map = {a.id: a for a in Area.objects.all()}
        area_counts: dict[int, int] = {}

        all_completed = list(Resultado.objects.filter(
            estado='COMPLETADO', usuario__isnull=False
        ).select_related('usuario'))

        recent_results = sorted(
            all_completed,
            key=lambda r: r.fecha_realizacion or timezone.now(),
            reverse=True,
        )[:10]

        for r in all_completed:
            datos = r.datos or {}
            rpa = datos.get('resultados_por_area', {})
            if isinstance(rpa, dict):
                best = None
                best_puntos = -1
                for name, info in rpa.items():
                    if isinstance(info, dict):
                        p = info.get('puntos', 0)
                        if p > best_puntos:
                            best_puntos = p
                            best = info
                if best and best.get('area_id'):
                    aid = int(best['area_id'])
                    area_counts[aid] = area_counts.get(aid, 0) + 1

        area_distribucion = []
        for aid, cnt in area_counts.items():
            area = areas_map.get(aid)
            if area:
                area_distribucion.append({
                    'area': area.nombre,
                    'cantidad': cnt,
                    'color': area.color,
                    'light': area.color_light or area.color + '20',
                })

        total_area = sum(a['cantidad'] for a in area_distribucion) or 1
        for a in area_distribucion:
            a['porcentaje'] = round((a['cantidad'] / total_area) * 100)

        area_distribucion.sort(key=lambda x: x['cantidad'], reverse=True)
        profesiones_top = area_distribucion[:5]

        recent_users = Usuario.objects.filter(activo=True).order_by('-fecha_registro')[:5]

        actividad_reciente = []
        for u in recent_users:
            actividad_reciente.append({
                'tipo': 'registro',
                'usuario': u.full_name,
                'descripcion': 'Se registró en la plataforma',
                'tiempo': u.fecha_registro.isoformat() if u.fecha_registro else '',
                'icon': 'ti-user-plus',
                'color': '#4F6AF5',
            })
        for r in recent_results:
            actividad_reciente.append({
                'tipo': 'test',
                'usuario': r.usuario.full_name if r.usuario else '—',
                'descripcion': 'Completó el test vocacional',
                'tiempo': r.fecha_realizacion.isoformat() if r.fecha_realizacion else '',
                'icon': 'ti-clipboard-check',
                'color': '#0F9B8E',
            })

        actividad_reciente.sort(key=lambda x: x['tiempo'], reverse=True)
        actividad_reciente = actividad_reciente[:10]

        return SuccessResponse(data={
            'total_usuarios': total_usuarios,
            'test_completados': test_completados,
            'area_distribucion': area_distribucion,
            'profesiones_top': profesiones_top,
            'actividad_reciente': actividad_reciente,
        })


class AdminUsersView(BaseAuthAPIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        usuario = self.get_usuario(request)
        if not usuario or not usuario.is_admin:
            return Response({'error': 'No autorizado'}, status=403)

        users = list(Usuario.objects.filter(
            activo=True
        ).exclude(rol_id=1).order_by('-fecha_registro'))

        user_ids = [u.id for u in users]

        # Get latest resultado per user via max id
        from django.db.models import Max
        latest_ids = Resultado.objects.filter(
            usuario_id__in=user_ids
        ).values('usuario_id').annotate(
            max_id=Max('id')
        ).values_list('max_id', flat=True)

        results_map = {}
        for r in Resultado.objects.filter(
            id__in=list(latest_ids)
        ).select_related('area_principal'):
            results_map[r.usuario_id] = r

        areas_map = {a.id: a for a in Area.objects.all()}

        def normalize_area_name(raw: str) -> str:
            map_norm = {
                "arte y creatividad": "Arte y Creatividad",
                "ciencia y tecnología": "Ciencia y Tecnología",
                "ciencia y tecnologia": "Ciencia y Tecnología",
                "ciencias ecológicas, biológicas y de salud": "Ciencias de la Salud",
                "ciencias ecologicas, biologicas y de salud": "Ciencias de la Salud",
                "ciencias sociales": "Ciencias Sociales",
                "económica, administrativa y financiera": "Económica / Administrativa",
                "economica, administrativa y financiera": "Económica / Administrativa",
            }
            return map_norm.get(raw.lower().strip(), raw)

        data = []
        for u in users:
            r = results_map.get(u.id)
            area_name = '—'
            area_color = '#9CA3AF'
            area_light = '#F3F4F6'
            test_completado = False
            preg_respondidas = 0
            ultima = (
                u.ultima_actividad.isoformat() if u.ultima_actividad else (
                    r.fecha_realizacion.isoformat() if r and r.fecha_realizacion else (
                        u.fecha_registro.isoformat() if u.fecha_registro else ''
                    )
                )
            )

            resultados_por_area = {}

            if r:
                preg_respondidas = r.preguntas_respondidas
                test_completado = r.estado == 'COMPLETADO'
                if r.area_principal_id:
                    a = areas_map.get(r.area_principal_id)
                    if a:
                        area_name = a.nombre
                        area_color = a.color
                        area_light = a.color_light or a.color + '20'
                elif test_completado and r.datos:
                    # Fallback: calcular área desde JSON datos si FK es NULL
                    rpa = r.datos.get('resultados_por_area', {})
                    if isinstance(rpa, dict):
                        best = None
                        best_puntos = -1
                        for name, info in rpa.items():
                            if isinstance(info, dict):
                                p = info.get('puntos', 0)
                                if p > best_puntos:
                                    best_puntos = p
                                    best = info
                        if best and best.get('area_id'):
                            aid = int(best['area_id'])
                            a = areas_map.get(aid)
                            if a:
                                area_name = a.nombre
                                area_color = a.color
                                area_light = a.color_light or a.color + '20'

                # Extraer desglose completo de puntos por área para el modal
                if test_completado and r.datos:
                    rpa = r.datos.get('resultados_por_area', {})
                    if isinstance(rpa, dict):
                        for name, info in rpa.items():
                            if isinstance(info, dict):
                                puntos = info.get('puntos', 0)
                                if puntos > 0:
                                    normalized = normalize_area_name(name)
                                    resultados_por_area[normalized] = puntos

            data.append({
                'id': u.id,
                'nombre': u.full_name,
                'email': u.correo,
                'fechaRegistro': u.fecha_registro.isoformat() if u.fecha_registro else '',
                'testCompletado': test_completado,
                'preguntasRespondidas': preg_respondidas,
                'areaPrincipal': area_name,
                'areaColor': area_color,
                'areaLight': area_light,
                'ultimaActividad': ultima,
                'resultadosPorArea': resultados_por_area,
            })

        return SuccessResponse(data=data)
