const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["ADMIN", "TEACHER", "STUDENT"]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;