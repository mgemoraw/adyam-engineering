from django.db import models
# from django.contrib.gis.db import models as gis_models
from django.utils import timezone


# Create your models here.
class BlogPost(models.Model):
    title: str = models.CharField(max_length=255)
    content: str = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    


# blog models
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15, blank=True, null=True)
    message = models.TextField()
    image = models.ImageField(upload_to='media/contact/images/', blank=True, null=True)
    video = models.FileField(upload_to='media/contact/videos/', blank=True, null=True)
    is_read = models.BooleanField(default=False)
    is_important = models.BooleanField(default=False)
    is_archived = models.BooleanField(default=False)
    is_spam = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    is_replied = models.BooleanField(default=False)
    reply = models.TextField(blank=True, null=True)
    reply_date = models.DateTimeField(blank=True, null=True)
    reply_by = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.email}"


class PrivacyPolicy(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title  


class Service(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    # slug = models.SlugField(max_length=255, unique=True)
    long_description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='media/services/images/', blank=True, null=True)
    video = models.FileField(upload_to='media/services/videos/', blank=True, null=True)
    icon = models.ImageField(upload_to='media/services/icons/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Slider(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='media/sliders/images/', blank=True, null=True)
    video = models.FileField(upload_to='media/sliders/videos/', blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at', 'order']  # Order by created_at descending and then by order ascending

    def __str__(self):
        return self.title



class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=100)
    facebook = models.CharField(max_length=255)
    linkedin = models.CharField(max_length=255)
    twitter = models.CharField(max_length=255)
    whatsapp = models.CharField(max_length=255)
    telegram = models.CharField(max_length=255)


    def __str__(self):
        return f"+251-{self.phone[1:]}"
    

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    image = models.ImageField(upload_to='media/team/images/', blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    experience = models.TextField(blank=True, null=True)
    skills = models.CharField(max_length=255, blank=True, null=True)  # Comma-separated list of skills
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.name    