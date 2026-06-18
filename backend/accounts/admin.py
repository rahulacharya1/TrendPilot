from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        ('Creator Profile', {'fields': ('niche', 'platform', 'audience_type')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Creator Profile', {'fields': ('niche', 'platform', 'audience_type')}),
    )
    list_display = ('username', 'email', 'niche', 'platform', 'is_staff')

admin.site.register(User, CustomUserAdmin)
