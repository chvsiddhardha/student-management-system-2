const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    code: String,
    department: String,
    credits: Number,
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;