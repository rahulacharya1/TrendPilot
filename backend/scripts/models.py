from django.db import models
from trends.models import Trend

class Script(models.Model):
    trend = models.ForeignKey(Trend, on_delete=models.CASCADE)
    script = models.TextField()
    caption = models.TextField()
    hashtags = models.TextField()
    cta = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Script for {self.trend.title}"
    
