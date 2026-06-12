from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .models import Resultado, ReflexionAutoconocimiento, ProyectoVida
from .serializers import ResultadoSerializer, ReflexionSerializer, ProyectoVidaSerializer
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
