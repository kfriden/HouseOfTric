from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from . import views
from rest_framework import routers
from .views import awsimageView

router = routers.DefaultRouter()
router.register('awsimage', views.awsimageView)


urlpatterns = [
    path('', include(router.urls))
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT)
