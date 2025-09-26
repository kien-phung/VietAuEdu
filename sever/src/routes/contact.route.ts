import express from "express";
import {
  getAllContacts,
  getContact,
  submitContact,
} from "../controllers/contact.controller.js";
import { isAuth } from "../utils/configs/middlewares/auth.middleware.js";

const contactRoute = express.Router();

// GET /api/v1/contacts - get all contacts
contactRoute.get("/", isAuth, getAllContacts);

// GET /api/v1/contacts/:id - get contact by id
contactRoute.get("/:id", isAuth, getContact);

// POST /api/v1/contacts - submit new contact
contactRoute.post("/", submitContact);

export default contactRoute;