from django.urls import path
from .views import LifeProjectView, GoalListCreateView, GoalDetailView

urlpatterns = [
    path('', LifeProjectView.as_view(), name='life-project-detail'),
    path('goals/', GoalListCreateView.as_view(), name='goal-list'),
    path('goals/<int:pk>/', GoalDetailView.as_view(), name='goal-detail'),
]
