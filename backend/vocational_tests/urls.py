from django.urls import path
from .views import QuestionListView, OptionListView

urlpatterns = [
    path('questions/', QuestionListView.as_view(), name='question-list'),
    path('options/', OptionListView.as_view(), name='option-list'),
]
