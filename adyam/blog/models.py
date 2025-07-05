from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


# Create your models here.

# custom manager
class PublishesManger(models.Manager):
    def get_queryset(self) -> models.QuerySet:
        return super().get_queryset().filter(status=Post.StatusChoices.PUBLISHED)
    

class Post(models.Model):

    class StatusChoices(models.TextChoices):
        DRAFT = "DF", "Draft"
        PUBLISHED = "PB", "Published"

    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250)
    body = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts', null=True)
    publish = models.BooleanField(default=False)
    published_at = models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField(auto_now_add=True) # value is set when post is first created
    updated_at = models.DateTimeField(auto_now=True, null=True) # updated every time the post is updated
    status = models.CharField(max_length=10, choices=StatusChoices.choices, default=StatusChoices.DRAFT)

    # manager
    objects = models.Manager
    publishes = PublishesManger()

    class Meta:
        ordering = ['-published_at']

        indexes = [
            models.Index(fields=['-published_at']),
        ]
    def __str__(self):
        return self.title
    

