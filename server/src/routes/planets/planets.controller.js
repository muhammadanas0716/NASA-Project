// Manages (Control) incomming data from 'planets.model'

import planets from "../../models/planets.model";

function getAllPlanets(req, res) {
  return res.status(200).json(planets); // Return the 'planets' array
}

export default {
  getAllPlanets,
};
