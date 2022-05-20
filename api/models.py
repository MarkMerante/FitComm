from django.db import models
from django.utils import timezone

class UserPost(models.Model):
    subject = models.CharField(max_length=200)
    textPost = models.TextField()
    author = models.CharField(max_length=50)
    date_posted = models.DateTimeField(default=timezone.now)

    