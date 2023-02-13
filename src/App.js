import "./App.css";
import Forecast from "./Forecast";

function App() {
  let weatherInfo = {
    city: "Phoenix",
    date: "Friday 11:55",
    temp: "71",
    conditions: "Cloudy",
    humidity: "10",
    wind: "2",
  };
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
                      {weatherInfo.city}
                    </p>
                    <p className="day-temp" id="today-date">
                      {weatherInfo.date}
                    </p>
                    <div>
                      Wind: <span id="wind">{weatherInfo.wind}</span> mph
                    </div>
                    Humidity: <span id="humidity">{weatherInfo.humidity}</span>%
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      <span className="today" id="today-temp">
                        {weatherInfo.temp}
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
                          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                          alt="{weatherInfo.conditions}"
                          id="icon"
                        ></img>
                      </span>
                      <br />
                      <div id="now-weather">{weatherInfo.conditions}</div>
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
}

export default App;
