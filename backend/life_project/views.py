from rest_framework import generics, permissions
from .models import LifeProject, Goal
from .serializers import LifeProjectSerializer, GoalSerializer
from django.shortcuts import get_object_or_404

class LifeProjectView(generics.RetrieveUpdateAPIView):
    """
    Obtiene o actualiza el proyecto de vida del usuario autenticado.
    Si no existe, se crea al consultarlo por primera vez.
    """
    serializer_class = LifeProjectSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        project, created = LifeProject.objects.get_or_create(user=self.request.user)
        return project

class GoalListCreateView(generics.ListCreateAPIView):
    """
    Lista y crea metas para el proyecto de vida del usuario autenticado.
    """
    serializer_class = GoalSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        project, _ = LifeProject.objects.get_or_create(user=self.request.user)
        return Goal.objects.filter(project=project)

    def perform_create(self, serializer):
        project, _ = LifeProject.objects.get_or_create(user=self.request.user)
        serializer.save(project=project)

class GoalDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Detalle, actualización y eliminación de una meta específica.
    """
    serializer_class = GoalSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        project, _ = LifeProject.objects.get_or_create(user=self.request.user)
        return Goal.objects.filter(project=project)
