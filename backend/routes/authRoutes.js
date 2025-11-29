import express from "express";
import { registration } from "../controller/authController.js";

const router = express.Router();

authRoutes.post("/registration", registration);