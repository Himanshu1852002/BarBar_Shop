import bcrypt from 'bcryptjs';
import { User } from '../../models/UserModal/User.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import path from "path";
import fs from "fs";

import multer from "multer";

// 1. multer config for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // uploads folder me save hoga
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
export const upload = multer({ storage: storage });

const userRegister = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        const exists = await User.findOne({ email });

        console.log(exists)
        if (exists) {
            return res.json({ success: false, message: 'User already exists' });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please enter valid email' });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: 'Please Enter Strong password' });
        }

        const hashpass = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashpass,
            role: 'user'
        });

        await newUser.save();

        const token = jwt.sign(
            { id: newUser._id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ success: true, message: "User register succesfully", token })
    }
    catch (err) {
        res.status(400).json({ error: "User already exists!" });
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found ❌" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials ❌" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            success: true,
            message: "Login successful ✅",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error ⚠️" });
    }
}

const getUserInfo = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found ❌" });
        }

        const imageUrl = user.image
            ? `${req.protocol}://${req.get("host")}/uploads/${user.image}`
            : null;

        res.json({
            user,
            image: imageUrl,
        });
    } catch (error) {
        console.error("Error fetching user info:", error);
        res.status(500).json({ success: false, message: "Server error ⚠️" });
    }
}

const changePassword = async (req, res) => {
    try {
        const userId = req.user.id;
        const { oldPassword, newPassword, confirmPassword } = req.body;

        if (newPassword !== confirmPassword) {
            return res.json({ success: false, message: "Passwords do not match ❌" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found ❌" });
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials ❌" });
        }

        if (newPassword.length < 8) {
            return res.json({ success: false, message: 'Please Enter Strong password' });
        }

        const hashpass = await bcrypt.hash(newPassword, 10);
        user.password = hashpass;
        await user.save();

        res.json({ success: true, message: "Password changed successfully ✅" });
    } catch (error) {
        console.error("Error changing password:", error);
        res.status(500).json({ success: false, message: "Server error ⚠️" });
    }
}

const editUserInfo = async (req, res) => {
  try {
    const userId = req.user.id;

    let updateData = { ...req.body };
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const user = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found ❌" });
    }

    res.json({
      success: true,
      message: "Profile updated successfully ✅",
      user
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ success: false, message: "Server error ⚠️" });
  }
};

const getAllUsers = async (req, res) => {

    try {
        const users = await User.find().select('-password');
        res.json({ success: true, users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: "Server error ⚠️" });
    }
}

export { userRegister, userLogin, getUserInfo, changePassword, editUserInfo, getAllUsers };