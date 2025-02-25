import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: String,
    recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Comment", CommentSchema);
