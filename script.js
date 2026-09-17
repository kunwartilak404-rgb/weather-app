let input = document.querySelector(".input");
let search = document.querySelector(".search button");

let weatherIcon = document.querySelector(".weather-icon");
let city = document.querySelector(".city");
let temperature = document.querySelector(".temperature");

let humidity = document.querySelector(".humidity-value");
let wind = document.querySelector(".wind-value");


 const iconMap = {
    "01d": "Cloud_files/clear-day.svg",
    "01n": "Cloud_files/clear-night.svg",

    "02d": "Cloud_files/partly-cloudy-day.svg",
    "02n": "Cloud_files/partly-cloudy-night.svg",

    "03d": "Cloud_files/cloudy.svg",
    "03n": "Cloud_files/cloudy.svg",

    "04d": "Cloud_files/overcast.svg",
    "04n": "Cloud_files/overcast.svg",

    "09d": "Cloud_files/rain.svg",
    "09n": "Cloud_files/rain.svg",

    "10d": "Cloud_files/partly-cloudy-day-rain.svg",
    "10n": "Cloud_files/partly-cloudy-night-rain.svg",

    "11d": "Cloud_files/thunderstorms.svg",
    "11n": "Cloud_files/thunderstorms.svg",

    "13d": "Cloud_files/snow.svg",
    "13n": "Cloud_files/snow.svg",

    "50d": "Cloud_files/mist.svg",
    "50n": "Cloud_files/mist.svg"
};
search.addEventListener("click", async () => {
    const cityName = input.value;
    if (cityName === "")
        {
            alert("Please enter a city name");
            return;
        }

   
    const response = await fetch(`http://localhost:5000/weather?city=${encodeURIComponent(cityName)}`);
    if( !response.ok) {
        alert("City not found");
        return;
    }
    const data = await response.json();
weatherIcon.src  = iconMap[data.weather[0].icon];
city.textContent = data.name;
temperature.textContent = `${Math.round(data.main.temp)}°C`;
humidity.textContent = `${data.main.humidity}%`;
wind.textContent = `${data.wind.speed} m/s`;
});

input.addEventListener("keydown", (event) => {
   if (event.key === "Enter"){
    search.click();
   }
});