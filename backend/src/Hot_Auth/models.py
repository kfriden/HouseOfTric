from django.db import models

# Create your models here.


class Users(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=30)
    password = models.IntegerField(max_length=30)

    def __str__(self):
        return self.username