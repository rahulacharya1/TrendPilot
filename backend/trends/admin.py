from django.contrib import admin
from .models import Trend

@admin.register(Trend)
class TrendAdmin(admin.ModelAdmin):
    list_display = ('title', 'platform', 'category', 'score', 'freshness', 'user', 'created_at')
    list_filter = ('platform', 'category', 'freshness')
    search_fields = ('title', 'category')
