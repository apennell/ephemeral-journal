// Retrieve "hidden" OpenWeatherMap API key
// eslint-disable-next-line no-undef
const apiKey = config.OPEN_WEATHER_KEY;

const getWeather = async (zip) => {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const url = `${baseUrl}?zip=${zip},us&appid=${apiKey}&units=imperial`;
  const temp = await fetch(url)
    .then((res) => res.json())
    .then((data) => data.main.temp)
    // eslint-disable-next-line no-console
    .catch((error) => console.error('Error getting weather:', error));

  return temp;
};

const postEntry = async (url, entry) => {
  await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(entry),
  });
};

const getEntries = async () => {
  const resp = await fetch('/entries')
    .then((res) => res.json())
    // eslint-disable-next-line no-console
    .catch((error) => console.error('Error getting entries:', error));

  return resp;
};

const handleEntry = async (e) => {
  e.preventDefault();
  const feelingsInput = document.getElementById('feelings');
  const zip = document.getElementById('zip');
  const currentTemp = await getWeather(zip.value);

  const d = new Date();
  const formattedDate = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;

  await postEntry('/entry', {
    date: formattedDate,
    feelings: feelingsInput.value,
    temp: currentTemp,
  });

  // Clear inputs once posted
  zip.value = null;
  feelingsInput.value = null;

  // Get entry and populate in view
  const { date, feelings, temp } = await getEntries();
  document.getElementById('date').innerHTML = date;
  document.getElementById('temp').innerHTML = `${Math.floor(temp)}°F`;
  const content = document.getElementById('content');
  content.classList.remove('empty');
  content.innerHTML = feelings;
};

document.getElementById('generate').addEventListener('click', handleEntry);
