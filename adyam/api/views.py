from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, authentication
from .serializers import UserSerializer, LoginSerializer
from core.serializers import ContactMessageSerializer, ContactSerializer, ServiceSerializer, SliderSerializer, TeamMemberSerializer
from core.models import (
    Contact,
    ContactMessage,
    Service,
    Slider,
    TeamMember,
    PrivacyPolicy,
    BlogPost,
)

# Create your views here.

class Home(APIView):
    def get(self, request):
        return Response({"message": "Welcom to Adyam Engineering"})


class SliderView(APIView):
    def get(self, request):
        sliders = Slider.objects.all()
        serializer = SliderSerializer(sliders, many=True)
        return Response({'sliders': serializer.data})

class ContactView(APIView):
    def get(self, request):
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        return Response({'contacts': serializer.data[0]})


class ServiceView(APIView):
    def get(self, request):
        services = Service.objects.all()
        serializer = ServiceSerializer(services, many=True)
        return Response({'services': serializer.data})


class AdyamTeam(APIView):
    def get(self, request):
        team_members = TeamMember.objects.all()
        serialized = TeamMemberSerializer(team_members, many=True)
        return Response({"teams": serialized.data})
    
    # def post(self, request):
        
    #     pass


class ContactMessageViewSet(viewsets.ModelViewSet):
    serializer_class = ContactMessageSerializer 
    queryset = ContactMessage.objects.all()

    def get_permissions(self):
        """
        Assign different permissions for different actions.
        """
        if self.action in ['create']:
            permission_classes = [permissions.AllowAny]
        elif self.action in ['partial_update', 'destroy', 'update', 'list']:
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [permissions.IsAuthenticatedOrReadOnly]
        return [permission() for permission in permission_classes]
        # return super().get_permissions()

    def perform_create(self, serializer):
        # Automatically associate article with logged-in user
        # serializer.save(author=self.request.user)
        serializer.save()