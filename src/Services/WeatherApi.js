export default class WeatherApi{
    async getWeathByCity(url){
        const res = await fetch(url);
        const body = await res.json();
        return body
    }
}