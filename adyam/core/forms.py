from .models import Service, PrivacyPolicy, ContactMessage
from django import forms

class ContactMessageForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-input'}),
            'email': forms.EmailInput(attrs={'class': 'form-input'}),
            'message': forms.Textarea(attrs={'class': 'form-textarea'}),
        }
        labels = {
            'name': 'Your Name',
            'email': 'Your Email',
            'message': 'Your Message',
        }

class PrivacyPolicyForm(forms.ModelForm):
    class Meta:
        model = PrivacyPolicy
        fields = ['title', 'content']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input'}),
            'content': forms.Textarea(attrs={'class': 'form-textarea'}),
        }
        labels = {
            'title': 'Policy Title',
            'content': 'Policy Content',
        }


class ServicesForm(forms.ModelForm):
    class Meta:
        model = Service
        fields = ['title', 'description']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input'}),
            'description': forms.Textarea(attrs={'class': 'form-textarea'}),
        }
        labels = {
            'title': 'Service Title',
            'description': 'Service Description',
        }


