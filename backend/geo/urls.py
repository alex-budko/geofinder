from django.urls import path

from .views import ListCreateLocationNodifier, entrance_email

urlpatterns = [
    path('e/entrance/', entrance_email),
    path('lm/', ListCreateLocationNodifier.as_view()),
]
