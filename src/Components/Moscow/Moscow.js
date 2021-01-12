import React from "react";
import WeatherApi from "../../Services/WeatherApi";
import WeatherByHours from "../WeatherByHours/WeatherByHours";


const Moscow = () => {

    const weather = new WeatherApi();

    return <div>
        <WeatherByHours />
    </div>
}

export default Moscow;