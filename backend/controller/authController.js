import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import {genToken} from "../config/token.js";


export const registration = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(200).json({message:"User already exists"});
        }
      if(validator.isEmail(email)){
         return res.status(200).json({message:"Enter valid email"});
        }
      if(password.length < 8){
         return res.status(200).json({message:"Enter Strong password"});
        }
        let hashPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashPassword,
        });
        let token =await user.genToken(user._id);
        res.cookie("token", token, {httpOnly:true,
            secure:false,
                 sameSite:"Strict",
                 maxAge:7*24*60*60*1000
        });
        return res.status(201).json(user);
    } catch(error){
        console.log("register error", error);
        return res.status(500).json({message:"Register error ${error}"});

    }
}
       