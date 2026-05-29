import React, { useState } from "react";
import Cart from "./sections/Cart.jsx";
import Featured from "./sections/Featured.jsx";
import New from "./sections/New.jsx";
import OnePeice from "./sections/OnePeice.jsx";
import Products from "./pages/Products.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import Offers_And_Dicounts from "./sections/Offers_And_Discounts.jsx";
import About_Owner_Section from "./sections/About_Owner_Section.jsx";
import Footer from "./sections/Footer.jsx";
import "./index.css";
export const BackendURL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [cart, setCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <div>
      {cart && <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} setCart={setCart} />}
      <HeroSection setCart={setCart} />
      <Featured cartProducts={cartProducts} setCartProducts={setCartProducts} setCart={setCart} />
      <New setCart={setCart} cartProducts={cartProducts} setCartProducts={setCartProducts} />     

      <OnePeice setCart={setCart} cartProducts={cartProducts} setCartProducts={setCartProducts} />
      <Products setCart={setCart} cartProducts={cartProducts} setCartProducts={setCartProducts} />
      {/* Temporary stop for now */}
      {/* <Offers_And_Dicounts /> */}
      <About_Owner_Section />
      <Footer />
    </div>
  );
}

export default App;
