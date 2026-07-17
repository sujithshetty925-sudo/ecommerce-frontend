import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      alert("Product deleted successfully");
      loadProducts();
    } catch (error) {
      alert("Failed to delete product");
      console.error(error);
    }
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };
  const handleBuyNow=(product)=>{
    localStorage.setItem(
      "buyNowProduct",
      JSON.stringify(product)
    );
    navigate("/checkout",{state:{product}});
  };

  const getRelatedProducts = (product) => {
    return products.filter(
      (p) =>
        p.id !== product.id &&
        p.category?.name === product.category?.name
    );
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="hero-banner">
        <h1>Welcome to E-commerce store</h1>
        <p>Best Deals . Fast Delivery . Secure Shopping</p>
        <button className="shop-btn">Shop Now</button>
      </div>
      <div className="category-section">
        <button> Electronice</button>
        <button>Fashion</button>
        <button>Laptops</button>
        <button>Watches</button>
        <button>Shoes</button>
        <button>Books</button>
      </div>
      <h2 className="section-title">All Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">

              <img
                src={
                  product.imageUrl ||
                  "https://via.placeholder.com/300x220?text=No+Image"
                }
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">

                <h3 className="product-name">
                  {product.name}
                </h3>

                <p className="product-category">
                  {product.category?.name}
                </p>

                <p className="product-description">
                  {product.description}
                </p>

                <h2 className="product-price">
                  ₹{product.price}
                </h2>

                <div className="product-actions">

                  <button
                    className="btn btn-buy"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                  className="btn btn-buy-now"
                  onClick={()=>handleBuyNow(product)}
                  >
                    Buy Now
                  </button>
                  {isAdmin && (
                    <>
                      <button
                        className="btn btn-edit"
                        onClick={() =>
                          navigate(`/edit/${product.id}`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-delete"
                        onClick={() =>
                          handleDelete(product.id)
                        }
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>

                {getRelatedProducts(product).length > 0 && (
                  <div className="related-products">

                    <p className="related-title">
                      Related Products
                    </p>

                    <div className="related-list">
                      {getRelatedProducts(product).map((rel) => (
                        <div
                          key={rel.id}
                          className="related-item"
                        >
                          {rel.imageUrl ? (
                            <img
                              src={rel.imageUrl}
                              alt={rel.name}
                              className="related-image"
                            />
                          ) : (
                            <div className="related-image-placeholder">
                              No Image
                            </div>
                          )}

                          <p className="related-name">
                            {rel.name}
                          </p>

                          <p className="related-price">
                            ₹{rel.price}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;