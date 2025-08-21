import bcrypt from 'bcryptjs';
import { User } from '../../models/UserModal/User.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';

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

        const isMatch = bcrypt.compare(password, user.password);
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

export { userRegister, userLogin };