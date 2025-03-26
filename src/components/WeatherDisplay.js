import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, condition } = weather;
  const style = {
    color: temperature > 20 ? "red" : "blue",
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div>
      <p>
        Temperature: <span style={style}>{temperature}</span>°C{" "}
        {/* Moved °C outside */}
      </p>
      <p>Condition: {condition}</p>
    </div>
  );
};

export default WeatherDisplay;
