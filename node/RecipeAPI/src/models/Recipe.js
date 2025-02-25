import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    instructions: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Recipe", RecipeSchema);
