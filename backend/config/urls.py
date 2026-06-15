from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/accounts/', include('accounts.urls')),
    path('api/trends/', include('trends.urls')),
    path('api/hooks/', include('hooks.urls')),
    path('api/scripts/', include('scripts.urls')),
    path('api/competitors/', include('competitors.urls')),
]
