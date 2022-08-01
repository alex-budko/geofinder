import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polygon,
  InfoWindow,
} from "@react-google-maps/api";
import { useEffect, useState, Fragment } from "react";
import Loading from "./Loading";
import { getData } from "../utils/getData";
import { getWeatherData } from "../utils/getWeatherData";
import { Center, Icon, Text, VStack } from "@chakra-ui/react";

import { IoIosPartlySunny, IoIosSunny, IoIosRainy } from "react-icons/io";

function Map({ type, viewingWeather }) {
  const [coordinates, setCoordinates] = useState([]);
  const [paths, setPaths] = useState([[]]);
  const [ready, setReady] = useState(false);
  const [boxes, setBoxes] = useState([]);
  const [polyDesc, setPolyDesc] = useState([]);
  const [seekingWeatherData, setSeekingWeatherData] = useState(false);

  const [conditions, setCondition] = useState(null);
  const [weatherCoords, setWeatherCoords] = useState([]);
  const [temp, setTemp] = useState([]);

  const options = {
    fillOpacity: 0.1,
    strokeColor: "#00ACC1",
    strokeOpacity: 0.4,
    strokeWeight: 2,
    clickable: true,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  const seekingWeather = (lat, lng) => {
    setSeekingWeatherData(true);
    setWeatherCoords([lat, lng]);
    getWeatherData(lat, lng, setCondition, setTemp);
  };

  useEffect(() => {
    if (!viewingWeather) {
      getData(setCoordinates, setPaths, setPolyDesc, type).finally(
        setReady(true)
      );
    } else {
      setReady(true);
    }
  }, [type]);

  useEffect(() => {
    if (coordinates) {
      setBoxes(Array(coordinates.length).fill(false));
    } else if (paths) {
      setBoxes(Array(paths.length).fill(false));
    }
  }, [coordinates, paths]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
  });

  return (
    <>
      {ready && isLoaded ? (
        <GoogleMap
          onClick={(e) => seekingWeather(e.latLng.lat(), e.latLng.lng())}
          zoom={6}
          center={{ lat: 40, lng: -101 }}
          mapContainerClassName="map-container"
        >
          {coordinates !== [] &&
            coordinates.map((coords, i) => {
              return (
                <>
                  <Marker
                    icon={{
                      url: `icons/${type}.png`,
                      scale: 1,
                    }}
                    key={300 + i * 2}
                    position={{
                      lat: coords["lat"],
                      lng: coords["lng"],
                    }}
                    onClick={() => {
                      let newBoxes = [...boxes];
                      newBoxes[i] = true;
                      setBoxes([...newBoxes]);
                    }}
                  />
                  {boxes[i] && (
                    <InfoWindow
                      position={{
                        lat: coords["lat"],
                        lng: coords["lng"],
                      }}
                      key={400 + i * 3}
                      onCloseClick={() => {
                        let newBoxes = [...boxes];
                        newBoxes[i] = false;
                        setBoxes([...newBoxes]);
                      }}
                    >
                      <div>
                        <h1 style={{ color: "black" }}>{coords.title}</h1>
                      </div>
                    </InfoWindow>
                  )}
                </>
              );
            })}
          {viewingWeather && seekingWeatherData && weatherCoords !== [] && (
            <>
              <InfoWindow
                position={{
                  lat: parseFloat(weatherCoords[0]),
                  lng: parseFloat(weatherCoords[1]),
                }}
                onCloseClick={() => {
                  setWeatherCoords([]);
                }}
              >
                <VStack justify={"center"} align="center">
                  <Text  color= "black" >{conditions}</Text>
                  <Center>
                    <Text color={'gray.800'}>
                      {conditions !== null &&
                        (conditions.toLowerCase().includes("sun") || conditions.toLowerCase().includes("clear") ? (
                          <IoIosSunny />
                        ) : conditions.toLowerCase().includes("rain") ? (
                          <IoIosRainy />
                        ) : (
                          <IoIosPartlySunny />
                        ))}
                    </Text>
                  </Center>
                  <Text style={{ color: "black" }}>C°: {temp[0]}</Text>
                  <Text style={{ color: "black" }}>F°: {temp[1]}</Text>
                </VStack>
              </InfoWindow>
            </>
          )}
          {paths !== [[]] &&
            paths.map((path, i) => {
              if (path.length > 0) {
                return (
                  <>
                    <Polygon
                      key={500 + i * 5}
                      path={path}
                      options={options}
                      onClick={() => {
                        let newBoxes = [...boxes];
                        newBoxes[i] = true;
                        setBoxes([...newBoxes]);
                      }}
                    />
                    {boxes[i] && (
                      <InfoWindow
                        position={{
                          lat: paths[i][1].lat + 0.3,
                          lng: paths[i][1].lng,
                        }}
                        key={600 + i * 3}
                        onCloseClick={() => {
                          let newBoxes = [...boxes];
                          newBoxes[i] = false;
                          setBoxes([...newBoxes]);
                        }}
                      >
                        <div>
                          <h1 key={1} style={{ color: "black" }}>
                            {polyDesc[i - 1]}
                          </h1>
                        </div>
                      </InfoWindow>
                    )}
                  </>
                );
              } else {
                return <Fragment key={700 + i * 2}></Fragment>;
              }
            })}
        </GoogleMap>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Map;
