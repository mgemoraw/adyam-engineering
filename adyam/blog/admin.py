from django.contrib import admin
from .models import Post


# Register your models here.
# admin.site.register(Post)
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'author', 'published', 'status','created')
    list_filter = ('status', 'created', 'published', 'author',)
    search_fields = ('title', 'body', 'slug')

    prepopulated_fields = {'slug': ('title',),}
    raw_id_fields = ('author',)
    date_hierarchy = 'published'
    ordering = ('status', '-published',)
    