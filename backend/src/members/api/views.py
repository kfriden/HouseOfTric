from rest_framework.generics import ListAPIView, RetrieveAPIView
from members.models import Members
from .serializers import MemberSerializer

class MembersListView(ListAPIView):
    queryset = Members.objects.all()
    serializer_class = MemberSerializer

class MembersDetailView(RetrieveAPIView):
    queryset = Members.objects.all()
    serializer_class = MemberSerializer

    
