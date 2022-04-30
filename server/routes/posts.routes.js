import { Router } from "express";
import { createPost, getPost, updatePost } from "../controllers/posts.controllers.js";
const router = Router();

router.get("/posts", getPost);
router.post("/posts", createPost);
router.patch("/posts/:id", updatePost)

export default router;
