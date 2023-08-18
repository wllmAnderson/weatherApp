# Weather App

A simple client-side weather app that allows users to retrieve the current weather information for any city. The app uses the OpenWeatherMap API to fetch weather data.

## Features

Search weather by city name.
Displays temperature, weather description, and an icon representing the weather.

## Prerequisites

You'll need an API key from OpenWeatherMap.

## Installation and Setup

Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/weather-app.git
cd weather-app
Add Your API Key: Open the script.js file and replace YOUR_API_KEY_HERE with your actual API key.

Open in a Browser: Open index.html in a modern web browser.

## Usage
Enter a city name into the input field and click the "Get Weather" button. The current weather information for that city will be displayed below the input field.

## Note
This code makes a client-side request to the OpenWeatherMap API, which may not be supported by all browsers due to CORS (Cross-Origin Resource Sharing) policies. In a production application, you would likely want to proxy the API request through your own server to overcome this limitation, or use OpenWeatherMap's support for client-side requests if available.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Contributing
If you have any ideas, just open an issue and tell me what you think. If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

Acknowledgements
OpenWeatherMap for providing the weather data.