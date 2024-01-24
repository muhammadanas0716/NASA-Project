// Manages (Control) incomming data from 'planets.model'

const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  return res.status(200).json(planets); // Return the 'planets' arr
}

module.exports = {
  getAllPlanets,
};
