import React, { useEffect, useState } from "react";
import "./Cart.css";
import { BackendURL } from "../App.jsx";
import { APP_CONFIG } from "../config/constants.js";
import axios from "axios";

function Cart({ cartProducts, setCartProducts, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("mycart");
    setCartProducts(cartData ? JSON.parse(cartData) : []);
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await axios.get(`${BackendURL}/api/products`);
      setProducts(result.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteFromCart = (product) => {
    try {
      const updatedCart = cartProducts.filter(
        (item) => item.name !== product.name
      );
      setCartProducts(updatedCart);
      localStorage.setItem("mycart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };

  const handleWhatsappOrder = () => {
    try {
      if (cartProducts.length === 0) {
        alert("السلة فارغة! يرجى إضافة منتجات أولاً");
        return;
      }

      const productList = cartProducts
        .map(
          (p, index) =>
            `${index + 1}. ${p.name}
السعر: ${p.price} ج.س
الصورة: ${p.image}`
        )
        .join("\n\n");

      const totalPrice = cartProducts.reduce(
        (sum, p) => sum + parseFloat(p.price || 0),
        0
      );

      const message = `السلام عليكم ورحمة الله وبركاته

المطلوب من ${APP_CONFIG.BUSINESS_NAME}:

${productList}

الإجمالي: ${totalPrice} ج.س`;

      const whatsappURL = `https://wa.me/${APP_CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      alert("حدث خطأ في فتح واتساب");
    }
  };

  const handleAddMore = () => {
    try {
      setCart(false);
      // Smooth scroll to products section
      setTimeout(() => {
        const element = document.getElementById("products");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } catch (error) {
      console.error("Error in handleAddMore:", error);
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setCart(false);
      }}
      className="Cart-container"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="navCart"
      >
        <div className="cartTopPar">
          <button onClick={() => setCart(false)} title="إغلاق السلة">
            <img src="icons/close.png" alt="إغلاق" />
          </button>
          <div className="title">
            <h2>السلة</h2>
            {cartProducts.length > 0 && (
              <span className="cart-count">{cartProducts.length}</span>
            )}
          </div>
        </div>

        <div className="cart-products">
          {cartProducts.length === 0 ? (
            <div className="empty-cart-state">
              <div className="empty-icon">🛒</div>
              <h3>السلة فارغة</h3>
              <p>أضف منتجات لبدء التسوق</p>
            </div>
          ) : (
            cartProducts.map((items) => (
              <div key={items.name} className="cart-product">
                <div
                  onClick={() => deleteFromCart(items)}
                  className="delete"
                  title="حذف من السلة"
                >
                  <img src="/icons/close.png" alt="حذف" />
                </div>
                <img src={items.image} alt={items.name} />
                <div className="cart-product-info">
                  <h4>{items.name}</h4>
                  <p className="cart-product-price">{items.price} ج.س</p>
                </div>
              </div>
            ))
          )}
        </div>

        {cartProducts.length > 0 && (
          <div className="cartBottomPar">
            <button
              className="order-whatsapp"
              onClick={handleWhatsappOrder}
              title="اطلب عبر واتساب"
            >
              <img src="/icons/whatsapp.png" alt="" />
              <span>اطلب عبر واتساب</span>
            </button>
            <button
              className="add-more"
              onClick={handleAddMore}
              title="إضافة مزيد من المنتجات"
            >
              <img src="/icons/add-to-cart.png" alt="" />
              <span className="more">أخرى</span>أضف
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
