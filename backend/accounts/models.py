from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    niche = models.CharField(max_length=100, blank=True)
    platform = models.CharField(max_length=50, blank=True)
    audience_type = models.CharField(max_length=100, blank=True)
    
    def __str__(self):
        return self.username

