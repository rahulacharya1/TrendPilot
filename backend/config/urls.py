from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/v1/accounts/', include('accounts.urls')),
    path('api/v1/trends/', include('trends.urls')),
    path('api/v1/hooks/', include('hooks.urls')),
    path('api/v1/scripts/', include('scripts.urls')),
    path('api/v1/competitors/', include('competitors.urls')),
    path('api/v1/analytics/', include('analytics.urls')),
]
