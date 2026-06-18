from django.urls import path
from .views import TrendListView, AdminTrendDetailView

urlpatterns = [
    path('', TrendListView.as_view()),
    path('admin/<int:pk>/', AdminTrendDetailView.as_view()),
]
