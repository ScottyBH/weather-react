import React, { useState } from "react";
import MainWeather from "./MainWeather";
import "./App.css";
import Forecast from "./Forecast";
import axios from "axios";

export default function App(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "3a4be67dc34991f831e260af364d7a39";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="col">
                <form id="search-bar" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="Search"
                      className="form-control"
                      id="city-search"
                      aria-describedby="Search"
                      placeholder="Enter City"
                      autocomplete="off"
                      autoFocus="on"
                      onChange={handleCityChange}
                    ></input>
                    <button type="submit" id="search-button">
                      Search
                    </button>
                  </div>
                </form>
                <MainWeather data={weatherData} />
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
    search();
    return "Leading...";
  }
}
