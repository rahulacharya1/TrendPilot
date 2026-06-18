from django.contrib import admin
from .models import Hook

@admin.register(Hook)
class HookAdmin(admin.ModelAdmin):
    list_display = ('hook_type', 'trend', 'user', 'created_at')
    list_filter = ('hook_type', 'created_at')
    search_fields = ('content', 'hook_type')
