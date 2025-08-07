import { promises as fs } from "fs";

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

// this function used to get city name from input file
const getFileContent = async (path) => {
  try {
    const cityName = await fs.readFile(path, "utf8");
    return cityName.trim();
  } catch (err) {
    console.log(err);
  }
};

const fileExists = async (fileName) => {
  try {
    await fs.access(fileName);
    return true;
  } catch (error) {
    return false;
  }
};
const createCityFile = async () => {
  try {
    const cityName = await getFileContent("./input.txt");
    const fileName = `${cityName}.txt`;
    if (await fileExists(fileName)) {
      fs.unlink(fileName);
    }
    const city = cities.find((item) => item.name === cityName);
    if (city) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`;
      const res = await fetch(url);
      const data = await res.json();
      const { current_weather: weather } = data;
      fs.writeFile(fileName, JSON.stringify(weather));
    } else {
      console.log("City not found");
      return;
    }
  } catch (error) {}
};
createCityFile();
