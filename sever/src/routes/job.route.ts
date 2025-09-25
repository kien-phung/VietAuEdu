import express from "express";
import {
  getAllJobs,
  getJob,
  createJob,
} from "../controllers/job.controller.js";

const jobRoute = express.Router();

// GET /api/v1/jobs - get all jobs
jobRoute.get("/", getAllJobs);

// GET /api/v1/jobs/:id - get job by id
jobRoute.get("/:id", getJob);

// POST /api/v1/jobs - create new job
jobRoute.post("/", createJob);

export default jobRoute;