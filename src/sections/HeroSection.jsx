import React from "react";
import "./HeroSection.css";
import Header from "./Header.jsx";
import { APP_CONFIG } from "../config/constants.js";

function HeroSection({ setCart }) {
  const handleOrderClick = () => {
    try {
      const element = document.getElementById("products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error navigating to products:", error);
    }
  };

  const handleViewProductsClick = () => {
    try {
      const element = document.getElementById("products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error navigating to products:", error);
    }
  };

  const handleWhatsappClick = () => {
    try {
      window.open(
        `https://wa.me/${APP_CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(APP_CONFIG.WHATSAPP_MESSAGE_PREFIX)}`,
        "_blank"
      );
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
    }
  };

  return (
    <div className="Hero-section">
      <Header setCart={setCart} />
      <div className="hero-title">
        {" "}
        <h1>With Monty ShowCase</h1>
        <div className="style"></div>
      </div>

      <h2>Elevate Your Style with Premium Casual Fashion</h2>

      <div className="hero-btns">
        <button onClick={handleOrderClick} className="primary-btn">
          اطلب الآن
        </button>
        <button
          onClick={handleViewProductsClick}
          className="secondary-btn"
        >
          <span className="view">عرض</span> المنتجات
        </button>
      </div>
      <button
        onClick={handleWhatsappClick}
        className="whatsapp-fixed-btn"
        title="تواصل عبر واتساب"
        aria-label="تواصل عبر واتساب"
      >
        <img src="/icons/whatsapp.png" alt="واتساب" />
      </button>
    </div>
  );
}

export default HeroSection;
