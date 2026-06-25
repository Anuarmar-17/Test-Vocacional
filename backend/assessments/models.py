from django.db import models
from django.utils import timezone
from accounts.models import Usuario

class Area(models.Model):
    nombre = models.CharField(max_length=100)
    nombre_corto = models.CharField(max_length=20, unique=True)
    color = models.CharField(max_length=7)
    color_light = models.CharField(max_length=7, null=True, blank=True)
    puntaje_base = models.IntegerField(default=0)
    maximo_puntos = models.IntegerField(default=16)

    class Meta:
        managed = False
        db_table = 'areas'

class Profesion(models.Model):
    area = models.ForeignKey(Area, on_delete=models.DO_NOTHING, db_column='area_id')
    nombre = models.CharField(max_length=150)
    descripcion = models.TextField(null=True, blank=True)
    universidades = models.TextField(null=True, blank=True)
    duracion = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        managed = False
        db_table = 'profesiones'

class Resultado(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, db_column='usuario_id')
    estado = models.CharField(max_length=20, default='INICIADO')
    total_preguntas = models.IntegerField(default=80)
    preguntas_respondidas = models.IntegerField(default=0)
    progreso_porcentaje = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    datos = models.JSONField(default=dict)
    area_principal = models.ForeignKey(Area, on_delete=models.DO_NOTHING, db_column='area_principal_id', null=True, blank=True, related_name='resultados_principal')
    area_secundaria = models.ForeignKey(Area, on_delete=models.DO_NOTHING, db_column='area_secundaria_id', null=True, blank=True, related_name='resultados_secundaria')
    puntaje_maximo = models.IntegerField(default=0)
    fecha_realizacion = models.DateTimeField(auto_now_add=True)
    fecha_completado = models.DateTimeField(null=True, blank=True)

    class Meta:
        managed = False
        db_table = 'resultados'

class ReflexionAutoconocimiento(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, db_column='usuario_id')
    orden = models.IntegerField()
    pregunta_texto = models.CharField(max_length=255)
    respuesta = models.TextField(null=True, blank=True)
    fecha_guardado = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'reflexiones_autoconocimiento'
        unique_together = (('usuario', 'orden'),)

class ProyectoVida(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, db_column='usuario_id')
    vision = models.TextField(null=True, blank=True)
    meta_corto_plazo = models.TextField(null=True, blank=True)
    meta_mediano_plazo = models.TextField(null=True, blank=True)
    meta_largo_plazo = models.TextField(null=True, blank=True)
    tiene_claro_carrera = models.BooleanField(null=True, blank=True)
    conoce_requisitos = models.BooleanField(null=True, blank=True)
    investigo_financiamiento = models.BooleanField(null=True, blank=True)
    tiene_apoyo_familiar = models.BooleanField(null=True, blank=True)
    compromisos = models.TextField(null=True, blank=True)
    estado = models.CharField(max_length=20, default='BORRADOR')
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'proyecto_vida'


class RecomendacionIA(models.Model):
    resultado = models.OneToOneField(
        Resultado, on_delete=models.CASCADE,
        db_column='resultado_id', related_name='recomendacion_ia'
    )
    carreras = models.JSONField(default=list, blank=True)
    fecha_generacion = models.DateTimeField(default=timezone.now)

    class Meta:
        managed = True
        db_table = 'recomendaciones_ia'
