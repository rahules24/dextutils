from django.contrib import admin
from django.urls import path
from dexter import views as dexter_views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("analyze", dexter_views.analyze, name="analyze"),
    path("", dexter_views.index),  # Serve React's index.html at the root
    path("<path:path>", dexter_views.index),  # Handle other routes to support BrowserRouter
]
