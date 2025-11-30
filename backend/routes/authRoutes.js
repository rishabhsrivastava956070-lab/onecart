import express from "express";
import {login,logout,registration } from "../controller/authController.js";

const authRoutes = express.Router();   // Create router

authRoutes.post("/registration", registration);  // Use authRoutes
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);  // Add logout route
export default authRoutes;  // Export the same
