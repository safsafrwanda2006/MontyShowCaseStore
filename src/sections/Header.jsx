import React, { useState } from "react";
import "./Header.css";
import MobileMenu from "./MobileMenu.jsx";
import { APP_CONFIG } from "../config/constants.js";

function Header({ setCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsappClick = () => {
    try {
      window.open(
        `https://wa.me/${APP_CONFIG.PHONE_NUMBER}?text=${encodeURIComponent(APP_CONFIG.WHATSAPP_MESSAGE_PREFIX)}`,
        "_blank"
      );
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      alert("حدث خطأ في فتح واتساب");
    }
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <h2>
            Monty <span className="showcase">ShowCase</span>
          </h2>
        </div>
        <div className="nav-par">
          <a onClick={() => handleNavClick("products")} role="button">المنتجات</a>
          <a onClick={() => handleNavClick("featured")} role="button">المميزة</a>
          <a onClick={() => handleNavClick("new")} role="button">الجديد</a>
          <a onClick={() => handleNavClick("onepiece")} role="button">حبة واحدة</a>
        </div>
        <div className="header-btns">
          <button
            onClick={() => setCart(true)}
            className="cart-header"
            title="عرض السلة"
            aria-label="عرض السلة"
          >
            <img src="/icons/shopping-cart.png" alt="السلة" />
          </button>

          <button
            onClick={handleWhatsappClick}
            className="chat-header"
            title="تواصل عبر واتساب"
            aria-label="تواصل عبر واتساب"
          >
            <img src="/icons/whatsapp.png" alt="واتساب" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="menu-header"
            title="فتح القائمة"
            aria-label="فتح القائمة"
          >
            <img src="/icons/menu.png" alt="القائمة" />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default Header;
