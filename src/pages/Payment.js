import React,{useState} from "react";
import{useNavigate}from "react-router-dom";
function Payment(){
const navigate=useNavigate();
const [paymentMethod,setPaymentMethod]=useState("UPI");
const handlePayment=()=>{
    const productData=localStorage.getItem("buyNowProduct");
    const product=productData?
    JSON.parse(productData):null;
    const ordersData=localStorage.getItem("orders");
    const orders =ordersData? JSON.parse(ordersData):[];
    orders.push({
        ...product,
        paymentMethod,
    })
    localStorage.setItem("orders",JSON.stringify(orders));
    alert("Payment Successful!");
    navigate("/OrderSuccess");
};
return(
    <div 
    style={{
        width:"400px",
        margin:"50px auto",
        padding:"20px",
        border:"1px solid #ddd",
        borderRadius:"10px",
        boxShadow:"0 0 10px rgba(0,0,0,0.2)",
    }}
    >
        <h2 style={{textAlign:"center"}}>Payment</h2>
        <h3> Select Payment Method</h3>
        <label>
            <input
            type="radio"
            value="UPI"
            checked={paymentMethod==="UPI"}
            onChange={(e)=>setPaymentMethod(e.target.value)}
            />
            UPI
        </label>
        <br/>
        <br/>
        <label>
            <input
            type="radio"
            value="Card"
            checked={paymentMethod==="Card"}
            onChange={(e)=>setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
        </label>
        <br/>
        <br/>
        <button 
        onClick={handlePayment}
        style={{
            width:"100%",
            padding:"12px",
            background:"green",
            color:"white",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer",
            fontSize:"16px",
        }}
        >
            Pay Now
        </button>
    </div>
);
}
export default Payment;