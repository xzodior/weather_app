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
}

const key = '7WkLIxAG6484EEnjXb1Ra8qwtaldH0DD';

// get weather information
const getWeather = async(id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);     // attaches them to a single argument
    const data = await response.json();             // converts response into data we can access


    return data[0];       // returns the closest match 
    
};

