import Comment from "../models/Comment.js";

// Add a Comment
export const addComment = async (req, res) => {
    try {
        const { recipeId, text } = req.body;
        const newComment = await Comment.create({ text, recipeId, userId: req.user.id });

        res.status(201).json({ message: "Comment added successfully!", comment: newComment });
    } catch (error) {
        res.status(500).json({ message: "Error adding comment", error });
    }
};

// Get Comments for a Recipe
export const getComments = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const comments = await Comment.find({ recipeId }).populate("userId", "name");

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching comments", error });
    }
};

// Remove Comment
export const removeComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const comment = await Comment.findOne({ _id: commentId, userId: req.user.id });

        if (!comment) return res.status(403).json({ message: "Unauthorized action!" });

        await Comment.findByIdAndDelete(commentId);
        res.status(200).json({ message: "Comment removed successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error removing comment", error });
    }
};
