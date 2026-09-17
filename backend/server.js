const express = require("express");
const app = express();
const studentRoutes=require("./src/routes/student.routes");
PORT=5000;
app.use(express.json());
app.use("/students",studentRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});