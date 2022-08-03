from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def entrance_email(req):
    data = req.data
    send_mail(
        'Message from GeoFinder',
        "Welcome to Our Warning Weather Email List!",
        data['email'],
        ['alex.budko2017@gmail.com'],
        fail_silently=False,
    )
    return Response({'message': 'success'})