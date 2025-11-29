import express from "express";
import {login,registration } from "../controller/authController.js";

const authRoutes = express.Router();   // Create router

authRoutes.post("/registration", registration);  // Use authRoutes
authRoutes.post("/login", login);
export default authRoutes;  // Export the same
