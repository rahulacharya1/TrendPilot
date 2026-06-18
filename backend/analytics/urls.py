from django.urls import path
from .views import DashboardStatsView, AdminStatsView

urlpatterns = [
    path('stats/', DashboardStatsView.as_view()),
    path('admin/stats/', AdminStatsView.as_view()),
]
