# Generated by Django 5.0.6 on 2024-11-07 09:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_post_published'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-published']},
        ),
        migrations.AddField(
            model_name='post',
            name='status',
            field=models.CharField(choices=[('DF', 'Draft'), ('PB', 'Published')], default='DF', max_length=2),
        ),
        migrations.AlterField(
            model_name='post',
            name='published',
            field=models.DateTimeField(default=datetime.datetime(2024, 11, 7, 9, 5, 49, 330566, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AddIndex(
            model_name='post',
            index=models.Index(fields=['-published'], name='blog_post_publish_493ec4_idx'),
        ),
    ]
