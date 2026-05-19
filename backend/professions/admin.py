from django.contrib import admin
from .models import Profession

@admin.register(Profession)
class ProfessionAdmin(admin.ModelAdmin):
    list_display = ('name', 'job_market_trend', 'average_salary')
    search_fields = ('name',)
    filter_horizontal = ('areas_related',)
