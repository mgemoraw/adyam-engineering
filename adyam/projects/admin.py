from django.contrib import admin
from .models import Project


# Register your models here.

class ProjectAdmin(admin.AdminSite):
    site_header = 'Adyam Engineering Projects Admin'
    site_title = 'Adyam Engineering Projects Admin'

project_admin = ProjectAdmin(name='ProjectAdmin')
project_admin.register(Project)
