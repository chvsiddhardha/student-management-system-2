const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const studentRoutes=require("./src/routes/student.routes");
const teacherRoutes=require("./src/routes/teacher.routes");
const courseRoutes=require("./src/routes/course.routes");
const authRoutes=require("./src/routes/auth.routes");
const connectDB=require('./src/config/database');
const PORT=5000;
app.use(express.json());
app.use("/students",studentRoutes);
app.use("/teachers",teacherRoutes);
app.use("/courses",courseRoutes);
app.use("/auth",authRoutes);
connectDB()
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});