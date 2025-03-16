from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


# Create your models here.

# custom manager
class PublishesManger(models.Manager):
    def get_queryset(self) -> models.QuerySet:
        return super().get_queryset().filter(status=Post.Status.PUBLISHED)
    

class Post(models.Model):

    class Status(models.TextChoices):
        DRAFT = "DF", "Draft"
        PUBLISHED = "PB", "Published"

    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250)
    body = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts', null=True)
    published = models.DateTimeField(default=timezone.now())
    created = models.DateTimeField(auto_now_add=True) # value is set when post is first created
    updated = models.DateTimeField(auto_now=True) # updated every time the post is updated
    status = models.CharField(max_length=2, choices=Status.choices, default=Status.DRAFT)

    # manager
    objects = models.Manager
    publishes = PublishesManger()

    class Meta:
        ordering = ['-published']

        indexes = [
            models.Index(fields=['-published']),
        ]
    def __str__(self):
        return self.title
    

