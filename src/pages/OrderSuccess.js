import React from "react";
import{useNavigate} from "react-router-dom";
function OrderSuccess(){
    const navigate=useNavigate();
    return(
        <div style={{textAlign:"center",padding:"50px"}}>
        <h1 style={{color:"green"}}>Order Placed Successfully!</h1>
        <p> Thank you for shopping with us.</p>
        <button
        onClick={()=>navigate("/")}
        style={{
            padding:"10px 20px",
            background:"green",
            color:"white",
            border:"none",
            borderRadius:"5px",
            cursor :"pointer",
            marginTop:"20px"
        }}
        >
            Continue Shopping
        </button>
        </div>
    );
    }
    export default OrderSuccess;
