import UserModel from "../models/userModel.js";
import validator from "validator"
import bcrypt from "bcrypt"
import { response } from "express";

const signUp = async (req, res) => {

    const { username, password, email } = req.body;

    const isUser = await UserModel.findOne({ email });

    if (isUser) {
        return res.json({ status: true, message: "Email already exist, please login" })
    }
    if (!validator.isEmail(email)) {
        return res.json({ status: false, message: "Please enter a valid email" })
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const encryptPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            name: username,
            email: email,
            password: encryptPassword,

        })

        const user = await newUser.save();
        res.json({ success: true, message: "Sign up Successfully", user: user })
    }
    catch (err) {
        res.json({ success: false, error: err });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const existUser = await UserModel.findOne({ email });

    if (!existUser) {
        res.josn({ success: false, message: "User dons't exist..." });
    }

    try {
        const isMatch = await bcrypt.compare(password, existUser.password);
        if (isMatch) {
            res.json({ success: true, message: "You are Authorized...", userDeatils: existUser })
        }
    }
    catch (err) {
        res.json({ success: false, error: err });
    }

}
const logout = async (req, res) => {
    res.json({ success: true, message: "logout Seccessfull..." });
}

export { signUp, login, logout };