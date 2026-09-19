const students=require("../database/students");
const Student=require("../models/student.model");

exports.getAllStudents=async(req,res)=>{
    const students= await Student.find();
    res.json({
        message:"Get all students",
        students
    });
};
exports.getStudentById=async (req,res)=>{
    const id=Number(req.params.id);
    const student= await Student.findById(id);
    if(!student){
        res.json({
            message:"Student not found"
        });
    }
    res.json({
        message:"Get students by id",
        student
    });
};
exports.createStudent=async(req,res)=>{
    const {name,age,department,cgpa,email}=req.body;
    const student= await Student.create({
        name,
        age,
        department,
        cgpa,
        email
    });
    res.json({
        message:"student added successfully",
        student
    });
};
exports.updateStudent=async(req,res)=>{
    const id=Number(req.params.id);
    const student= await Student.findByIdAndUpdate(
        id,
        req.body,
        {new:true}

    );
    if(!student){
        res.json({
            message:"Student not found"
        });
    }
    res.json({
        message:"student updated successfully",
        student
    });   
};
exports.deleteStudent=async(req,res)=>{
    const id=Number(req.params.id);
    const student= await Student.findByIdAndDelete(id);
    if(!student){
        res.json({
            message:"Student not found"
        });
    }
    res.json({
        message:"Student deleted successfully",
        student
    });
};

