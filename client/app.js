const fetch = require('node-fetch');
const dotenv = require('dotenv');

// Retrieve hidden OpenWeatherMap API key
dotenv.config();
const apiKey = process.env.OPEN_WEATHER_KEY;

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (zip) => {
  fetch(`${baseUrl}?zip=${zip},us&appid=${apiKey}&units=imperial`)
    .then((res) => res.json())
    .then((data) => {
      const { temp } = data.main;
      console.log({ temp });
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error('Error:', error));
};

// getWeather('94805');

const postEntry = async (entry) => {
  // entry should match: { zip, feelings }
};

const getEntries = async () => {
  const resp = await fetch('/entries')
    .then((res) => res.json())
    .then((json) => console.log('response json:', json));
};

// getEntries();
