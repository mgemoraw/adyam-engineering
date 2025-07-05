from django.contrib import admin
from .models import  ContactMessage, PrivacyPolicy, Service, Slider, Contact, TeamMember
from projects.models import Project


# Register your models here.

admin.site.register(Contact)

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    """Admin interface for managing team members."""
    list_display = ('name', 'position', 'image', 'created_at', 'updated_at')
    search_fields = ('name', 'position')
    ordering = ('-created_at',)

    
@admin.register(Slider)
class SliderAdmin(admin.ModelAdmin):
    """Admin interface for managing sliders."""
    list_display = ('title', 'image', 'created_at', 'updated_at')
    search_fields = ('title',)
    ordering = ('-created_at',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    """Admin interface for managing projects."""
    list_display = ('title', 'client', 'consultant', 'contractor', 'location', 'status', 'slug', 'created_at')
    search_fields = ('title', 'client', 'consultant', 'contractor', 'location')
    list_filter = ('status',)
    prepopulated_fields = {'slug': ('title',)}
    ordering = ('-created_at',) # Order by created_at in descending order

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email')
    ordering = ('-created_at',) # Order by created_at in descending order   


@admin.register(PrivacyPolicy)
class PrivacyPolicyAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')
    search_fields = ('title',)
    ordering = ('-created_at',) # Order by created_at in descending order   


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):  
    list_display = ('title', 'created_at', 'updated_at')
    search_fields = ('title',)
    ordering = ('-created_at',) # Order by created_at in descending order   

