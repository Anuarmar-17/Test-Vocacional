from rest_framework import generics, permissions
from .models import Profession
from .serializers import ProfessionSerializer

class ProfessionListView(generics.ListAPIView):
    """
    Devuelve la lista de profesiones disponibles.
    """
    queryset = Profession.objects.all()
    serializer_class = ProfessionSerializer
    permission_classes = (permissions.IsAuthenticated,)

class ProfessionDetailView(generics.RetrieveAPIView):
    """
    Devuelve los detalles de una profesión específica.
    """
    queryset = Profession.objects.all()
    serializer_class = ProfessionSerializer
    permission_classes = (permissions.IsAuthenticated,)
