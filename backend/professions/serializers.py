from rest_framework import serializers
from .models import Profession
from vocational_tests.serializers import AreaSerializer

class ProfessionSerializer(serializers.ModelSerializer):
    areas_related = AreaSerializer(many=True, read_only=True)

    class Meta:
        model = Profession
        fields = ('id', 'name', 'description', 'areas_related', 'job_market_trend', 'average_salary')
