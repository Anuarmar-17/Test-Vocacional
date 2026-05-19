from django.urls import path
from .views import ProfessionListView, ProfessionDetailView

urlpatterns = [
    path('', ProfessionListView.as_view(), name='profession-list'),
    path('<int:pk>/', ProfessionDetailView.as_view(), name='profession-detail'),
]
