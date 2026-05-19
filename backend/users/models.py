from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """
    Modelo de usuario personalizado.
    Extiende AbstractUser para incluir campos adicionales en el futuro si es necesario.
    """
    email = models.EmailField(unique=True)
    
    # Añade cualquier otro campo que necesites para el test vocacional
    # phone_number = models.CharField(max_length=15, blank=True, null=True)
    # date_of_birth = models.DateField(blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email
