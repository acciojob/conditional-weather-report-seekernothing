import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, condition } = weather;
  const style = {
    color: temperature > 20 ? "Red" : "blue",
    fontSize: "24px",
    fontWeight: "bold",
  };
  return (
    <div>
      <p style={style}>Temperature: {temperature}</p>
      <p>Condition: {condition}</p>
    </div>
  );
};

export default WeatherDisplay;
