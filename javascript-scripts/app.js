// DOM manipulations for the page

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {

    const cityDets = data.cityDets;
    const weather = data.weather;

    // update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`

    // remove d-none class if present
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

}

const updateCity = async(city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {cityDets, weather};

}

cityForm.addEventListener('submit', event => {
    // prevent default action - prevent refreshing page
    event.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city 
    updateCity(city)
        .then(data => updateUI(data))
        .catch(error => console.log(error));
})