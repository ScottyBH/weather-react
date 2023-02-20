import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <span className="today" id="today-temp">
        {Math.round(props.fahrenheit)}
      </span>
      <span className="deg">°F </span>
    </div>
  );
}
