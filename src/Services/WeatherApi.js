export default class WeatherApi{

    defaultUrlStart = "https://api.openweathermap.org/data/2.5/weather?q=";
    defaultUrlEnd = ",uk&appid=e0a3c4228e83686771a8daa7a334a86e";

    //Washington, D.C.

    async getAllValue(city){
        fetch(`${this.defaultUrlStart}${city},${this.defaultUrlEnd}`).then(
            res => {
                return res.json();
            }).then(data => {
                console.log(data);
                return data;
        })
    }

    async getTemperature(city){
        fetch(`${this.defaultUrlStart}${city},${this.defaultUrlEnd}`).then(
            res => {
                return res.json();
            }).then(data => {
            console.log(data.main.temp);
            return data.main.temp;
        })
    }

    async getPrecipitation(city){
        fetch(`${this.defaultUrlStart}${city},${this.defaultUrlEnd}`).then(
            res => {
                return res.json();
            }).then(data => {
            console.log(data.weather[0].main);
            return data.weather[0].main;
        })
    }
}