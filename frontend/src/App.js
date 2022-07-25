import Entrance from "./components/Entrance";
import Map from "./components/Map";

import { useState } from "react";

import "./styles/styles.css";
import WeatherEntrance from "./components/WeatherEntrance";

function App() {
  const [type, setType] = useState("weatherAlerts");
  const [viewingWeather, setViewingWeather] = useState(true);
  const [passedParameters, setPassedParameters] = useState(false);
  return (
    <>
      {!passedParameters ? (
        !viewingWeather ? (
          <Entrance
            setViewingWeather={setViewingWeather}
            setPassedParameters={setPassedParameters}
            setType={setType}
          />
        ) : (
          <WeatherEntrance
            setViewingWeather={setViewingWeather}
            setPassedParameters={setPassedParameters}
          />
        )
      ) : (
        <Map type={type} viewingWeather={viewingWeather} />
      )}
    </>
  );
}

export default App;
