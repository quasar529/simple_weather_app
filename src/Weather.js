import React from "react"

function Weather({temp,temp_max,temp_min,recentWeather,humidity}){
    return(
        <div className="weather">
            <div className="weather_info">
                <h2 className="temp">Temperature: {temp}</h2>
                <h3 className="temp_range">Range of expected Temperature: {temp_min}~{temp_max}</h3>
                <h2 className="recent_weather">Weather: {recentWeather}</h2>
                <h3 className="humidity">Humidity: {humidity}%</h3>
            </div>
        </div>
    );
}
export default Weather;