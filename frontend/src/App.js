import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import "./styles/styles.css";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="map-container"
      >
        <Marker position={{ lat: 44, lng: -80 }}></Marker>
      </GoogleMap>
    </>
  );
}

export default App;
