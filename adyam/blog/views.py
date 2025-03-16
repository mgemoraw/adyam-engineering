from django.shortcuts import render
from django.http import Http404
from .models import Post

# Create your views here.
def blog_home(request):

    posts = Post.publishes.all()
    context = {"posts": posts}

    return render(request, 'blog/posts.html', context = context)


def post_detail(request, id):
    
    try:
        post = Post.publishes.get(id=id)
    except Post.DoesNotExist:
        raise Http404("No Post Found")
    finally:
        return render(request, 'blog/detail.html', {"post": post})