from django.contrib import admin
from .models import Post


# Register your models here.
# admin.site.register(Post)
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'author', 'published_at', 'status','created_at')
    list_filter = ('status', 'created_at', 'published_at', 'author',)
    search_fields = ('title', 'body', 'slug')

    prepopulated_fields = {'slug': ('title',),}
    raw_id_fields = ('author',)
    date_hierarchy = 'published_at'
    ordering = ('status', '-published_at',)
    