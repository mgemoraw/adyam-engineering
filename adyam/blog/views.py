from django.shortcuts import render, redirect
from django.http import Http404
from .models import Post
from .forms import PostForm

# Create your views here.
def blog_home(request):

    posts = Post.publishes.all()
    context = {"posts": posts}

    return render(request, 'blog/posts.html', context = context)


def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('blog:home')  # Change this to your post list or detail view
    else:
        form = PostForm()
    return render(request, 'blog/create_post.html', {'form': form})


def post_detail(request, id):
    
    try:
        post = Post.publishes.get(id=id)
    except Post.DoesNotExist:
        raise Http404("No Post Found")
    finally:
        return render(request, 'blog/detail.html', {"post": post})