from django.urls import path

from .views import entrance_email

urlpatterns = [
    path('e/entrance/', entrance_email),
]
