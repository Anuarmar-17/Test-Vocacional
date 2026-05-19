from django.contrib import admin
from .models import Area, Question, Option

@admin.register(Area)
class AreaAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('text', 'area', 'order', 'is_active')
    list_filter = ('area', 'is_active')
    search_fields = ('text',)

@admin.register(Option)
class OptionAdmin(admin.ModelAdmin):
    list_display = ('text', 'score')
