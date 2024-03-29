import express from "express";
import { body } from "express-validator";
import blogController from "../controllers/blogController.js";

const router = express.Router();

// [POST] : /v1/blog/post
router.post("/post", [
    body('title').isLength({min: 5}).withMessage("input title tidak sesuai"), 
    body('body').isLength({min: 5}).withMessage("input body tidak sesuai")
], blogController.createBlogPost);

router.get("/posts", blogController.getAllBlogPost);
router.get("/post/:postId", blogController.getBlogPostById);

router.put("/post/:postId", [
    body('title').isLength({min: 5}).withMessage("input title tidak sesuai"), 
    body('body').isLength({min: 5}).withMessage("input body tidak sesuai")
], blogController.updateBlogPost);

export default router;
