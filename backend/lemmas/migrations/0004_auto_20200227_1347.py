# Generated by Django 2.1.4 on 2020-02-27 13:47

from djongo import models
from django.db import migrations
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('terms', '0009_auto_20200227_1329'),
        ('lemmas', '0003_auto_20200227_1336'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lemma',
            name='concept',
        ),
        migrations.AddField(
            model_name='lemma',
            name='concept',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='terms', to='terms.Concept'),
        ),
    ]
