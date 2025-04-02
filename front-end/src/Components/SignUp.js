import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })

    const collectData = async () => {
        // console.log("Name : "+name);
        // console.log("Email : "+email);
        // console.log("Password : "+password);


        let result = await fetch('http://localhost:5000/signup', {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        if (result) {
            navigate('/');
        }
    }

    return (
        <div>
            <form className="signup-form">
                <h1>SignUp</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /><br />
                <button type="button" onClick={collectData} >SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;