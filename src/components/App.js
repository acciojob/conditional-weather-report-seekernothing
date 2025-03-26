import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  //Initalize weather state
  let [weather, setWeather] = useState({ temperature: 0, condition: "" });
  //set the default weather
  useEffect(()=>{
    setWeather({ temperature: 25, condition: "Sunny" });
  },[])
  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Weather Application</h2>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
