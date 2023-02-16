import React from "react";
import FormattedDate from "./FormattedDate";

export default function MainWeather(props) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <p className="city-state" id="city">
                {props.data.city}
              </p>
              <p className="day-temp" id="today-date">
                <FormattedDate date={props.data.date} />
              </p>
              <div>
                Wind: <span id="wind">{Math.roundprops.data.wind}</span> mph
              </div>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                <span className="today" id="today-temp">
                  {Math.round(props.data.temperature)}
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
                    src={props.data.icon}
                    alt={props.data.conditions}
                    id="icon"
                  ></img>
                </span>
                <br />
                <div id="now-weather" className="text-capitalize">
                  {props.data.conditions}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
