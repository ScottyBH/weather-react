import React from "react";

export default function Forecast() {
  return (
    <div>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Thu
                <br />
                <div>
                  <br />
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="{weatherInfo.conditions}"
                    id="icon"
                  ></img>
                </div>
                <br />
                <span>81°F</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Fri
                <br />
                <div>
                  <br />
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                    alt="{weatherInfo.conditions}"
                    id="icon"
                  ></img>
                </div>
                <br />
                <span>70°F</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Sat
                <br />
                <div>
                  <br />
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="{weatherInfo.conditions}"
                    id="icon"
                  ></img>
                </div>
                <br />
                <span>70°F</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Sun
                <br />
                <div>
                  <br />
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="{weatherInfo.conditions}"
                    id="icon"
                  ></img>
                </div>
                <br />
                <span>80°F</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Mon
                <br />
                <div>
                  <br />
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="{weatherInfo.conditions}"
                    id="icon"
                  ></img>
                </div>
                <br />
                <span>81°F</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
