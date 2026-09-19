const Teacher=require("../models/teacher.model");

exports.getAllTeachers=async(req,res)=>{
    const teachers= await Teacher.find();
    res.json({
        message:"Get all students",
        teachers
    });
};

exports.getAllTeacherById=async(req,res)=>{
    const id=Number(req.params.id);
    const teacher= await Teacher.findById(id);
    if(!teacher){
        res.json({
            message:"Teacher not found"
        });
    }
    res.json({
        message:"Get teacher by id",
        teacher
    });
};

exports.createTeacher=async(req,res)=>{
    const {name,age,department,subject,email}=req.body;
    const teacher=await Teacher.create({
        name,age,department,subject,email
    });
    res.json({
        message:"Teacher created successfully",
        teacher
    });

};

exports.updateTeacher=async(req,res)=>{
    const id=Number(req.params.id);
    const teacher=await Teacher.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    );
    if(!teacher){
        res.json({
            message:"Teacher not found"
        });
    }
    res.json({
        message:"Updated successfully",
        teacher
    });
    
};

exports.deleteTeacher=async(req,res)=>{
    const id=Number(req.params.id);
    const teacher=await Teacher.findByIdAndDelete(id);
    if(!teacher){
        res.json({
            message:"Teacher not found"
        });
    }
    res.json({
        message:"Teacher deleted successfully",
        teacher
    });
};