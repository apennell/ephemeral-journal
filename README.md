# Ephemeral Journal App

This is a simple Node/Express app that uses the OpenWeatherMap API to access the current weather information for a given zip code and save it with a journal entry about the user's feelings. The entry is ephemeral--it will only display until you add a new entry or refresh the page!

Technologies: Node, Express, JavaScript, HTML, CSS, OpenWeatherMap API

## Instructions

1. Clone the repo and `cd weather-journal`
2. Run `npm install` to install the node modules
3. Sign up for an [OpenWeather](https://home.openweathermap.org/users/sign_up) account and get an API key
4. Add a file `/client/config.js` and add your API key in a config object:

   ```
   const config = {
     OPEN_WEATHER_KEY: '123yourapikey456',
   };
   ```

5. Run `npm start` to start the server
6. Open the browser to [http://localhost:3000](http://localhost:3000) and try it out!
