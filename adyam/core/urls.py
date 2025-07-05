from django.urls import path, include


from .views import (
    home, 
    user_login, 
    user_register, 
    user_logout,
    profile,
    settings,
    change_password,
    contact_view,
    blog_detail,
    privacy_policy,
    dashboard,
    services_list,
    service_detail,
    about_us,
    )

app_name="core"


urlpatterns = [
    path('', home, name='home'),
    # path('', dashboard, name='dashboard'),
    path('login/', user_login, name='user-login'),
    path('logout/', user_logout, name='user-logout'),
    path('register/', user_register, name='user-register'),
    path('profile/', profile, name='profile'),
    path('settings/', settings, name='settings'),
    path('change-password/', change_password, name='change-password'),
    path('contact-us/', contact_view, name='contact-us'),
    path('news/<slug:slug>/', blog_detail, name='blog-detail'),
    path('privacy-policy/', privacy_policy, name='privacy-policy'),
    path("services/", services_list, name="services"),
    path('services/<int:id>/', service_detail, name='service-detail'),
    path('about/', about_us, name='about'),
]