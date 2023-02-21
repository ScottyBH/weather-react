import React from "react";
import "./Forecast.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          {day()}
          <br />
          <div>
            <br />
            <img
              src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt={props.data.weather[0].description}
              id="icon"
            />
          </div>
          <br />
          <span className="Forecast-temp-max">{maxTemp()}</span>
          <span className="Forecast-temp-min">{minTemp()}</span>
        </p>
      </div>
    </div>
  );
}
