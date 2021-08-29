from django.db import models

# Create your models here.

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

 
class awsimage(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=50)
    images = models.ImageField(upload_to=upload_to)

    def __str__(self):
        return self.title
