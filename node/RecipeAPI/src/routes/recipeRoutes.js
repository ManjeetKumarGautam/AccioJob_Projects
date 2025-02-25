import express from "express";
import { postRecipe, getRecipes, getMyRecipes, updateRecipe, deleteRecipe } from "../controllers/RecipeController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateUser, postRecipe);
router.get("/", getRecipes);
router.get("/my", authenticateUser, getMyRecipes);
router.put("/:id", authenticateUser, updateRecipe);
router.delete("/:id", authenticateUser, deleteRecipe);

export default router;
