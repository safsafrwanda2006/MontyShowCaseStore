import React, { useEffect, useState } from "react";
import "./Featured.css";
import axios from "axios";
import { BackendURL } from "../App.jsx";

function Featured({ setCart,cartProducts, setCartProducts }) {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFeatured = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${BackendURL}/api/products`);
      setFeatured(result.data.filter((item) => item.type == "featured"));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFeatured();
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
    <div className="featured" id="featured">
      <div className="featured-first-row">
        <div className="featured-title">
          {" "}
          <h2>منتجات مميزة</h2>
          <h4>أفضل اختياراتنا ليك</h4>
        </div>
        <a className="view-all-btn1" href="#/products">
          عرض الكل
        </a>
      </div>

      <div className="featureds">
        {loading ? (
          <>
            {" "}
            <div className="loading-feautred"></div>
            <div className="loading-feautred"></div>
            <div className="loading-feautred"></div>
            <div className="loading-feautred"></div>
          </>
        ) : featured.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">⭐</div>
            <h2>لا توجد منتجات مميزة حالياً</h2>
            <p>نعمل على اختيار أفضل المنتجات لك</p>
            <p className="stay-tuned">تابعنا للحصول على أحدث الاختيارات</p>
          </div>
        ) : (
          featured.map((item) => (
            <div key={item.id} className="featured-card">
              <img src={item.image} alt="product" />
              <h4>{item.name}</h4>
              <div className="featured-card-row">
                <h3 className="featured-price">{item.price} ج.س</h3>
                <button
                  onClick={() =>{ 
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

export default Featured;
