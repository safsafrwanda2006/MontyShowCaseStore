import React from "react";
import "./MobileMenu.css";

function MobileMenu({ isOpen, onClose }) {
  const handleNavClick = (sectionId) => {
    onClose();
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={onClose}></div>
      )}

      {/* Menu */}
      <nav className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <h3>القائمة</h3>
          <button className="mobile-menu-close" onClick={onClose}>
            <img src="/icons/close.png" alt="إغلاق" />
          </button>
        </div>

        <ul className="mobile-menu-items">
          <li>
            <a onClick={() => handleNavClick("products")}>المنتجات</a>
          </li>
          <li>
            <a onClick={() => handleNavClick("featured")}>المميزة</a>
          </li>
          <li>
            <a onClick={() => handleNavClick("new")}>الجديد</a>
          </li>
          <li>
            <a onClick={() => handleNavClick("onepiece")}>حبة واحدة</a>
          </li>
        </ul>

        <div className="mobile-menu-footer">
          <a
            href="https://wa.me/249110683002"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-whatsapp"
          >
            <img src="/icons/whatsapp.png" alt="واتساب" />
            تواصل معنا
          </a>
        </div>
      </nav>
    </>
  );
}

export default MobileMenu;
