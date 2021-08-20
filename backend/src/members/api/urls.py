from django.urls import path
from .views import MembersListView, MembersDetailView

urlpatterns = [
    path('', MembersListView.as_view()),
    path('<pk>', MembersDetailView.as_view())
]