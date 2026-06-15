from django.urls import path
from .views import (
    ReflexionListView,
    ReflexionDetailView,
    ResultadoView,
    ProyectoVidaView,
    AdminStatsView,
    AdminUsersView,
)

urlpatterns = [
    # JWT protected endpoints, ID is inferred from the token
    path('reflections/', ReflexionListView.as_view(), name='reflexion-list'),
    path('reflections/<int:orden>/', ReflexionDetailView.as_view(), name='reflexion-detail'),
    path('results/', ResultadoView.as_view(), name='resultado-detail'),
    path('life-project/', ProyectoVidaView.as_view(), name='proyecto-vida'),
    path('admin/stats/', AdminStatsView.as_view(), name='admin-stats'),
    path('admin/users/', AdminUsersView.as_view(), name='admin-users'),
]
