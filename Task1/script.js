
const apiKey = '556c855b76f00c4d31e5c7b1007f59b2';                //  FETCH API KEY FROM URL,LOGIN TO ACCOUNT

const apiUrl = `https://openweathermap.org/api=${apiKey}`

function fetchWeatherData() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector('.weather-data');
    
      const weatherInfo = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
      weatherContainer.innerHTML = weatherInfo;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });
}



fetchWeatherData();


