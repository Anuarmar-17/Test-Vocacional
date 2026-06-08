from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .models import Student, TestResult, LifeProject, Goal
from .serializers import (
    StudentRegistrationSerializer,
    StudentSerializer,
    TestResultSerializer,
    TestResultSubmitSerializer,
    LifeProjectSerializer,
    GoalSerializer,
)
from .services import save_test_result
from core.responses import SuccessResponse, ErrorResponse


class StudentRegisterView(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentRegistrationSerializer
    permission_classes = (permissions.AllowAny,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        student = serializer.save()
        return Response({
            'success': True,
            'message': 'Estudiante registrado correctamente',
            'data': {
                'session_id': str(student.session_id),
                'nombre': student.nombre,
            }
        }, status=status.HTTP_201_CREATED)


class SubmitResultView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = TestResultSubmitSerializer(data=request.data)
        if not serializer.is_valid():
            return ErrorResponse(message='Datos inválidos', status=400)

        session_id = serializer.validated_data['session_id']
        respuestas = serializer.validated_data['respuestas']

        try:
            result = save_test_result(session_id, respuestas)
            result_serializer = TestResultSerializer(result)
            return SuccessResponse(
                data=result_serializer.data,
                message='Resultado guardado correctamente'
            )
        except Student.DoesNotExist:
            return ErrorResponse(message='Estudiante no encontrado', status=404)
        except Exception as e:
            return ErrorResponse(message=str(e), status=500)


class GetResultView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, session_id):
        try:
            student = Student.objects.get(session_id=session_id)
            result = TestResult.objects.filter(student=student).order_by('-created_at').first()
            if not result:
                return ErrorResponse(message='No hay resultados para este estudiante', status=404)
            serializer = TestResultSerializer(result)
            return SuccessResponse(data=serializer.data)
        except Student.DoesNotExist:
            return ErrorResponse(message='Estudiante no encontrado', status=404)


class LifeProjectView(generics.RetrieveUpdateAPIView):
    serializer_class = LifeProjectSerializer
    permission_classes = (permissions.AllowAny,)

    def get_object(self):
        session_id = self.kwargs.get('session_id')
        student = get_object_or_404(Student, session_id=session_id)
        project, created = LifeProject.objects.get_or_create(student=student)
        return project


class GoalListCreateView(generics.ListCreateAPIView):
    serializer_class = GoalSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        session_id = self.kwargs.get('session_id')
        student = get_object_or_404(Student, session_id=session_id)
        project, _ = LifeProject.objects.get_or_create(student=student)
        return Goal.objects.filter(project=project)

    def perform_create(self, serializer):
        session_id = self.kwargs.get('session_id')
        student = get_object_or_404(Student, session_id=session_id)
        project, _ = LifeProject.objects.get_or_create(student=student)
        serializer.save(project=project)


class GoalDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GoalSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        session_id = self.kwargs.get('session_id')
        student = get_object_or_404(Student, session_id=session_id)
        project, _ = LifeProject.objects.get_or_create(student=student)
        return Goal.objects.filter(project=project)


class AdminStudentListView(generics.ListAPIView):
    queryset = Student.objects.all().order_by('-created_at')
    serializer_class = StudentSerializer
    permission_classes = (permissions.IsAuthenticated,)


class AdminStudentDetailView(generics.RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = (permissions.IsAuthenticated,)


class AdminStatsView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        total_students = Student.objects.count()
        total_results = TestResult.objects.count()
        results_with_data = TestResult.objects.exclude(resultados_por_area={}).count()

        return SuccessResponse(data={
            'total_estudiantes': total_students,
            'total_resultados': total_results,
            'resultados_con_datos': results_with_data,
        })


class AdminResultListView(generics.ListAPIView):
    queryset = TestResult.objects.select_related('student').all().order_by('-created_at')
    serializer_class = TestResultSerializer
    permission_classes = (permissions.IsAuthenticated,)
