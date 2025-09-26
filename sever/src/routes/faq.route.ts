import express from "express";
import {
  getFAQs,
  createFAQ,
  updateFAQ,
} from "../controllers/faq.controller.js";

const faqRoute = express.Router();

// GET /api/v1/faqs - get all FAQs (supports category query param)
faqRoute.get("/", getFAQs);

// POST /api/v1/faqs - create new FAQ
faqRoute.post("/", createFAQ);

// PUT /api/v1/faqs/:id - update existing FAQ
faqRoute.put("/:id", updateFAQ);

export default faqRoute;