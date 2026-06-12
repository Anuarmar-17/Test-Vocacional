from rest_framework import serializers
from .models import Area, Profesion, Resultado, ReflexionAutoconocimiento, ProyectoVida
from accounts.models import Usuario

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = '__all__'

class ResultadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resultado
        fields = '__all__'

class ReflexionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReflexionAutoconocimiento
        fields = '__all__'
        read_only_fields = ('usuario', 'fecha_guardado')

class ProyectoVidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProyectoVida
        fields = '__all__'
        read_only_fields = ('usuario', 'fecha_actualizacion')
