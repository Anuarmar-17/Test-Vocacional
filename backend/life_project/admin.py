from django.contrib import admin
from .models import LifeProject, Goal

class GoalInline(admin.TabularInline):
    model = Goal
    extra = 1

@admin.register(LifeProject)
class LifeProjectAdmin(admin.ModelAdmin):
    list_display = ('user', 'target_profession', 'updated_at')
    inlines = [GoalInline]

@admin.register(Goal)
class GoalAdmin(admin.ModelAdmin):
    list_display = ('title', 'project', 'term', 'is_completed')
    list_filter = ('term', 'is_completed')
