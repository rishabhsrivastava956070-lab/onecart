import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken } from "../config/token.js";

export const registration = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check empty fields
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Email validation (FIXED)
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter a valid email" });
        }

        // Check if user already exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Password strength check
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashPassword,
        });

        // Generate token (correct usage)
        const token = genToken(user._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(201).json({
            message: "User registered successfully",
            user,
            token,
        });

    } catch (error) {
        console.log("Register error", error);
        return res.status(500).json({ message: `Register error: ${error.message}` });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check empty fields
        let user=await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }  
        let isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid password"});
        }
        const token = genToken(user._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(201).json({
            message: "User registered successfully",
            user,
            token,
        });
    } catch (error) {
        console.log("login error", error);
        return res.status(500).json({ message: `login error: ${error.message}` });
    }
    }

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Logout error", error);
        return res.status(500).json({ message: `Logout error: ${error.message}` });
    }
}
