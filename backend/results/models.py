from django.db import models
from django.conf import settings
from vocational_tests.models import Area
from professions.models import Profession

class Result(models.Model):
    """
    Representa el resultado final de un test vocacional realizado por un usuario.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='results')
    created_at = models.DateTimeField(auto_now_add=True)
    recommended_professions = models.ManyToManyField(Profession, related_name='recommended_in_results')

    def __str__(self):
        return f"Resultado de {self.user.username} ({self.created_at.strftime('%Y-%m-%d')})"

class AreaScore(models.Model):
    """
    Puntuación obtenida en cada área específica dentro de un resultado.
    """
    result = models.ForeignKey(Result, on_delete=models.CASCADE, related_name='area_scores')
    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.area.name}: {self.score}"
