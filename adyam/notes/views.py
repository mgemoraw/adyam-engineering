from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, generics
from rest_framework import viewsets
from rest_framework import permissions

from .models import Note
from .serializers import NoteSerializer


# Create your views here.
class NoteViewSet(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer 
    permission_classes = [permissions.IsAuthenticated]


def home(request):
    return HttpResponse("<h1>Hello NOtes </h1>")

@api_view(['GET', 'POST'])
def notes(request):
    if request.method == "GET":
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)

        return Response(serializer.data)
    elif request.method=="POST":
        serializer = NoteSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

