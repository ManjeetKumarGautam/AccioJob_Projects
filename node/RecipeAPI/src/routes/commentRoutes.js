import express from "express";
import { addComment, getComments, removeComment } from "../controllers/CommentController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateUser, addComment);
router.get("/:recipeId", getComments);
router.delete("/:commentId", authenticateUser, removeComment);

export default router;
