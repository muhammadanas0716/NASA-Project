// Main app file to store all the routes and middleware (express app)

const express = require("express");

// In-project IMPORTS
const planetRouter = require("./routes/planets/planets.router").default;

// Express app
const app = express();

// Parse any incoming JSON from incomming requests
app.use(express.json());
app.use(planetRouter);

// EXPORT
module.exports = app;
