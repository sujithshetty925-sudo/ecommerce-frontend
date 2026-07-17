import React from "react";
import {Link,useNavigate} from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    const navigate=useNavigate();
    const isAdmin = localStorage.getItem("isAdmin")==="true";
    const handleLogout=()=>{
        localStorage.removeItem("isAdmin");
        alert("Logged out successfully");
        navigate("/");
    };
    return(
        <nav className="navbar">
            <h1 className="logo">E-Commerce</h1>
                <div className="navbar-links">
                 <Link  to="/">Home</Link>
                 <Link to="/cart">Cart</Link>
                 <Link to="/orders">My Orders</Link>
                 <Link to="/profile">Profile</Link>
                {isAdmin && <Link to="/add">Add product</Link>}
                {isAdmin?(
                    <button className="navbar-logout"onClick={handleLogout}>Logout</button>
                ):(
                    <Link to="/login">Login</Link>
                
                )}

            </div>
        </nav>
    );
}
export default Navbar;