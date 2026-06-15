from rest_framework import serializers
from .models import Hook

class HookSerializer(serializers.ModelSerializer):
    trend_title = serializers.CharField(source='trend.title', read_only=True)

    class Meta:
        model = Hook
        fields = ['id', 'trend', 'trend_title', 'hook_type', 'content', 'created_at']
