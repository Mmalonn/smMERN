import { Router } from "express";
import { signin, signup } from "../controllers/users.controllers.js";

const router = Router();

router.post("/users/signin", signin);
router.post("/users/signup", signup);
export default router;
