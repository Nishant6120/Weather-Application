const apiKey = "6bdb2de0bcc4126e780b2303f675a7bb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity-value");
const windSpeedElement = document.querySelector(".wind-speed");
const errorMessageElement = document.querySelector(".error-message");
const weatherElement = document.querySelector(".weather");

const setWeatherIcon = (weatherMain) => {
    const iconMap = {
        "Clouds": "images/clouds.png",
        "Clear": "images/clear.png",
        "Rain": "images/rain.png",
        "Drizzle": "images/drizzle.png",
        "Mist": "images/mist.png",
        "Snow": "images/snow.png",
    };
    weatherIcon.src = iconMap[weatherMain] || "images/default.png";
};

const clearWeatherDisplay = () => {
    cityElement.textContent = "";
    tempElement.textContent = "";
    humidityElement.textContent = "";
    windSpeedElement.textContent = "";
    weatherIcon.src = "";
    weatherElement.style.display = "none";
};

const displayWeatherData = (data) => {
    cityElement.textContent = data.name;
    tempElement.textContent = `${Math.round(data.main.temp)}°C`;
    humidityElement.textContent = `${data.main.humidity}%`;
    windSpeedElement.textContent = `${data.wind.speed} km/h`;
    setWeatherIcon(data.weather[0].main);
    weatherElement.style.display = "block";
};

async function checkWeather(city) {
    clearWeatherDisplay();
    errorMessageElement.textContent = "";

    try {
        const response = await fetch(apiUrl + city.trim() + `&appid=${apiKey}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found.");
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }

        const data = await response.json();
        console.log(data);
        displayWeatherData(data);


    } catch (error) {
        console.error("Error fetching weather:", error);
        errorMessageElement.textContent = error.message;
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchInput.value);
    }
});

// Load weather for New Delhi on page load
checkWeather("New Delhi");