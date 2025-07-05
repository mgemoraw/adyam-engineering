from django.shortcuts import render, redirect
from .models import Project
from .forms import ProjectForm
from django.contrib import messages



# Create your views here.

def create_project(request):
    form = ProjectForm(request.POST or None)
    if request.method == 'POST' and form.is_valid():
        project = form.save(commit=False)
        project.save()
        messages.success(request, f"Project '{project.title}' created successfully!")
        return redirect('core:dashboard')
    

    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        client = request.POST.get('client')
        consultant = request.POST.get('consultant')
        contractor = request.POST.get('contractor')
        location = request.POST.get('location')
        status = request.POST.get('status')
        slug = request.POST.get('slug')

        project = Project.objects.create(
            title=title,
            description=description,
            client=client,
            consultant=consultant,
            contractor=contractor,
            location=location,
            status=status,
            slug=slug
        )
        
        messages.success(request, f"Project '{project.title}' created successfully!")
        return redirect('core:dashboard')

    return render(request, 'core/create_project.html')