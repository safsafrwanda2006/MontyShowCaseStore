import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { BackendURL } from "../App.jsx";

export default function Products({ setCart, cartProducts, setCartProducts }) {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(20);

  const PRODUCTS_PER_PAGE = 20;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${BackendURL}/api/products`);
        setAllProducts(result.data);
        setDisplayedProducts(result.data.slice(0, PRODUCTS_PER_PAGE));
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const handleViewMore = () => {
    const newCount = displayCount + PRODUCTS_PER_PAGE;
    setDisplayCount(newCount);
    setDisplayedProducts(allProducts.slice(0, newCount));
  };

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
    <div className="products-container" id="products">
      <div className="products-header" >
        <h1>جميع المنتجات</h1>
        <p>اكتشف مجموعتنا الكاملة من المنتجات الممتازة</p>
      </div>

      <div className="products-wrapper">
        {loading ? (
          <div className="loading-grid">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="loading-product"></div>
            ))}
          </div>
        ) : displayedProducts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📦</div>
            <h2>لا توجد منتجات متاحة</h2>
            <p>نعتذر، لا توجد منتجات في المتجر حالياً</p>
          </div>
        ) : (
          <>
            <div className="products-grid">
              {displayedProducts.map((item) => (
                <div key={item.id} className="product-item">
                  <div className="product-image-wrapper">
                    <img src={item.image} alt={item.name} className="product-image" />
                    <div className="product-overlay">
                      <button
                        onClick={() => {
                          addToCart(item.image, item.price, item.name);
                          setCart(true);
                        }}
                        className="add-to-cart-btn"
                      >
                        <img src="/icons/add-to-cart.png" alt="Add to cart" />
                        إضافة للسلة
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{item.name}</h3>
                    <p className="product-price">{item.price} ج.س</p>
                  </div>
                </div>
              ))}
            </div>

            {displayCount < allProducts.length && (
              <div className="view-more-container">
                <button className="view-more-btn" onClick={handleViewMore}>
                  عرض المزيد
                </button>
                <p className="products-count">
                  عرض {displayedProducts.length} من {allProducts.length} منتج
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
