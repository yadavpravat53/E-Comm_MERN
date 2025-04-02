import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate("/");
        }
    },[])

    const handleLogin=async ()=>{
        // console.log(email,password);
        let result=await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result=await result.json();
        // console.log(result);
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            if (result) {
                navigate('/');
            }
        }else{
            alert("Please Enter Correct details");
        }
    }

    return(
        <div className="login-form">
            <h1>LogIn</h1>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email" ></input><br/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter Password" ></input><br/>
            <button type="button" onClick={handleLogin} >LogIn</button>
        </div>
    )
}

export default Login;