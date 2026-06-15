from django.urls import path
from .views import GenerateHooksView

urlpatterns = [
    path('generate/', GenerateHooksView.as_view()),
]
