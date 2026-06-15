from django.urls import path
from .views import CompetitorGapView

urlpatterns = [
    path('gap/', CompetitorGapView.as_view()),
]
