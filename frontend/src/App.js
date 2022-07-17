import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

import "./styles/styles.css";

function App() {
  const [wildfireCoordinates, setWildfireCoordinates] = useState([]);
  const [ready, setReady] = useState(false);

  const getData = async () => {
    setWildfireCoordinates([]);
    await fetch("https://eonet.gsfc.nasa.gov/api/v3/events")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.events.length; i++) {
          if (data.events[i].categories[0].id === "wildfires") {
            setWildfireCoordinates((wildfireCoordinates) => [
              ...wildfireCoordinates,
              {
                lat: Math.floor(data.events[i].geometry[0].coordinates[1]),
                lng: Math.floor(data.events[i].geometry[0].coordinates[0]),
              },
            ]);
          }
        }
      });
      setReady(true)
  };
  useEffect(() => {
    getData();
  }, []);

  useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
  })

  return (
    <>
      <button onClick={() => getData()}>Fetch Data</button>
      <button onClick={() => console.log(wildfireCoordinates)}>Fetch Data</button>

      {ready && (
          <GoogleMap
            onClick={() => console.log("clicked")}
            zoom={10}
            center={{ lat: 44, lng: -80 }}
            mapContainerClassName="map-container"
          >
            {wildfireCoordinates.map((wildfireCoordinate, i) => {
              return (
                <Marker
                  key={i}
                  position={{
                    lat: wildfireCoordinate["lat"],
                    lng: wildfireCoordinate["lng"],
                  }}
                />
              );
            })}
          </GoogleMap>
      )}
    </>
  );
}

export default App;
