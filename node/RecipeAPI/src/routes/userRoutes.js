import express from "express";
import { signin, signup, signout } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);

export default router;
