from django import template
from django.conf import settings
from django.utils.safestring import mark_safe

register = template.Library()

@register.simple_tag
def media(path):
    """
    Usage: {% media 'videos/intro.mp4' %}
    Output: /media/videos/intro.mp4
    """
    return f'{settings.MEDIA_URL}{path}'
