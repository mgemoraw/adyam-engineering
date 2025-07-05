from django.urls import path, include
from . import views
from .admin import project_admin

app_name = "projects"

urlpatterns = [
    path('dashboard/', project_admin.urls, name='project-admin'),  # Include the project's admin URLs
    path('create/', views.create_project, name='create-project'),  # Include the project's API URLs
]
