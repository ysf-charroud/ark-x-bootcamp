import Route from "./Route.js";
import cities from "./cities.js";

// https://api.open-meteo.com/v1/forecast?latitude=XXXX&longitude=YYYY&current_weather=true

const route = new Route();
const port = 3000;
route.get("/weather", async (req, res) => {
  const city = req.query.city;

  // Validate the city query parameter
  if (!city) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("City query parameter is required\n");
    return;
  }

  // find the city from the cities object
  const { lat, lng, name } = cities.find(
    (ct) => ct.name.toLowerCase() === city.toLowerCase()
  );

  // fetch data from weather api
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
    );
    const data = await response.json();
    res.writeHead(200, { "Content-Type": "application/json" });
    const jsonData = JSON.stringify(data.current_weather);
    res.end(jsonData);
  } catch (error) {
    console.log("Error fetching data");
  }
});

route.start(port, () => {
  console.log("Server is running on port " + port);
});
