import express from "express";
import {
  getFAQs,
  createFAQ,
} from "../controllers/faqController.js";

const faqRoute = express.Router();

// GET /api/v1/faqs - get all FAQs (supports category query param)
faqRoute.get("/", getFAQs);

// POST /api/v1/faqs - create new FAQ
faqRoute.post("/", createFAQ);

export default faqRoute;