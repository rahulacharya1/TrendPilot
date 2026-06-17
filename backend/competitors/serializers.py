from rest_framework import serializers
from .models import CompetitorAnalysis

class CompetitorAnalysisSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompetitorAnalysis
        fields = ['id', 'user', 'creator_name', 'platform', 'content_angle', 'gap_found', 'competitor_trends', 'created_at']
