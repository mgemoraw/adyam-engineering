# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import permissions

from .models import BlogPost
from .serializers import BlogPostSerializer, UserSerializer, GroupSerializer
from django.contrib.auth.models import User, Group



# Create your views here.
class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    @action(detail=True, methods=['post'])
    def like(self, request, pk=None):
        blogpost = self.get_object()
        return Response({'status': 'blog postliked'})

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer 
    permission_classes = [permissions.IsAuthenticated]


