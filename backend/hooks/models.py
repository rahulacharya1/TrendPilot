from django.db import models
from trends.models import Trend

class Hook(models.Model):
    trend = models.ForeignKey(Trend, on_delete=models.CASCADE)
    hook_type = models.CharField(max_length=50)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.hook_type} for {self.trend.title}"
    
