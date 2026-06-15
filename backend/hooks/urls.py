from django.urls import path
from .views import GenerateHooksView, HookListView

urlpatterns = [
    path('', HookListView.as_view()),
    path('generate/', GenerateHooksView.as_view()),
]
