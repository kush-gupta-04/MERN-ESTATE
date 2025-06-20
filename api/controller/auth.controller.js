import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedpassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedpassword });

    try {
        await newUser.save();
        res.status(200).json("user created Succeessfully");
    }
    catch (error) {
        next(error);
    }


};

