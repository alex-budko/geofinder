import email
from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class LocationNotifier(models.Model):
    location = models.CharField(default='', max_length=255)
    email = models.EmailField(default='', max_length=255, unique=True)
