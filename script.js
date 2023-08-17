function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '2c479dfacc57a44301b67fd8100ab6c6';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temp = data.main.temp - 273.15; // Convert from Kelvin to Celsius
                const weatherDiv = document.getElementById('weather');
                weatherDiv.innerHTML = `
                    <h2>${city}</h2>
                    <p>${temp.toFixed(2)}°C</p>
                    <p>${data.weather[0].description}</p>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon">
                `;
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('There was an error fetching the weather data:', error);
        });
}
