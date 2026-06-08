from django.contrib import admin
from .models import Student, TestResult, LifeProject, Goal


class GoalInline(admin.TabularInline):
    model = Goal
    extra = 1


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'grado', 'curso', 'session_id', 'created_at')
    search_fields = ('nombre', 'correo')
    readonly_fields = ('session_id', 'created_at')


@admin.register(TestResult)
class TestResultAdmin(admin.ModelAdmin):
    list_display = ('student', 'estado', 'created_at')
    list_filter = ('estado',)


@admin.register(LifeProject)
class LifeProjectAdmin(admin.ModelAdmin):
    list_display = ('student', 'target_profession', 'updated_at')
    inlines = [GoalInline]


@admin.register(Goal)
class GoalAdmin(admin.ModelAdmin):
    list_display = ('title', 'project', 'term', 'is_completed')
    list_filter = ('term', 'is_completed')
