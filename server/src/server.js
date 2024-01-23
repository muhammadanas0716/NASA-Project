import { createServer } from "http";
import app from "./app";

const PORT = process.env.PORT || 8000; // Either set a PORT or defualt will be used (i.e 8000)

const server = createServer(app); // Create the HTTP server with the express app

// Start the server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
