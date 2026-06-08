from django.urls import path
from .views import (
    StudentRegisterView,
    SubmitResultView,
    GetResultView,
    LifeProjectView,
    GoalListCreateView,
    GoalDetailView,
    AdminStudentListView,
    AdminStudentDetailView,
    AdminStatsView,
    AdminResultListView,
)

urlpatterns = [
    # Student endpoints (public, with session_id)
    path('students/register/', StudentRegisterView.as_view(), name='student-register'),
    path('results/submit/', SubmitResultView.as_view(), name='result-submit'),
    path('results/<uuid:session_id>/', GetResultView.as_view(), name='result-detail'),
    path('life-project/<uuid:session_id>/', LifeProjectView.as_view(), name='life-project-detail'),
    path('goals/<uuid:session_id>/', GoalListCreateView.as_view(), name='goal-list'),
    path('goals/<uuid:session_id>/<int:pk>/', GoalDetailView.as_view(), name='goal-detail'),

    # Admin endpoints (protected with JWT)
    path('admin/stats/', AdminStatsView.as_view(), name='admin-stats'),
    path('admin/students/', AdminStudentListView.as_view(), name='admin-student-list'),
    path('admin/students/<int:pk>/', AdminStudentDetailView.as_view(), name='admin-student-detail'),
    path('admin/results/', AdminResultListView.as_view(), name='admin-result-list'),
]
