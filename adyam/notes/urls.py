from django.urls import path
from . import views


urlpatterns = [
    path('', views.notes, name="notes"),
    path('notes/', views.NoteViewSet.as_view()),
]