from django.urls import path
from .views import BlogListView, BlogDetailView

urlpatterns = [
    path('blogs', BlogListView.as_view()),
    path('blogs/<pk>', BlogDetailView.as_view())
]