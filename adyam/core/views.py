from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
    # return HttpResponse("<h1>Hello Django </h1>")
    context = {}
    return render(request, 'core/home.html', context = context)

def user_login(request):
    context = {}

    return render(request, 'core/login.html', context=context)
