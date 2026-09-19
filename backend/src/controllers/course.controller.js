const Course=require("../models/course.model");

exports.getAllCourses=async(req,res)=>{
    const courses= await Course.find();
    res.json({
        message:"Get all courses",
        courses
    });
};

exports.getCoursesById=async(req,res)=>{
    const courseId=Number(req.params.courseId);
    const course=await Course.findById(courseIdid);
    if(!course){
        res.json({
            message:"Course not found"
        });
    }
    res.json({
        message:"Get course by id",
        course
    });
};

exports.createCourse=async(req,res)=>{
    const {courseId,name,code,department,credits,teacherId}=req.body;

    const course=await Course.create({
        courseId,name,code,department,credits,teacherId

    });
    res.json({
        message:"course created successfully",
        course
    });
};

exports.updateCourse=async(req,res)=>{
    const courseId=Number(req.params.courseId);
    const course= Course.findByIdAndUpdate(
        courseId,
        req.params.courseId,
        {new:true}
    );
};

exports.deleteCourse=async(req,res)=>{
    const courseId=Number(req.params.courseId);
    const course=Course.findByIdAndDelete(courseId);
    if(!course){
        res.json({
            message:"Course not found"
        });
    }
    res.json({
        message:"Course deleted successfully",
        course
    });
};

