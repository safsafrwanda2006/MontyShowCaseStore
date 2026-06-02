import React, { useEffect, useState } from "react";
import "./OnePice.css";
import axios from "axios";
import { BackendURL } from "../App.jsx";

function OnePeice({ setCart, cartProducts, setCartProducts }) {
  const [onePieceProducts, setOnePieceProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOnePieceProducts = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${BackendURL}/api/products`);
      setOnePieceProducts(result.data.filter((item) => item.type === "onepiece"));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOnePieceProducts();
  }, []);

  const addToCart = (image, price, name) => {
    try {
      const newProduct = { image, price, name };
      const updatedCart = [...cartProducts, newProduct];
      setCartProducts(updatedCart);
      localStorage.setItem("mycart", JSON.stringify(updatedCart));
      setCart(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="one-piece" id="onepiece">
      <div className="one-piece-header">
        <div className="one-piece-title">
          <h2>حبة واحدة</h2>
          <h4>شغل جاي حبة واحدة</h4>
        </div>
      </div>

      <div className="one-piece-scroll-container">
        {loading ? (
          <>
            <div className="loading-onepiece"></div>
            <div className="loading-onepiece"></div>
            <div className="loading-onepiece"></div>
            <div className="loading-onepiece"></div>
          </>
        ) : onePieceProducts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon"></div>
            <h2>لا توجد منتجات قطعة واحدة حالياً</h2>
            <p>نعمل على إضافة المزيد من المنتجات</p>
          </div>
        ) : (
          onePieceProducts.map((item) => (
            <div key={item.id} className="one-piece-card">
              <div className="one-piece-card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="one-piece-card-content">
                <h4 className="one-piece-card-name">{item.name}</h4>
                <div className="one-piece-card-footer">
                  <span className="one-piece-price">{item.price} ج.س</span>
                  <button
                    onClick={() => addToCart(item.image, item.price, item.name)}
                    className="one-piece-add-btn"
                    title="أضف للسلة"
                  >
                    <img src="/icons/add-to-cart.png" alt="add to cart" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OnePeice;
