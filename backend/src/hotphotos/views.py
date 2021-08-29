from django.shortcuts import render
from rest_framework import viewsets
from .models import awsimage
from .serializers import awsimageSerializer

# Create your views here.


class awsimageView(viewsets.ModelViewSet):
    queryset = awsimage.objects.all()
    serializer_class = awsimageSerializer


    
   
  


