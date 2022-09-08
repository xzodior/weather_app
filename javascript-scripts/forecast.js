class Forecast{
    constructor(){
        this.key = '7WkLIxAG6484EEnjXb1Ra8qwtaldH0DD';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);

        return {cityDets, weather};
    }
    // get city information
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURI + query);     // attaches them to a single argument
        const data = await response.json();             // converts response into data we can access


        return data[0];       // returns the closest match 
    }
    // get weather information
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }
}