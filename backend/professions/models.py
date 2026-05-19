from django.db import models
from vocational_tests.models import Area

class Profession(models.Model):
    """
    Profesiones que se recomendarán al usuario basadas en sus resultados.
    """
    name = models.CharField(max_length=150, unique=True)
    description = models.TextField()
    areas_related = models.ManyToManyField(Area, related_name='professions', help_text="Áreas de interés asociadas a esta profesión")
    job_market_trend = models.CharField(max_length=100, blank=True, null=True, help_text="Tendencia del mercado laboral (ej. Alta demanda, Crecimiento medio)")
    average_salary = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name
