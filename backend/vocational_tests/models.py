from django.db import models

class Area(models.Model):
    """
    Áreas de interés o aptitudes (ej. Lógico-Matemático, Arte, Ciencias Sociales).
    """
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Question(models.Model):
    """
    Preguntas del test vocacional.
    """
    text = models.CharField(max_length=255)
    area = models.ForeignKey(Area, on_delete=models.CASCADE, related_name='questions')
    order = models.IntegerField(default=0, help_text="Orden en el que aparecerá la pregunta")
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.text

class Option(models.Model):
    """
    Opciones de respuesta (ej. Me gusta mucho, Me es indiferente, No me gusta).
    """
    text = models.CharField(max_length=100)
    score = models.IntegerField(help_text="Puntuación que suma al área correspondiente")

    def __str__(self):
        return f"{self.text} ({self.score})"
