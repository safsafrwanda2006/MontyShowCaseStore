import React from "react";
import Products from "./pages/Products.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import Offers_And_Dicounts from "./sections/Offers_And_Discounts.jsx";

function App() {
  return (
    <div className="container">
      <HeroSection />
      <Products />
      <Offers_And_Dicounts />
    </div>
  );
}

export default App;
