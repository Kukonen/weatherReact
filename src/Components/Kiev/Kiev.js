import React from "react";
import WeatherApi from "../../Services/WeatherApi";



const Kiev = () => {

    const city = "Kiev";

    const weather = new WeatherApi();

    let precipitation =  weather.getPrecipitation(city)
    let temperature = weather.getTemperature(city);

    console.log(precipitation);
    console.log(temperature)

    return <div className="descriptionWeatherMain">
        <div className="descriptionWeather">
            <span className="descriptionWeatherTitle">Today  in outdoors!!!</span>
        </div>
        <div>
            <span className="descriptionWeatherTitle">Temperature is </span>
        </div>

    </div>
}

export default Kiev;