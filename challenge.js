const cities = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { name: "Sydney", lat: -33.8651, lng: 151.2099 },
  { name: "Rome", lat: 41.9028, lng: 12.4964 },
  { name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Rabat", lat: 34.0209, lng: -6.8416 },
];
const apiUrl = "https://api.open-meteo.com/v1/forecast";
const fetchWeather = async (lat, lng) => {
  try {
    const response = await fetch(
      `${apiUrl}?latitude=${lat}&longitude=${lng}&current_weather=true`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
// function returns a random city
const getRandomCity = () => {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
};

const city = getRandomCity();

// Using async/await to handle the Promise
const getWeatherData = async () => {
  const weather = await fetchWeather(city.lat, city.lng);
  console.log("Weather data for", city.name, ":", weather);
};

getWeatherData();
