import Recipe from "../models/Recipe.js";

// Post a Recipe
export const postRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions } = req.body;
        const newRecipe = await Recipe.create({ title, ingredients, instructions, owner: req.user.id });

        res.status(201).json({ message: "Recipe posted successfully!", recipe: newRecipe });
    } catch (error) {
        res.status(500).json({ message: "Error posting recipe", error });
    }
};

// Get All Recipes
export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate("owner", "name");
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes", error });
    }
};

// Get My Recipes
export const getMyRecipes = async (req, res) => {
    try {
        const myRecipes = await Recipe.find({ owner: req.user.id });
        res.status(200).json(myRecipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching your recipes", error });
    }
};

// Update a Recipe
export const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, ingredients, instructions } = req.body;

        const recipe = await Recipe.findOne({ _id: id, owner: req.user.id });
        if (!recipe) return res.status(403).json({ message: "Unauthorized action!" });

        recipe.title = title || recipe.title;
        recipe.ingredients = ingredients || recipe.ingredients;
        recipe.instructions = instructions || recipe.instructions;
        await recipe.save();

        res.status(200).json({ message: "Recipe updated successfully!", recipe });
    } catch (error) {
        res.status(500).json({ message: "Error updating recipe", error });
    }
};

// Delete Recipe
export const deleteRecipe = async (req, res) => {
    try {
        await Recipe.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
        res.status(200).json({ message: "Recipe deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting recipe", error });
    }
};
