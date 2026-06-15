from django.urls import path
from .views import GenerateScriptView, ScriptListView

urlpatterns = [
    path('', ScriptListView.as_view()),
    path('generate/', GenerateScriptView.as_view()),
]
