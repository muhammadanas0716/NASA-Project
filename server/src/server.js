const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000; // Either set a PORT or defualt will be used (i.e 8000)

const server = http.createServer(app); // Create the HTTP server with the express app

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
