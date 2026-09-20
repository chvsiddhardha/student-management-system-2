import {useState} from "react";

function Teacher(){
    const [teachers,setTeachers]=useState([]);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const responce= await fetch("http://localhost:5000/teachers",{
            method:"GET",
        });
        const data=await responce.json();
        console.log(data);

        setTeachers(data.teachers);
    };
    return (
        <div>
            <button onClick={handleSubmit}>Get Teachers</button>

            {teachers.map((teacher)=>{
                return(
                    <div key={teacher._id}>
                <h3>{teacher.name}</h3>
                <p>{teacher.age}</p>
                <p>{teacher.department}</p>
                <p>{teacher.email}</p>
                </div>
                )
          
            })}
        </div>
    )
}
export default Teacher;