import Route from "./Route.js";
import cities from "./cities.js";
const route = new Route();
const port = 3000;
route.get("/weather", (req, res) => {
  city = req.query.city;

  // Validate the city query parameter
  if (!city) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("City query parameter is required\n");
    return;
  }

  res.end(JSON.stringify({ city: req.query.city }));
});

route.start(port, () => {
  console.log("Server is running on port " + port);
});
