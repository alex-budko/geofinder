from django.urls import path

from .views import ListCreateLocationNodifier, entrance_email, send_warning

urlpatterns = [
    path('e/entrance/', entrance_email),
    path('e/warn/', send_warning),
    path('location-marker/', ListCreateLocationNodifier.as_view()),
]
