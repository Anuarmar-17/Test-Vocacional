from django.contrib import admin
from .models import Area, Profesion, Resultado, ReflexionAutoconocimiento, ProyectoVida


@admin.register(Area)
class AreaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'nombre_corto', 'puntaje_base', 'maximo_puntos')


@admin.register(Profesion)
class ProfesionAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'area', 'duracion')


@admin.register(Resultado)
class ResultadoAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'estado', 'progreso_porcentaje', 'fecha_realizacion')
    list_filter = ('estado',)


@admin.register(ReflexionAutoconocimiento)
class ReflexionAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'orden', 'fecha_guardado')


@admin.register(ProyectoVida)
class ProyectoVidaAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'estado', 'fecha_actualizacion')
