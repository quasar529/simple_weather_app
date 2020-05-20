import React from "react"
import "./Weather.css"
function Weather({temp,temp_max,temp_min,recentWeather,humidity,description,icon,name}){
    var iconcode= "http://openweathermap.org/img/w/"+icon+".png";
    return(
        <div className="weather">
            <div className="weather_info">
                <h2 className="location">This is {name}</h2>
                <p><img id="icon" src={iconcode} alt="weather icon" title={recentWeather}></img></p>
                <h2 className="recent_weather">Weather: {recentWeather} ({description})</h2>
                <h2 className="temp">Temperature: {Math.round(temp-273)}℃</h2>
                <h3 className="temp_range">Range of expected Temperature: {Math.round(temp_min-273)}℃ - {Math.round(temp_max-273)}℃</h3>
                <h2 className="humidity">Humidity: {humidity}%</h2>
            </div>
        </div>
    );
}
export default Weather;