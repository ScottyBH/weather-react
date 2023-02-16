import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./App.css";
import Forecast from "./Forecast";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      conditions: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="col">
                <form id="search-bar">
                  <div className="mb-3">
                    <input
                      type="Search"
                      className="form-control"
                      id="city-search"
                      aria-describedby="Search"
                      placeholder="Enter City"
                      autocomplete="off"
                      autoFocus="on"
                    ></input>
                    <button type="submit" id="search-button">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <p className="city-state" id="city">
                        {weatherData.city}
                      </p>
                      <p className="day-temp" id="today-date">
                        <FormattedDate date={weatherData.date} />
                      </p>
                      <div>
                        Wind: <span id="wind">{weatherData.wind}</span> mph
                      </div>
                      Humidity:{" "}
                      <span id="humidity">{weatherData.humidity}</span>%
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">
                        <span className="today" id="today-temp">
                          {Math.round(weatherData.temperature)}
                        </span>
                        <span className="deg">
                          °
                          <a href="/" id="fehrenheit-link">
                            F
                          </a>{" "}
                          |
                          <a href="/" id="celcius-link">
                            C
                          </a>
                        </span>
                        <span className="units">
                          <img
                            src={weatherData.icon}
                            alt={weatherData.conditions}
                            id="icon"
                          ></img>
                        </span>
                        <br />
                        <div id="now-weather" className="text-capitalize">
                          {weatherData.conditions}
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <Forecast />
            </div>
            <footer>
              <a
                href="https://github.com/ScottyBH/Weather-App"
                target="_blank"
                rel="noreferrer"
              >
                Open-sorce code
              </a>{" "}
              by Meghan Hardeman
            </footer>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3a4be67dc34991f831e260af364d7a39";
    let city = "Phoenix";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Leading...";
  }
}

export default App;
