from rest_framework import generics, permissions
from .models import Question, Option
from .serializers import QuestionSerializer, OptionSerializer

class QuestionListView(generics.ListAPIView):
    """
    Devuelve la lista de preguntas activas para el test.
    """
    queryset = Question.objects.filter(is_active=True)
    serializer_class = QuestionSerializer
    permission_classes = (permissions.IsAuthenticated,)

class OptionListView(generics.ListAPIView):
    """
    Devuelve las opciones de respuesta disponibles para las preguntas.
    """
    queryset = Option.objects.all()
    serializer_class = OptionSerializer
    permission_classes = (permissions.IsAuthenticated,)
