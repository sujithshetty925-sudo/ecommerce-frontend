import React from "react";
import {useLocation,useNavigate} from "react-router-dom";
function Checkout(){
    const location=useLocation();
    const navigate=useNavigate();
    const product=location.state?.product;
    if(!product){
        return(
            <div style={{padding:'20px'}}>
                <h2>No product selected.</h2>
                <button onClick={()=>navigate("/")}>Go Home</button>
            </div>
        );
    }
    const placeOrder=()=>{
        navigate("/payment");
    };
    return(
        <div style={{padding:"30px",textAlign:"center"}}>
            <h2>Checkout</h2>
            <img src={product.imageUrl}
            alt={product.name}
            style={{
                width:"250px",
                height:"200px",
                objectFit:"cover",
                borderRadius:"10px",
            }}
            />
            <h3>{product.name}</h3>
            <p><strong>Category:</strong>{product.category?.name}</p>
            <p><strong>Description:</strong>{product.description}</p>
            <h2>Price:{product.price}</h2>
            <button
            onClick={placeOrder}
            style={{
                background:"green",
                color:"white",
                padding:"12px 25px",
                border:"none",
                borderRadius:"5px",
                cursor:"pointer",
                marginTop:"20px",
            }}
            >
                Place Order
            </button>
        </div>
    );
}
export default Checkout;