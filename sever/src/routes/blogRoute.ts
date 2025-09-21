import express from "express";
import {
  getAllBlogs,
  getBlogsBySlug,
  getBlog,
  createBlog,
} from "../controllers/blogController.js";

const blogRoute = express.Router();

// GET /api/v1/blogs - get all blogs with query parameters
blogRoute.get("/", getAllBlogs);

// GET /api/v1/blogs/:slug - get blog by slug
blogRoute.get("/slug/:slug", getBlogsBySlug);

// GET /api/v1/blogs/:id - get blog by id
blogRoute.get("/:id", getBlog);

// POST /api/v1/blogs - create new blog
blogRoute.post("/", createBlog);

export default blogRoute;