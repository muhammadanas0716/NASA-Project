// Defines the routes for the planets endpoint

const express = require("express");

const planetsRouter = express.Router();
const { getAllPlanets } = require("./planets.controller").default;

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
