# Generated by Django 4.0.3 on 2022-05-12 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(max_length=200)),
                ('textPost', models.TextField()),
                ('author', models.CharField(max_length=50)),
            ],
        ),
    ]
