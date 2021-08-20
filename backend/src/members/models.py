from django.db import models

# Create your models here.

class Members(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=120)
    birth_name = models.CharField(max_length=120)
    quirk = models.CharField(max_length=50)
    age = models.IntegerField()
    rank = models.IntegerField()
    location = models.CharField(max_length=120)
    villain_vigilante = models.CharField(max_length=15)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.id
