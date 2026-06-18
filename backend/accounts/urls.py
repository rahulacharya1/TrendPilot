from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, MyTokenObtainPairView, AdminUserListView, AdminToggleStaffView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view()),
    path('register/', RegisterView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('admin/users/', AdminUserListView.as_view()),
    path('admin/users/<int:pk>/', AdminUserListView.as_view()),
    path('admin/users/<int:pk>/toggle-staff/', AdminToggleStaffView.as_view()),
]
