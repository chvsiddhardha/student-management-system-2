const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");
const User = require("../models/user.model");

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    });

    res.status(201).json({
        message: "User registered successfully",
        user
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if(!isPasswordCorrect) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    const token=jwt.sign(
        {
            userId:user._id,
            role:user.role
        },
        "mysecretkey",
        {
            expiresIn:"1h"
        }
    );
   

    res.json({
        message: "Login successful",
        token
    });
};