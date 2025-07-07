from django.shortcuts import render, get_list_or_404, redirect, get_object_or_404
from django.contrib.auth.models import User, Group
from django.contrib.auth.decorators import login_required

from django.contrib.auth import login, logout, authenticate
from django.core.mail import send_mail
from django.contrib import messages
from .models import ContactMessage, BlogPost, Service, Slider, Contact, TeamMember
from projects.models import Project
from .forms import  ContactMessageForm
from django.utils import timezone


# Create your views here.
def home(request):
    services = Service.objects.all()
    projects = Project.objects.all()
    sliders = Slider.objects.all  # Assuming you have a Slider model for the slider section
    posts = BlogPost.objects.order_by('-published_at')[:3]  # Get the latest 3 blog posts
    contacts = Contact.objects.first()
    teams = TeamMember.objects.all()  # Assuming you have a TeamMembers model for the team section
    # messages = Contac.get_messages(request)  # Get messages to display in the template    
    context = {
        'services': services, 
        'projects': projects, 
        'posts': posts, 
        'sliders': sliders, 
        'contacts': contacts,
        'teams': teams,
    }

    if request.method == 'POST':
        form = ContactMessageForm(request.POST)
        context['contact_form'] = form  # Add the form to the context
        if form.is_valid():
            form.save()
            return redirect('core:home', context=context)  # or success page
    else:
        form = ContactMessageForm()
        context['contact_form'] = form
    return render(request, template_name='core/home.html', context=context)



def custom_404_redirect(request, exception):
    return redirect('core/page_not_found_404.html')  # or any named URL you want

def custom_500_redirect(request):
    return redirect('core:home')  # or any named URL you want

def custom_403_redirect(request, exception):
    return redirect('core:home')  # or any named URL you want
def custom_400_redirect(request, exception):
    return redirect('core:home')  # or any named URL you want


def user_register(request):
    context = {}
    if request.method == "POST":
        user = User.objects.create_user(
            username=request.POST.get('username'),
            email=request.POST.get('email'),
            password=request.POST.get('password'),
            first_name=request.POST.get('fname'),
            last_name=request.POST.get('lname'),
        )
        if user:
            user.save()
            context.update({"message": f"{user.username} registered successfully"})

    return render(request, 'core/register.html', context=context)

def user_login(request):

    context = {"message": ""}
    if request.method=="POST":
        user_data = {
            'username': request.POST.get('username'),
            'password': request.POST.get('password'),
        }

        if user_data:
            user = authenticate(
                request,
                username=user_data['username'],
                password=user_data['password'],
                )
            # context.update({'user_data': user_data} )

            if user:
                login(request, user)

                context['message'] = "User logged in successfully!"
                
                return redirect('core:home')

            context['message'] = "Wrong Username/Password please try with a valid password and username!"

        
        context['message'] = "User not registered! Please enter a valid username and password or contact admin"
        return render(request, 'core/login.html', context=context)

    return render(request, 'core/login.html', context=context)


def user_logout(request):
    logout(request)

    context = {'message': 'user logged out '}
    return render(request, template_name='core/home.html', context=context)


def profile(request):
    context = {}
    return render(request, template_name='core/profile.html', context=context)

def change_password(request):
    context = {}
    return render(request, template_name='core/profile.html', context=context)


def settings(request):
    context = {}
    return render(request, template_name='core/settings.html', context=context)



def contact_view(request):
    if request.method == 'POST':
        form = ContactMessageForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Profile updated successfully.")
            return redirect("core:home")  # or success page

    else:
        form = ContactMessageForm()
    return redirect("core:home")


def contact_us(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        phone = request.POST.get('phone', '')  # Optional phone field
        ContactMessage.objects.create(name=name, email=email, message=message)
        messages.success(request, "Thank you for contacting us. We'll get back to you soon!")
        return redirect('core:home')

    return redirect('core:home')

def send_contact_message(request):
    """    Handle contact form submission and send an email with the message.
    """    
    if not request.user.is_authenticated:
        messages.error(request, 'You must be logged in to send a message.')             
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        full_message = f"From: {name} <{email}>\n\nMessage:\n{message}"
        
        send_mail(
            subject='New Contact Message',
            message=full_message,
            from_email=email,
            recipient_list=['adyamengineering@gmail.com'],
        )
        
        messages.success(request, 'Your message has been sent!')
        return redirect('core:home')
    return redirect('core:home')


def dashboard(request):
    context = {}
    return render(request, 'core/dashboard.html', context=context)

def homepage(request):
    posts = BlogPost.objects.order_by('-created_at')[:3]
    return render(request, 'core/home.html', {'posts': posts})

def blog_detail(request, slug):
    post = get_object_or_404(BlogPost, slug=slug)
    return render(request, 'core/blog_detail.html', {'post': post})


def privacy_policy(request):
    return render(request, 'core/privacy_policy.html')


def terms_of_service(request):
    return render(request, 'core/terms_of_service.html')



def about_us(request):
    contacts = Contact.objects.first();
    return render(request, 'core/about.html', {'contacts': contacts})


def services_list(request):
    services = Service.objects.all()
    return render(request, 'core/services.html', {'services': services})


def service_detail(request, id:int):
    service = Service.objects.filter(id=id).first()

    # service = get_object_or_404(Service, id=id)
    if not service:
        return render(request, 'core/404.html', status=404)
    
    return render(request, 'core/service_detail.html', context={'service': service})

def news_list(request):
    posts = BlogPost.objects.all()
    news = Slider.objects.all() 
    return render(request, 'core/blogs.html', {'posts': posts, 'news': news})