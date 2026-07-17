import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                width="100"
                height="100"
                style={{ objectFit: "cover", marginRight: "15px" }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button
            style={{
              background: "green",
              color: "white",
              padding: "12px 25px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onClick={() => alert("Proceeding to Checkout")}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;