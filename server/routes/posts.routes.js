import { Router } from "express";
import {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.controllers.js";
const router = Router();
import auth from "../middleware/auth.js";

router.get("/posts", getPost);
router.post("/posts", auth, createPost);
router.patch("/posts/:id", auth, updatePost);
router.delete("/posts/:id", auth, deletePost);
router.patch("/posts/:id/likePost", auth, likePost);

export default router;
