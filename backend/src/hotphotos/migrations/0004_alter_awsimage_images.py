# Generated by Django 3.2.6 on 2021-08-29 22:35

from django.db import migrations, models
import hotphotos.models


class Migration(migrations.Migration):

    dependencies = [
        ('hotphotos', '0003_alter_awsimage_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='awsimage',
            name='images',
            field=models.ImageField(upload_to=hotphotos.models.upload_to),
        ),
    ]
