# dextutils/urls.py
from django.contrib import admin
from django.urls import path
from dexter import views as dexter_views  # Import the index view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("analyze", dexter_views.analyze, name="analyze"),
    path("", dexter_views.index),  # Serve React's index.html at the root
]
