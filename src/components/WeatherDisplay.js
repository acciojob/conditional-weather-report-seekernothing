import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, condition } = weather;
  const style = {
    color: temperature > 20 ? "red" : "blue", // Lowercase color
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div>
      <p>
        Temperature: <span style={style}>{temperature}</span>°C{" "}
        {/* Fixed space issue */}
      </p>
      <p>Condition: {condition}</p> {/* Removed extra span */}
    </div>
  );
};

export default WeatherDisplay;
