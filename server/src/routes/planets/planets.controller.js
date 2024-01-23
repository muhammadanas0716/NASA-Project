const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  return res.status(200).json(planets); // Return the 'planets' array
}

module.exports = {
  getAllPlanets,
};
