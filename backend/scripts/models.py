from django.db import models
from django.contrib.auth import get_user_model
from trends.models import Trend

User = get_user_model()

class Script(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    trend = models.ForeignKey(Trend, on_delete=models.CASCADE)
    script = models.TextField()
    caption = models.TextField()
    hashtags = models.TextField()
    cta = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Script for {self.trend.title}"
    
