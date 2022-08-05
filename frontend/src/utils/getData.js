export const getData = async (setCoordinates, setPaths, setPolyDesc, type) => {
  setPolyDesc([])
  setCoordinates([])
  setPaths([[]])

  if (type === "earthquakes") {
    await fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        for (let i = 0; i < data.features.length; i++) {
          setCoordinates((coordinates) => [
            ...coordinates,
            {
              lat: data.features[i].geometry.coordinates[1],
              lng: data.features[i].geometry.coordinates[0],
              title: data.features[i].properties.place,
            },
          ]);
        }
      });
  } else if (type === "weatherAlerts") {
    await fetch("https://api.weather.gov/alerts/active")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        for (let i = 0; i < data.features.length; i++) {
          if (data.features[i].geometry) {
            let x = [];
            setPolyDesc((polyDesc) => [...polyDesc, data.features[i].properties.areaDesc])
            for (let j = 0; j < data.features[i].geometry.coordinates[0].length;j++) {
              x.push({
                lat: data.features[i].geometry.coordinates[0][j][1],
                lng: data.features[i].geometry.coordinates[0][j][0],
              })
            }
            setPaths((paths) => [
              ...paths, x
            ]);
          }
        }
      });
  } else {
    await fetch("https://eonet.gsfc.nasa.gov/api/v3/events")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        for (let i = 0; i < data.events.length; i++) {
          if (data.events[i].categories[0].id === `${type}`) {
            setCoordinates((coordinates) => [
              ...coordinates,
              {
                lat: data.events[i].geometry[0].coordinates[1],
                lng: data.events[i].geometry[0].coordinates[0],
                title: data.events[i].title,
              },
            ]);
          }
        }
      });
  }
};
