from rest_framework import serializers

from members.models import Members

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ('id', 'name', 'birth_name', 'quirk', 'age', 'rank', 'location', 'villain_vigilante', 'description', 'images')