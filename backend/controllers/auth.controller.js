import { User } from "../models/user.model.js";
import bcryptjs from 'bcrypt'
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCoookie.js";


export const signup = async (req, res) => {
    const {email, password, name} = req.body;
    try {
        if(!email ||  !password || !name) {
            throw new Error ("all fields are required")  

        } 

        const userAlreadyExist = await User.findOne({ email })
        console.log("userAlreadyExist", userAlreadyExist)

        if(userAlreadyExist){
            return res.status(400).json({ succes:false, message: "User already exist" });
        }

       const hashedPassword = await bcryptjs.hash(password, 10);
       const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

       const user = new User({  
        email,
        password: hashedPassword,
        name,
        verificationToken,
        verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 //24 hours 
       });

       await user.save();

       // jwt 
       generateTokenAndSetCookie(res,user._id)

       res.status(201).json({
        succes: true,
        message: "User created successfully",
        user: {
            ...user._doc,
            password: undefined,
        }
       });

    }catch (error) {
        res.status(400).json({succes:false,message: error.message})
        }
}

export const login = async (req, res) => {
    res.send("login route!");
}

export const logout = async (req, res) => {
    res.send("logout route!");
}   