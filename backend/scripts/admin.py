from django.contrib import admin
from .models import Script

@admin.register(Script)
class ScriptAdmin(admin.ModelAdmin):
    list_display = ('trend', 'user', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('script', 'caption', 'hashtags', 'cta')
