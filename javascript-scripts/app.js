// DOM manipulations for the page

const cityForm = document.querySelector('form');

const updateCity = async(city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    };
}

cityForm.addEventListener('submit', event => {
    // prevent default action - prevent refreshing page
    event.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city 
    updateCity(city)
        .then(data => console.log(data))
        .catch(error => console.log(error));
})