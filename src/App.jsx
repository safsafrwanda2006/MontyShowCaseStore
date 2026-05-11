import React from "react";
import Products from "./pages/Products.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import Offers_And_Dicounts from "./sections/Offers_And_Discounts.jsx";
import About_Owner_Section from "./sections/About_Owner_Section.jsx";
import Footer from "./sections/Footer.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <HeroSection />
      <Products />
      <Offers_And_Dicounts />
      <About_Owner_Section />
      <Footer />
    </div>
  );
}

export default App;
