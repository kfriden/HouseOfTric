from rest_framework import status , generics , mixins

class user_list(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):

    queryset = Users.objects.all()
    serializer_class = UsersSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)