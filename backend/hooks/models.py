from django.db import models
from django.contrib.auth import get_user_model
from trends.models import Trend

User = get_user_model()

class Hook(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    trend = models.ForeignKey(Trend, on_delete=models.CASCADE)
    hook_type = models.CharField(max_length=50)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.hook_type} for {self.trend.title}"
    
