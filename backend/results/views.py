from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Result
from .serializers import ResultSerializer
from .services import calculate_result

class ResultListView(generics.ListAPIView):
    """
    Lista los resultados del usuario autenticado.
    """
    serializer_class = ResultSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Result.objects.filter(user=self.request.user).order_by('-created_at')

class ResultDetailView(generics.RetrieveAPIView):
    """
    Detalle de un resultado específico.
    """
    serializer_class = ResultSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Result.objects.filter(user=self.request.user)

class SubmitTestView(APIView):
    """
    Recibe las respuestas del usuario y calcula el resultado.
    """
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        answers = request.data.get('answers', [])
        if not answers:
            return Response({'error': 'No answers provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            result = calculate_result(request.user, answers)
            serializer = ResultSerializer(result)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
