import Entrance from "./components/Entrance";
import Map from "./components/Map";

import { useState } from "react";

import "./styles/styles.css";

function App() {
  const [type, setType] = useState('') 
  const [passedParameters, setPassedParameters] = useState(false);
  return (
    <>
      {!passedParameters ? (
        <Entrance setPassedParameters={setPassedParameters} setType={setType} />
      ) : (
        <Map type={type} />
      )}
    </>
  );
}

export default App;
