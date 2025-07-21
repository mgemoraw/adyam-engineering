from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'api'


router = DefaultRouter()
router.register(r"contact-messages", views.ContactMessageViewSet, basename='contact_message')


urlpatterns = [
     # path('auth/',views.AuthView.as_view(), name='auth'),
    path('', include(router.urls) ),
    path('teams/', views.AdyamTeam.as_view(), name='teams' ),
    path('sliders/', views.SliderView.as_view(), name='sliders' ),
    path('services/', views.ServiceView.as_view(), name='services' ),
    path('contacts/', views.ContactView.as_view(), name='contacts' ),
]
