import React, { useEffect, useState } from "react";
import "./New.css";
import axios from "axios";
import { BackendURL } from "../App.jsx";

function New({ setCart, cartProducts, setCartProducts }) {
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNewProducts = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${BackendURL}/api/products`);
      setNewProducts(result.data.filter((item) => item.type == 'new'));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewProducts();
  }, []);

  const addToCart = (image, price, name) => {
    try {
      const newProduct = { image, price, name };
      const updatedCart = [...cartProducts, newProduct];
      setCartProducts(updatedCart);
      localStorage.setItem("mycart", JSON.stringify(updatedCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new" id="new">
      <div className="new-first-row">
        <div className="new-title">
          {" "}
          <h2>منتجات جديدة</h2>
          <h4>أحدث إضافاتنا</h4>
        </div>
       
      </div>

      <div className="news">
        {loading ? (
          <>
            {" "}
            <div className="loading-new"></div>
            <div className="loading-new"></div>
            <div className="loading-new"></div>
            <div className="loading-new"></div>
          </>
        ) : newProducts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon"></div>
            <h2>لا توجد منتجات جديدة حالياً</h2>
            <p>نعمل على إضافة منتجات جديدة قريباً جداً</p>
            <p className="stay-tuned">تابعنا للحصول على أحدث العروض</p>
          </div>
        ) : (
          newProducts.map((item) => (
            <div key={item.id} className="new-card">
              <img src={item.image} alt="product" />
              <h4>{item.name}</h4>
              <div className="new-card-row">
                <h3 className="new-price">{item.price} ج.س</h3>
                <button
                  onClick={() => {
                    addToCart(item.image, item.price, item.name);
                    setCart(true);
                  }}
                  className="add-to-cart"
                >
                  <img src="/icons/add-to-cart.png" alt="" />
                </button>
              </div>{" "}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default New;
