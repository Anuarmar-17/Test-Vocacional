from rest_framework import serializers
from .models import LifeProject, Goal

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ('id', 'title', 'description', 'term', 'is_completed', 'created_at')
        read_only_fields = ('id', 'created_at')

class LifeProjectSerializer(serializers.ModelSerializer):
    goals = GoalSerializer(many=True, read_only=True)

    class Meta:
        model = LifeProject
        fields = ('id', 'user', 'vision', 'mission', 'target_profession', 'updated_at', 'goals')
        read_only_fields = ('id', 'user', 'updated_at')
