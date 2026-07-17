import React, { useState } from "react";
import { addProduct } from "../services/api";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: 1,
    imageUrl:"",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: product.name,
      description: product.description,
      price: parseFloat(product.price),
      stock: parseInt(product.stock),
      category: {
        id: parseInt(product.categoryId),
      },
      imageUrl:product.imageUrl,
    };

    try {
      await addProduct(productData);

      alert("Product added successfully!");

      setProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        categoryId: 1,
        imageUrl:""
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
        />
        <br />
        <br />

        <select
          name="categoryId"
          value={product.categoryId}
          onChange={handleChange}
        >
          <option value="1">Electronics</option>
        </select>
        <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={product.imageUrl}
        onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;