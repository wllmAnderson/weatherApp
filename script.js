import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Use React's Concurrent Mode to render a React component to the designated element
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
/**
 * Toggles the display mode between day and night.
 */

function toggleMode() {
    const body = document.getElementById('body');
    const button = document.getElementById('toggleMode');
    if (body.classList.contains('day-mode')) {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
        button.textContent = 'Toggle Day Mode';
    } else {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
        button.textContent = 'Toggle Night Mode';
    }
}
/**
 * Fetches weather data for the given city and updates the DOM with the results.
 */
function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '2c479dfacc57a44301b67fd8100ab6c6';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Fetch weather data for the city from the OpenWeatherMap API

    fetch(url)
        .then(response => response.json())
        .then(data => {
                        // If the city is found and the data is valid

            if (data.cod === 200) {
                                // Convert temperature from Kelvin to Celsius
                const temp = data.main.temp - 273.15; 
                const weatherDiv = document.getElementById('weather');
                                // Update the weather information on the webpage
                weatherDiv.innerHTML = `
                    <h2>${city}</h2>
                    <p>${temp.toFixed(2)}°C</p>
                    <p>${data.weather[0].description}</p>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon">
                `;
            } else {
                                // If the city is not found or data is invalid
                alert('City not found');
            }
        })
                // Log any errors that occur during the fetch process
        .catch(error => {
            console.error('There was an error fetching the weather data:', error);
        });
}
