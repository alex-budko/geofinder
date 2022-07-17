export const getData = async (setCoordinates, setReady, type) => {
  setCoordinates([]);
  await fetch("https://eonet.gsfc.nasa.gov/api/v3/events")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.events.length; i++) {
        if (data.events[i].categories[0].id === `${type}`) {
          setCoordinates((coordinates) => [
            ...coordinates,
            {
              lat: Math.floor(data.events[i].geometry[0].coordinates[1]),
              lng: Math.floor(data.events[i].geometry[0].coordinates[0]),
            },
          ]);
        }
      }
    });
  await setReady(true);
};
