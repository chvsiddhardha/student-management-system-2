const students=require("../database/students");

exports.getAllStudents=(req,res)=>{
    res.json({
        message:"Get all students",
        students
    });
};
exports.getStudentById=(req,res)=>{
    const id=Number(req.params.id);
    const student=students.find(student=>student.id===id);
    res.json({
        message:"Get students by id",
        student
    });
};
exports.createStudent=(req,res)=>{
    const {name,age,department,cgpa,email}=req.body;
    const newStudent={
        id:students.length+1,
        name:name,
        age:age,
        department:department,
        cgpa:cgpa,
        email:email
    };
    students.push(newStudent);
    res.json({
        message:"student added successfully",
        students    
    });
};
exports.updateStudent=(req,res)=>{
    const id=Number(req.params.id);
    const student=students.find(student=>student.id===id);
    if(student){
        const {name,age,department,cgpa,email}=req.body;
        student.name=name,
        student.age=age,
        student.department=department,
        student.cgpa=cgpa,
        student.email=email
    };    
};
exports.deleteStudent=(req,res)=>{
    const id=Number(req.params.id);
    const index=students.findIndex(student=>student.id===id);
    if(index!=-1){
        students.splice(index,1);
        res.json({
            message:"deleted successfully"
        });
    }
    else{
        res.json({
            message:"student not found"
        });
    }
};

