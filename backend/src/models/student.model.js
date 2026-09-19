const mongoose=require('mongoose');;

const studentSchema= new mongoose.Schema({
    name:String,
    age:Number,
    department:String,
    cgpa:Number,
    email:String
});

const Student=mongoose.model("Student",studentSchema);
module.exports=Student;