import React,{useState} from"react";
import {useNavigate}from"react-router-dom";
const ADMIN_EMAIL="sujithshetty925@gmail.com";
const ADMIN_PASSWORD="sujith@123";
function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        if(email==ADMIN_EMAIL && password==ADMIN_PASSWORD){
            localStorage.setItem("isAdmin","true");
            alert("Logged in as admin");
            navigate("/");
        }
        else{
            alert("Invalid credentials");
        }
        };
        return(
            <div style={{maxWidth:"350px",margin:"60px auto",padding:"20px"}}>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/><br/>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br/><br/>
                <button type="submit">Login</button>
            </form>
            </div>
        );
    }
    export default Login;