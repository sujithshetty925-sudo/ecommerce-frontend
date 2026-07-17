import React, { useEffect, useState } from "react";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <h3>No Orders Found</h3>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <img
              src={order.imageUrl}
              alt={order.name}
              width="120"
              height="120"
              style={{ objectFit: "cover", marginRight: "20px" }}
            />

            <div>
              <h3>{order.name}</h3>
              <p>Price: ₹{order.price}</p>
              <p>Payment: {order.paymentMethod}</p>
              <p style={{ color: "green" }}>
                Status: Delivered
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;