from rest_framework import serializers
from .models import Area, Question, Option

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ('id', 'name', 'description')

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ('id', 'text', 'score')

class QuestionSerializer(serializers.ModelSerializer):
    area = AreaSerializer(read_only=True)
    
    class Meta:
        model = Question
        fields = ('id', 'text', 'area', 'order')
