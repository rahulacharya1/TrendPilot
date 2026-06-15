from rest_framework import serializers
from .models import Script

class ScriptSerializer(serializers.ModelSerializer):
    trend_title = serializers.CharField(source='trend.title', read_only=True)

    class Meta:
        model = Script
        fields = ['id', 'trend', 'trend_title', 'script', 'caption', 'hashtags', 'cta', 'created_at']
