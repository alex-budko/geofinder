from rest_framework import serializers

from .models import LocationNotifier

class LocationNotifierSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocationNotifier
        fields = ('location', 'email')