from django.db import models

# Create your models here.
class Project(models.Model):
    class ProjectStatus(models.TextChoices):
        BUILT = "Completed"
        CONSTRUCTION = 'Under Construction'
        DESIGN = 'Design'
    title = models.CharField(max_length=255)
    description = models.TextField()
    long_description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='media/projects/images/', blank=True, null=True)
    video = models.FileField(upload_to='media/projects/videos/', blank=True, null=True)
    client = models.CharField(max_length=255)
    consultant = models.CharField(max_length=255)
    contractor = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    # geolocation = gis_models.PointField(null=True, blank=True)  # GIS field for geolocation
    status = models.CharField(max_length=30, choices=ProjectStatus, default=ProjectStatus.DESIGN)
    slug = models.SlugField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-created_at']