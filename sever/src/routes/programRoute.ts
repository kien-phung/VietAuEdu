import express from "express";
import {
  getPrograms,
  getProgram,
  createProgram,
} from "../controllers/programController.js";

const programRoute = express.Router();

// GET /api/v1/programs - get all programs (supports featured query param)
programRoute.get("/", getPrograms);

// GET /api/v1/programs/:id - get program by id
programRoute.get("/:id", getProgram);

// POST /api/v1/programs - create new program
programRoute.post("/", createProgram);

export default programRoute;