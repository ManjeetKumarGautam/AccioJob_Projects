import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes.js";
import recipeRoutes from "./src/routes/recipeRoutes.js";
import commentRoutes from "./src/routes/commentRoutes.js";
import connectDB from "./src/config/connectDB.js";

dotenv.config();

const app = express();
// MongoDB Connection
connectDB();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/comments", commentRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
