from django.contrib import admin
from .models import Result, AreaScore

class AreaScoreInline(admin.TabularInline):
    model = AreaScore
    extra = 0
    readonly_fields = ('area', 'score')

@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at')
    inlines = [AreaScoreInline]
    filter_horizontal = ('recommended_professions',)
