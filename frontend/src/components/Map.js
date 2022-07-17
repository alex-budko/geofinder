import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { getData } from "../utils/getData";

function Map({type}) {
    const [coordinates, setCoordinates] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
      getData(setCoordinates, setReady, type);
    }, [type]);
  
    const {isLoaded} = useLoadScript({
      googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
    })
  
    return (
      <>  
        {ready && isLoaded ? (
            <GoogleMap
              zoom={6}
              center={{ lat: 40, lng: -101}}
              mapContainerClassName="map-container"
            >
              {coordinates.map((coordinates, i) => {
                return (
                  <Marker
                    key={i}
                    position={{
                      lat: coordinates["lat"],
                      lng: coordinates["lng"],
                    }}
                  />
                );
              })}
            </GoogleMap>
        ) : (
            <Loading />
        )}
      </>
    );
  }
  
  export default Map;
  