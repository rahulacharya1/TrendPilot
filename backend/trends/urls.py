from django.urls import path
from .views import TrendListView

urlpatterns = [
    path('', TrendListView.as_view()),
]
