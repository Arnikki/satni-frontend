# Generated by Django 2.1.4 on 2020-02-27 12:23

from djongo import models
from django.db import migrations
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('terms', '0007_remove_multilingualconcept_terms'),
        ('lemmas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lemma',
            name='concept',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='terms', to='terms.Concept'),
        ),
    ]
