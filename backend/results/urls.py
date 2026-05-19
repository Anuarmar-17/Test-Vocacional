from django.urls import path
from .views import ResultListView, ResultDetailView, SubmitTestView

urlpatterns = [
    path('', ResultListView.as_view(), name='result-list'),
    path('<int:pk>/', ResultDetailView.as_view(), name='result-detail'),
    path('submit/', SubmitTestView.as_view(), name='submit-test'),
]
