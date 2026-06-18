from django.contrib import admin
from .models import CompetitorAnalysis

@admin.register(CompetitorAnalysis)
class CompetitorAnalysisAdmin(admin.ModelAdmin):
    list_display = ('creator_name', 'platform', 'user', 'created_at')
    list_filter = ('platform', 'created_at')
    search_fields = ('creator_name', 'content_angle', 'gap_found', 'competitor_trends')
