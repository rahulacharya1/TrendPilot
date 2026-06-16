from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Trend(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=255)
    platform = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    score = models.IntegerField(default=0)
    freshness = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
