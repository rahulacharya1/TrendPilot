from django.urls import path
from .views import GenerateScriptView

urlpatterns = [
    path('generate/', GenerateScriptView.as_view()),
]
