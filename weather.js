// api key = fceafe910232c9c38ae9e1e317877360
const api_key = 'fceafe910232c9c38ae9e1e317877360'

const loadWeather = (city_name) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
    .then(res => res.json())
    .then(data => checkDataValidity(data))
    .catch(error => console.log(error))
}

const checkDataValidity = (weather_data) => {
    // console.log(weather_data);
    weather_data.cod === '404' ? showError() : showWeather(weather_data);
}
const showWeather = (weather_data) => {
    removeError();
    const {name, main, weather} = weather_data;
    document.getElementById('city-name').innerText = name;
    document.getElementById('degree-celcious').innerHTML = `<span>${main.temp}</span>&deg;C`;
    document.getElementById('weather-condition').innerText = weather[0].main;
}

const showError = () => {
    document.getElementById('error-div').classList.remove('d-none');
    document.getElementById('weather-container').classList.add('d-none');
}
const removeError = () => {
    document.getElementById('error-div').classList.add('d-none');
    document.getElementById('weather-container').classList.remove('d-none');
}

const getInputValue = () => {
    const input_field = document.getElementById('input-field');
    const inputValue = input_field.value;
    input_field.value = '';
    loadWeather(inputValue);
}
loadWeather('helsinki');