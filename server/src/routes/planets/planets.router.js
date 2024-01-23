// Defines the routes for the planets endpoint

import { Router } from "express";

const planetsRouter = Router();
import { getAllPlanets } from "./planets.controller";

planetsRouter.get("/planets", getAllPlanets);

export default planetsRouter;
