from django.db import models


# Create your models here.
class BlogPost(models.Model):
    title: str = models.CharField(max_length=255)
    content: str = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



