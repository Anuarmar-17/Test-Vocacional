import uuid
from django.db import models


class Student(models.Model):
    nombre = models.CharField(max_length=150)
    correo = models.EmailField(blank=True, null=True)
    grado = models.CharField(max_length=20, help_text="10° u 11°")
    curso = models.CharField(max_length=50, blank=True, null=True)
    edad = models.IntegerField(blank=True, null=True)
    session_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nombre} - {self.grado}"


class TestResult(models.Model):
    ESTADO_CHOICES = [
        ('INICIADO', 'Iniciado'),
        ('COMPLETADO', 'Completado'),
    ]

    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='results')
    respuestas = models.JSONField(default=list, help_text="Lista de respuestas del estudiante")
    resultados_por_area = models.JSONField(default=dict, help_text="Estructura similar a resultados_acumulados.json")
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='COMPLETADO')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Resultado de {self.student.nombre} ({self.created_at.strftime('%Y-%m-%d')})"


class LifeProject(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE, related_name='life_project')
    vision = models.TextField(blank=True, null=True, help_text="¿Cómo te ves en el futuro?")
    mission = models.TextField(blank=True, null=True, help_text="¿Qué vas a hacer para lograrlo?")
    target_profession = models.CharField(max_length=200, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Proyecto de Vida de {self.student.nombre}"


class Goal(models.Model):
    TERM_CHOICES = [
        ('SHORT', 'Corto Plazo'),
        ('MEDIUM', 'Mediano Plazo'),
        ('LONG', 'Largo Plazo'),
    ]

    project = models.ForeignKey(LifeProject, on_delete=models.CASCADE, related_name='goals')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    term = models.CharField(max_length=10, choices=TERM_CHOICES, default='SHORT')
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.get_term_display()})"
