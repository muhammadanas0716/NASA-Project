// Main app file to store all the routes and middleware (express app)

const express = require("express");
const cors = require("cors");

// In-project IMPORTS
const planetRouter = require("./routes/planets/planets.router");

// Express app
const app = express();

// Parse any incoming JSON from incomming requests
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(planetRouter);

// EXPORT
module.exports = app;
