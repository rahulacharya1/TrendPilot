from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, MyTokenObtainPairView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view()),
    path('register/', RegisterView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
]
