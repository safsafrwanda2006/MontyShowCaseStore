import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
export default function Products() {
  const [products, setProducts] = useState([]);
  const BackendURL = "http://localhost:5001";
  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios.get(`${BackendURL}/api/products`);
        setProducts(result.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getProducts();
  }, []);
  return (
    <div className="products">
      <h1>this Products page</h1>
      {products.map((items) => (
        <div key={items.id}
        className="product">
            <h2>{items.name}</h2>
        </div>
      ))}
    </div>
  );
}
