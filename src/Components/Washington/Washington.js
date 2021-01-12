import React from "react";
import WeatherApi from "../../Services/WeatherApi";
import WeatherByHours from "../WeatherByHours/WeatherByHours";



const Washington = () => {

    const city = "Washington, D.C.";

    const weather = new WeatherApi();

    console.log(weather.getTemperature(city))

    return <div>
        <WeatherByHours />
    </div>
}

export default Washington;