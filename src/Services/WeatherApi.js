export default class WeatherApi{

    defaultUrlStart = "https://api.openweathermap.org/data/2.5/weather?q=";
    defaultUrlEnd = ",uk&appid=e0a3c4228e83686771a8daa7a334a86e";

    //Washington, D.C.

    getAllValue(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=e0a3c4228e83686771a8daa7a334a86e`).then(
            res => {
                return res.json();
            }).then(data => {
                console.log(data);
                return data;
        })
    }

    getTemperature(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=e0a3c4228e83686771a8daa7a334a86e`).then(
            res => {
                return res.json();
            }).then(data => {
            console.log(data.main.temp);
            return data.main.temp;
        })
    }

    async getWeathByCity(url){
        const res = await fetch(url);
        const body = await res.json();
        return body
    }
}