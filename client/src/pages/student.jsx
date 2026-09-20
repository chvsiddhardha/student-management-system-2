import { useState } from "react";

function Student() {
  const [students, setStudents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/students", {
      method: "GET",
    });

    const data = await response.json();

    console.log(data);

    setStudents(data.students);
  };

  return (
    <div>
      <button onClick={handleSubmit}>
        Get Students
      </button>

      {students.map((student) => (
        <div key={student._id}>
          <h3>{student.name}</h3>
          <p>{student.email}</p>
          <p>{student.department}</p>
          <p>{student.cgpa}</p>
        </div>
      ))}
    </div>
  );
}

export default Student;