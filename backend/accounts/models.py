from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email


class Rol(models.Model):
    """Modelo no-manejado para la tabla 'roles' existente en MySQL."""
    nombre = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'roles'

    def __str__(self):
        return self.nombre


class Usuario(models.Model):
    """Modelo no-manejado para la tabla 'usuarios' existente en MySQL.
    Permite consultar usuarios con contraseñas en texto plano para pruebas.
    """
    rol = models.ForeignKey(Rol, on_delete=models.DO_NOTHING, db_column='rol_id')
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100, null=True, blank=True)
    correo = models.EmailField(max_length=150, unique=True)
    password_hash = models.CharField(max_length=255, null=True, blank=True)
    curso = models.CharField(max_length=10, null=True, blank=True)
    edad = models.IntegerField(null=True, blank=True)
    session_id = models.CharField(max_length=36, null=True, blank=True, unique=True)
    activo = models.BooleanField(default=True)
    ultima_actividad = models.DateTimeField(null=True, blank=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'usuarios'

    def __str__(self):
        return f"{self.nombre} {self.apellido or ''} ({self.correo})"

    @property
    def is_admin(self):
        return self.rol_id == 1

    @property
    def full_name(self):
        parts = [self.nombre]
        if self.apellido:
            parts.append(self.apellido)
        return ' '.join(parts)
