import {useState} from "react";

function Course(){
    const [courses,setCourses]=useState([]);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/courses",{
            method:"GET",
        });
        const data=await response.json();
        console.log(data);

        setCourses(data.courses);
    };
    return(
        <div>
            <button onClick={handleSubmit}>Get Courses</button>
            {courses.map((course)=>{
                return(
                    <div key={course._id}>
                    <h3>{course.corseId}</h3>
                    <h3>{course.name}</h3>
                    <p>{course.code}</p>
                    <p>{course.department}</p>
                    <p>{course.credits}</p>
                    <p>{course.teacherId}</p>
                    </div>  
                
                )    
            })}
        </div>
    )
};
export default Course;    