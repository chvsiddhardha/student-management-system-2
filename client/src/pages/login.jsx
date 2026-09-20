import {useState} from "react";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit =async (e) => {
        e.preventDefault();

        const response= await fetch("http://localhost:5000/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email,
                password,
            }),

            
        });
        const data=await response.json();

        console.log(data);
    };
    return (
        <div>
            <h1>Student Management System</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email"
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>password</label>
                    <input type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;