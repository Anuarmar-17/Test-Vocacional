from django.db import models
from django.conf import settings
from professions.models import Profession

class LifeProject(models.Model):
    """
    Proyecto de vida del usuario, donde define su visión y misión.
    """
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='life_project')
    vision = models.TextField(blank=True, null=True, help_text="¿Cómo te ves en el futuro?")
    mission = models.TextField(blank=True, null=True, help_text="¿Qué vas a hacer para lograrlo?")
    target_profession = models.ForeignKey(Profession, on_delete=models.SET_NULL, null=True, blank=True, related_name='chosen_in_projects')
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Proyecto de Vida de {self.user.username}"

class Goal(models.Model):
    """
    Metas a corto, mediano o largo plazo dentro del proyecto de vida.
    """
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
