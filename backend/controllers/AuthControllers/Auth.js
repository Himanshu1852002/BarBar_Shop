import bcrypt from 'bcryptjs';
import { User } from '../../models/UserModal/User.js';
import validator from 'validator';

const userRegister = async (req, res) => {
    const { name, email, password } = req.body;
    const hashpass = await bcrypt.hash(password, 10);

    try {

        const exists = await User.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: 'User already exists' });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please enter valid email' });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: 'Please Enter Strong password' });
        }

        const users = await User({
            name: name,
            email: email,
            password: hashpass,
            role: 'user'
        });
        await users.save();
        res.json({ message: "User register succesfully" })
    }
    catch (err) {
        res.status(400).json({ error: "User already exists!" });
    }
}

export {userRegister};