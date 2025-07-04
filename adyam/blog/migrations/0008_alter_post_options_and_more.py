# Generated by Django 5.2.3 on 2025-07-01 15:42

import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_alter_post_published'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-published_at']},
        ),
        migrations.RemoveIndex(
            model_name='post',
            name='blog_post_publish_493ec4_idx',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='created',
            new_name='created_at',
        ),
        migrations.RemoveField(
            model_name='post',
            name='published',
        ),
        migrations.RemoveField(
            model_name='post',
            name='updated',
        ),
        migrations.AddField(
            model_name='post',
            name='publish',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='post',
            name='published_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='post',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='status',
            field=models.CharField(choices=[('DF', 'Draft'), ('PB', 'Published')], default='DF', max_length=10),
        ),
        migrations.AddIndex(
            model_name='post',
            index=models.Index(fields=['-published_at'], name='blog_post_publish_2c9212_idx'),
        ),
    ]
