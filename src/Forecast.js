import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="row">
          <div className="col-sm">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8402ccd9e55983fce71eeeaa1d2bd1fc";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
