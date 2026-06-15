from django.db import models

class CompetitorAnalysis(models.Model):
    creator_name = models.CharField(max_length=255)
    platform = models.CharField(max_length=50)
    content_angle = models.TextField()
    gap_found = models.TextField()
    competitor_trends = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Competitor Analysis for {self.creator_name} on {self.platform}"
    
