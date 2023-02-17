import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemp">
        <span className="today" id="today-temp">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="deg">
          °F |{" "}
          <a href="/" id="celsius-link" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemp">
        <span className="today" id="today-temp">
          {Math.round(celsius)}
        </span>
        <span className="deg">
          <a href="/" id="celsius-link" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
