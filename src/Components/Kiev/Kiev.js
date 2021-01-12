import React from "react";
import WeatherApi from "../../Services/WeatherApi";
import WeatherByHours from "../WeatherByHours/WeatherByHours";



const Kiev = () => {

    const weather = new WeatherApi();

    return <div>
        <WeatherByHours />
    </div>
}

export default Kiev;