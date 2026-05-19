from rest_framework import serializers
from .models import Result, AreaScore
from vocational_tests.serializers import AreaSerializer
from professions.serializers import ProfessionSerializer

class AreaScoreSerializer(serializers.ModelSerializer):
    area = AreaSerializer(read_only=True)

    class Meta:
        model = AreaScore
        fields = ('id', 'area', 'score')

class ResultSerializer(serializers.ModelSerializer):
    area_scores = AreaScoreSerializer(many=True, read_only=True)
    recommended_professions = ProfessionSerializer(many=True, read_only=True)

    class Meta:
        model = Result
        fields = ('id', 'user', 'created_at', 'area_scores', 'recommended_professions')
        read_only_fields = ('id', 'user', 'created_at')
