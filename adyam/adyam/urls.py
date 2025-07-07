"""
URL configuration for adyam project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from core.views import custom_404_redirect, custom_500_redirect, custom_403_redirect, custom_400_redirect
# from core import project_admin

# project/urls.py


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('blog/', include('blog.urls')),
    path('notes/', include('notes.urls')),
    path('projects/', include('projects.urls')),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'core.views.custom_404_redirect'
handler500 = 'core.views.custom_500_redirect'
handler403 = 'core.views.custom_403_redirect'
handler400 = 'core.views.custom_400_redirect'
