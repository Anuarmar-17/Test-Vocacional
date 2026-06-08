from rest_framework import serializers
from .models import Student, TestResult, LifeProject, Goal


class StudentRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('nombre', 'correo', 'grado', 'curso', 'edad', 'session_id')
        read_only_fields = ('session_id',)

    def create(self, validated_data):
        return Student.objects.create(**validated_data)


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'nombre', 'correo', 'grado', 'curso', 'edad', 'session_id', 'created_at')
        read_only_fields = ('id', 'session_id', 'created_at')


class TestResultSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.nombre', read_only=True)

    class Meta:
        model = TestResult
        fields = ('id', 'student', 'student_name', 'respuestas', 'resultados_por_area', 'estado', 'created_at')
        read_only_fields = ('id', 'created_at')


class TestResultSubmitSerializer(serializers.Serializer):
    session_id = serializers.UUIDField()
    respuestas = serializers.ListField(child=serializers.DictField(), required=True)

    def validate_session_id(self, value):
        if not Student.objects.filter(session_id=value).exists():
            raise serializers.ValidationError("No existe un estudiante con ese session_id")
        return value


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ('id', 'title', 'description', 'term', 'is_completed', 'created_at')
        read_only_fields = ('id', 'created_at')


class LifeProjectSerializer(serializers.ModelSerializer):
    goals = GoalSerializer(many=True, read_only=True)

    class Meta:
        model = LifeProject
        fields = ('id', 'student', 'vision', 'mission', 'target_profession', 'updated_at', 'goals')
        read_only_fields = ('id', 'student', 'updated_at')
