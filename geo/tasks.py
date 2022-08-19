from backend.celery import app
from celery.schedules import crontab
from .models import LocationNotifier
import requests

@app.on_after_finalize.connect
def setup_periodic_tasks(sender, **kwargs):
    # Executes every Monday morning at 7:30 a.m.
    sender.add_periodic_task(
        crontab(hour=7, minute=30, day_of_week=1),
        send_out_warnings.s('Happy Mondays!'),
    )



@app.task
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