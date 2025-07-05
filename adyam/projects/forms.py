from django import forms

from projects.models import Project 


# forms for the Project model
# These forms are used to create and update project instances in the admin interface or other parts of the application.
# They define the fields that will be displayed in the form, their widgets, and labels.
# The widgets define the HTML input types and classes for styling, while the labels provide user
class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ['title', 'description', 'client', 'consultant', 'contractor', 'location', 'status', 'slug']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input'}),
            'description': forms.Textarea(attrs={'class': 'form-textarea'}),
            'client': forms.TextInput(attrs={'class': 'form-input'}),
            'consultant': forms.TextInput(attrs={'class': 'form-input'}),
            'contractor': forms.TextInput(attrs={'class': 'form-input'}),
            'location': forms.TextInput(attrs={'class': 'form-input'}),
            'status': forms.Select(attrs={'class': 'form-select'}),
            'slug': forms.TextInput(attrs={'class': 'form-input'}),
        }
        labels = {
            'title': 'Project Title',
            'description': 'Project Description',
            'client': 'Client Name',
            'consultant': 'Consultant Name',
            'contractor': 'Contractor Name',
            'location': 'Project Location',
            'status': 'Project Status',
            'slug': 'Project Slug',
        }