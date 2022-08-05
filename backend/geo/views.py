from dataclasses import dataclass
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics

from .serializers import LocationNotifierSerializer

from .models import LocationNotifier

import requests

def send_out_warnings():
    users = LocationNotifier.objects.all()

    url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'

    data = requests.get(url).json()

    for w in range(len(data['features'])):
        loc = data['features'][w]['properties']['place']
        for user in users:
            if loc.__contains__(user.location):
                requests.post('http://127.0.0.1:8000/api/e/warn/', {'email': user.email, 'location': loc})

    url = 'https://eonet.gsfc.nasa.gov/api/v3/events'

    data = requests.get(url).json()

    for w in range(len(data['events'])):
        loc = data['events'][w]['title']
        for user in users:
            if loc.__contains__(user.location):
                requests.post('http://127.0.0.1:8000/api/e/warn/', {'email': user.email, 'location': loc})

@api_view(['POST'])
def send_warning(req):
    data = req.data
    send_mail(
        'Warning Message from GeoFinder',
        "Weather Warning: %s!" % (data['location']),
        'alex.budko2017@gmail.com',
        [data['email']],
        fail_silently=False,
    )
    return Response({'message': 'success'})  

@api_view(['POST'])
def entrance_email(req):
    data = req.data
    send_mail(
        'Message from GeoFinder',
        "Welcome to Our Warning Weather Email List!",
        'alex.budko2017@gmail.com',
        [data['email']],
        fail_silently=False,
    )
    return Response({'message': 'success'})


class ListCreateLocationNodifier(generics.ListCreateAPIView):
    model = LocationNotifier
    queryset = LocationNotifier.objects.all()
    serializer_class = LocationNotifierSerializer