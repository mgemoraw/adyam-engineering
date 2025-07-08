from django.urls import path
from . import views

app_name = 'api'

urlpataterns = [
    path('auth/',views.AuthView.as_view(), name='auth'),
]