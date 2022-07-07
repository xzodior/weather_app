// interactions with the weather API and retrieving data 

const key = 'fnV2wsEztWouMTPlmKz8BRYELQh4bvGc';

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

