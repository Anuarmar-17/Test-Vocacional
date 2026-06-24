import jwt
import uuid
from datetime import datetime, timedelta, timezone

from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Usuario
from .serializers import RegisterSerializer


# ─── Helpers ─────────────────────────────────────────────────────────────────

def _generate_tokens(usuario: Usuario) -> dict:
    """Genera access y refresh tokens JWT para un Usuario."""
    now = datetime.now(timezone.utc)

    access_payload = {
        'user_id': usuario.id,
        'email': usuario.correo,
        'rol_id': usuario.rol_id,
        'is_admin': usuario.is_admin,
        'token_type': 'access',
        'exp': now + timedelta(hours=24),
        'iat': now,
        'jti': str(uuid.uuid4()),
    }

    refresh_payload = {
        'user_id': usuario.id,
        'email': usuario.correo,
        'token_type': 'refresh',
        'exp': now + timedelta(days=7),
        'iat': now,
        'jti': str(uuid.uuid4()),
    }

    access = jwt.encode(access_payload, settings.SECRET_KEY, algorithm='HS256')
    refresh = jwt.encode(refresh_payload, settings.SECRET_KEY, algorithm='HS256')

    return {'access': access, 'refresh': refresh}


def _user_data(usuario: Usuario) -> dict:
    """Serializa datos del usuario para la respuesta."""
    return {
        'id': usuario.id,
        'nombre': usuario.nombre,
        'apellido': usuario.apellido or '',
        'correo': usuario.correo,
        'curso': usuario.curso or '',
        'edad': usuario.edad,
        'rol_id': usuario.rol_id,
        'is_admin': usuario.is_admin,
        'activo': usuario.activo,
    }


def _get_usuario_from_token(request) -> Usuario | None:
    """Extrae el usuario del token JWT en el header Authorization."""
    auth_header = request.META.get('HTTP_AUTHORIZATION', '')
    if not auth_header.startswith('Bearer '):
        return None

    token = auth_header.split(' ')[1]
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        if payload.get('token_type') != 'access':
            return None
        usuario = Usuario.objects.get(id=payload['user_id'], activo=True)
        return usuario
    except (jwt.ExpiredSignatureError, jwt.InvalidTokenError, Usuario.DoesNotExist):
        return None


# ─── Views ───────────────────────────────────────────────────────────────────

@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    """Registra un nuevo usuario estudiante."""
    serializer = RegisterSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    config_user = Usuario.objects.filter(correo='config_registro@sistema.com').first()
    if config_user and not config_user.activo:
        return Response(
            {'error': 'El registro de usuarios está temporalmente deshabilitado.'},
            status=status.HTTP_403_FORBIDDEN,
        )

    if Usuario.objects.filter(correo=serializer.validated_data['correo'].lower()).exists():
        return Response(
            {'error': 'El correo ya está registrado.'},
            status=status.HTTP_400_BAD_REQUEST,
        )

    Usuario.objects.create(
        nombre=serializer.validated_data['nombre'],
        apellido=serializer.validated_data.get('apellido', ''),
        correo=serializer.validated_data['correo'].lower(),
        password_hash=serializer.validated_data['password'],
        curso=serializer.validated_data.get('curso', ''),
        edad=serializer.validated_data.get('edad'),
        tipo_documento=serializer.validated_data.get('tipo_documento'),
        numero_documento=serializer.validated_data.get('numero_documento'),
        rol_id=2,
        activo=True,
        session_id=str(uuid.uuid4()),
    )

    return Response({
        'message': 'Registro exitoso. Ahora puedes iniciar sesión.',
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """Login con correo y contraseña en texto plano contra la tabla usuarios."""
    correo = request.data.get('email', '').strip().lower()
    password = request.data.get('password', '').strip()

    if not correo or not password:
        return Response(
            {'error': 'El correo y la contraseña son obligatorios.'},
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        usuario = Usuario.objects.get(correo=correo, activo=True)
    except Usuario.DoesNotExist:
        return Response(
            {'error': 'Credenciales incorrectas.'},
            status=status.HTTP_401_UNAUTHORIZED,
        )

    # Comparación de contraseña en texto plano (solo para pruebas)
    if usuario.password_hash != password:
        return Response(
            {'error': 'Credenciales incorrectas.'},
            status=status.HTTP_401_UNAUTHORIZED,
        )

    tokens = _generate_tokens(usuario)

    return Response({
        'tokens': tokens,
        'user': _user_data(usuario),
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def refresh_view(request):
    """Renueva el access token usando un refresh token válido."""
    refresh_token = request.data.get('refresh', '')

    if not refresh_token:
        return Response(
            {'error': 'Refresh token requerido.'},
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        payload = jwt.decode(refresh_token, settings.SECRET_KEY, algorithms=['HS256'])
        if payload.get('token_type') != 'refresh':
            raise jwt.InvalidTokenError('Not a refresh token')

        usuario = Usuario.objects.get(id=payload['user_id'], activo=True)
        tokens = _generate_tokens(usuario)

        return Response({
            'tokens': tokens,
            'user': _user_data(usuario),
        })

    except (jwt.ExpiredSignatureError, jwt.InvalidTokenError):
        return Response(
            {'error': 'Token inválido o expirado.'},
            status=status.HTTP_401_UNAUTHORIZED,
        )
    except Usuario.DoesNotExist:
        return Response(
            {'error': 'Usuario no encontrado.'},
            status=status.HTTP_401_UNAUTHORIZED,
        )


@api_view(['GET'])
@permission_classes([AllowAny])
def me_view(request):
    """Retorna los datos del usuario autenticado via JWT."""
    usuario = _get_usuario_from_token(request)

    if not usuario:
        return Response(
            {'error': 'No autenticado.'},
            status=status.HTTP_401_UNAUTHORIZED,
        )

    return Response({'user': _user_data(usuario)})
