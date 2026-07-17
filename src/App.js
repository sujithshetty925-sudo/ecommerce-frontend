import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditProduct from"./pages/EditProduct";
import Login from"./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from"./pages/OrderSuccess";
import Payment from "./pages/Payment";
import MyOrders from "./pages/MyOrders";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/OrderSuccess" element={<OrderSuccess/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/orders" element={<MyOrders/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;