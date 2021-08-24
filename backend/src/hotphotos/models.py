from django.db import models

# Create your models here.


class awsimage(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=50)
    images = models.ImageField('images/')

    def __str__(self):
        return self.title
