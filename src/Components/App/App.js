import React from 'react'
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Start from "../Start/Start";
import England from "../England/England";
import USA from "../USA/USA";
import Ukraine from "../Ukraine/Ukraine";
import Russia from "../Russia/Russia";

import WeatherApi from "../../Services/WeatherApi";

//let weather = WeatherApi();

const getWeathByCity = async(url) =>{
    const res = await fetch(url);
    const body = await res.json();
    return body
}

const uRl = 'https://api.weather.yandex.ru/v2/informers?lat=55.75396&lon=37.620393';

//https://api.weather.yandex.ru/v2/informers?lat=56.343698&lon=30.515662&[lang=ru_RU]

const tryFunc = async => {
    getWeathByCity(uRl).then((body) => {
         console.log(body)
    })
}

//fetch('https://api.weather.yandex.ru/v1/forecast?lang=ru'+ '&lat=' + this.props.city.lat + '&lon=' + this.props.city.lon, {
//     method: 'GET',
//     headers: (new Headers({
//         'X-Yandex-API-Key': API_KEY
//     }))
// }).then(resp => resp.json()).then(res => {
//     console.log(res)
// });




const App = () => {
    tryFunc();
    return (

        <div>
            <BrowserRouter>
                <Header />\
                <Route path="/" exact component={Start} />
                <Route path="/England" component={England} />
                <Route path="/USA" component={USA} />
                <Route path="/Russia" component={Russia} />
                <Route path="/Ukraine" component={Ukraine} />
            </BrowserRouter>
        </div>
    )
}

export default App;