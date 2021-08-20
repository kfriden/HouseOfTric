from rest_framework.generics import ListAPIView, RetrieveAPIView
from blogs.models import Blog
from .serializers import BlogSerializer


class BlogListView(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class BlogDetailView(RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
