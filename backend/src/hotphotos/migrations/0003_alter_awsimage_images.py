# Generated by Django 3.2.6 on 2021-08-29 20:36

from django.db import migrations, models
import hotphotos.models


class Migration(migrations.Migration):

    dependencies = [
        ('hotphotos', '0002_alter_awsimage_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='awsimage',
            name='images',
            field=models.ImageField(upload_to=hotphotos.models.upload_to, verbose_name='Image'),
        ),
    ]
