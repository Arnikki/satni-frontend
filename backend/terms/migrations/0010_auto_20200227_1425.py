# Generated by Django 2.1.4 on 2020-02-27 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('terms', '0009_auto_20200227_1329'),
    ]

    operations = [
        migrations.AlterField(
            model_name='multilingualconcept',
            name='name',
            field=models.TextField(unique=True),
        ),
    ]
