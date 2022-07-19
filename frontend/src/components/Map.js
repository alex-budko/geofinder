import { GoogleMap, useLoadScript, Marker, Polygon } from "@react-google-maps/api";
import { useEffect, useState, Fragment } from "react";
import Loading from "./Loading";
import { getData } from "../utils/getData";

function Map({ type }) {
  const [coordinates, setCoordinates] = useState([]);
  const [paths, setPaths] = useState([[]]);
  const [ready, setReady] = useState(false);

  const options = {
    fillOpacity: .1,
    strokeColor: "black",
    strokeOpacity: 1,
    strokeWeight: 1,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1
  }

  useEffect(() => {
    getData(setCoordinates, setPaths, setReady, type);
  }, [type]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
  });

  return (
    <>
      {ready && isLoaded ? (
        <GoogleMap
          zoom={6}
          center={{ lat: 40, lng: -101 }}
          mapContainerClassName="map-container"
        >
          {coordinates !== [] && (coordinates.map((coordinates, i) => {
            return (
              <Marker
                icon={{
                  url: `icons/${type}.png`,
                  scale: 1,
                }}
                key={i}
                position={{
                  lat: coordinates["lat"],
                  lng: coordinates["lng"],
                }}
              />
            );
          }))}
          {paths !== [[]] && (paths.map((path, i) => {
            if (path.length > 0) {
              return (
                <Polygon
                  key={i}
                  path={path}
                  options={options}
                />
              );
            } else {
              return <Fragment key={i}></Fragment>
            }
          }))}
        </GoogleMap>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Map;
