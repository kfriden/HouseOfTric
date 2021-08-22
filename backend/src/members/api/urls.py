from django.urls import path
from .views import MembersListView, MembersDetailView

urlpatterns = [
    path('members', MembersListView.as_view()),
    path('members/<pk>', MembersDetailView.as_view())
]