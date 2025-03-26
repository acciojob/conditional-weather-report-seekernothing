import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, condition } = weather;
  const style = {
    color: temperature > 20 ? "red" : "blue", // Fixed color issue
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div>
      <p>
        Temperature: <span style={style}>{temperature}</span>{" "}
        {/* Fixed span issue */}
      </p>
      <p>
        Condition: <span>{condition}</span> {/* Added span here */}
      </p>
    </div>
  );
};

export default WeatherDisplay;
