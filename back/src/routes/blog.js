import express from "express";
import blogController from "../controllers/blogController.js";

const router = express.Router();

// [POST] : /v1/blog/post
router.post("/post", blogController.createBlogPost);

export default router;
