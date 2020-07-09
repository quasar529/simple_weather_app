import React from "react";
import "./Weather.css";
import PropTypes from "prop-types";
function Weather({
  temp,
  temp_max,
  temp_min,
  recentWeather,
  humidity,
  description,
  icon,
  name,
}) {
  var iconcode = "https://openweathermap.org/img/w/" + icon + ".png";
  const wicon = recentWeather;
  console.log(wicon);
  switch (wicon) {
    case "Clouds":
      iconcode =
        "https://cdn1.iconfinder.com/data/icons/weather-413/59/Cloud_cloudy_forecast_weather-128.png";
      break;
    case "Clear":
      iconcode =
        "https://cdn1.iconfinder.com/data/icons/weather-413/59/forecast_sun_weather-128.png";
      break;
    case "Rain":
      iconcode =
        "https://cdn1.iconfinder.com/data/icons/weather-413/58/Cloud_drop_forecast_rain_weather-128.png";
  }
  return (
    <div className="weather">
      <div className="weather_info">
        <h2 className="location">This is {name} </h2>
        <p>
          <img
            id="icon"
            src={iconcode}
            alt="weather icon"
            title={recentWeather}
          ></img>
        </p>
        <h2 className="recent_weather">
          Weather:{" "}
          <span className="info">
            {recentWeather} ({description})
          </span>
        </h2>
        <h2 className="temp">
          Temperature: <span className="info">{Math.round(temp - 273)}℃</span>
        </h2>
        <h3 className="temp_range">
          Range of expected Temperature:{" "}
          <span className="info">
            {Math.round(temp_min - 273)}℃ - {Math.round(temp_max - 273)}℃
          </span>
        </h3>
        <h2 className="humidity">
          Humidity: <span className="info">{humidity}%</span>
        </h2>
      </div>
    </div>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  recentWeather: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default Weather;
