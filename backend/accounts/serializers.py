from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Usuario

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')
        read_only_fields = ('id',)


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ['nombre', 'apellido', 'correo', 'password', 'confirm_password',
                  'curso', 'edad', 'tipo_documento', 'numero_documento']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Las contraseñas no coinciden")
        if Usuario.objects.filter(correo=data['correo']).exists():
            raise serializers.ValidationError("El correo ya está registrado")
        return data
