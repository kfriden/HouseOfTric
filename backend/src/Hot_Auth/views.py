from rest_framework import APIView

class user_list(APIView):

    queryset = Users.objects.all()
    serializer_class = UsersSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)