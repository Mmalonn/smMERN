import { Router } from "express";
import { createPost, getPost, updatePost, deletePost,likePost } from "../controllers/posts.controllers.js";
const router = Router();

router.get("/posts", getPost);
router.post("/posts", createPost);
router.patch("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.patch("/posts/:id/likePost", likePost)

export default router;
