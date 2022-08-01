import Entrance from "./components/Entrance";
import Map from "./components/Map";

import { useState } from "react";

import "./styles/styles.css";
import WeatherEntrance from "./components/WeatherEntrance";

function App() {
  const [viewingWeather, setViewingWeather] = useState(false);
  const [passedParameters, setPassedParameters] = useState(false);

  const [type, setType] = useState(!viewingWeather ? "weatherAlerts" : null);

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
