import React, { useEffect, useState, useRef } from "react";
import "./Featured.css";
import axios from "axios";
import { BackendURL } from "../App.jsx";
import { motion, AnimatePresence } from "framer-motion";

function Featured({ setCart, cartProducts, setCartProducts }) {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef(null);
  const isDraggingRef = useRef(false);
  const autoPlayTimerRef = useRef(null);

  const fetchFeatured = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${BackendURL}/api/products`);
      const featuredProducts = result.data.filter(
        (item) => item.type == "featured"
      );
      setFeatured(featuredProducts);
      setActiveIndex(0);
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

  // Circular navigation helper
  const getNextIndex = (current, direction = 1) => {
    if (featured.length === 0) return 0;
    return (current + direction + featured.length) % featured.length;
  };

  // Auto-play timer management
  const resetAutoPlayTimer = () => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }

    // Only start timer if not hovering and products exist
    if (!isHovering && featured.length > 1) {
      autoPlayTimerRef.current = setTimeout(() => {
        setActiveIndex((prev) => getNextIndex(prev, 1));
      }, 3500); // 3.5 seconds dwell time
    }
  };

  // Auto-play effect - starts when featured products load
  useEffect(() => {
    if (featured.length > 1 && !isHovering) {
      resetAutoPlayTimer();
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [activeIndex, featured.length, isHovering]);

  // Handle drag/swipe interactions
  const handleDragStart = (e) => {
    isDraggingRef.current = true;
    setDragStart(e.clientX || e.touches?.[0]?.clientX || 0);
  };

  const handleDragEnd = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const currentX = e.clientX || e.changedTouches?.[0]?.clientX || 0;
    const diff = dragStart - currentX;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left - next product (infinite loop)
        setActiveIndex(getNextIndex(activeIndex, 1));
      } else {
        // Swiped right - previous product (infinite loop)
        setActiveIndex(getNextIndex(activeIndex, -1));
      }
      // Reset auto-play timer after user interaction
      resetAutoPlayTimer();
    }
  };

  // Handle keyboard navigation (infinite loop)
  useEffect(() => {
    const handleKeyboard = (e) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex(getNextIndex(activeIndex, -1));
        resetAutoPlayTimer();
      } else if (e.key === "ArrowRight") {
        setActiveIndex(getNextIndex(activeIndex, 1));
        resetAutoPlayTimer();
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [activeIndex, featured.length]);

  // Get card visibility state
  const getCardState = (index) => {
    if (featured.length === 0) return "hidden";
    const diff = Math.min(
      Math.abs(index - activeIndex),
      featured.length - Math.abs(index - activeIndex)
    );
    if (diff <= 1) return "visible";
    return "hidden";
  };

  // Get card animation variants
  const cardVariants = {
    center: {
      scale: 1,
      opacity: 1,
      zIndex: 30,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
    left: {
      scale: 0.85,
      opacity: 0.6,
      zIndex: 10,
      x: "-80%",
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
    right: {
      scale: 0.85,
      opacity: 0.6,
      zIndex: 10,
      x: "80%",
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
    hidden: {
      scale: 0.8,
      opacity: 0,
      zIndex: 0,
      filter: "blur(4px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
  };

  // Determine animation variant based on position
  const getAnimationVariant = (index) => {
    if (featured.length === 0) return "hidden";

    // Calculate shortest distance in circular array
    let diff = index - activeIndex;
    if (Math.abs(diff) > featured.length / 2) {
      diff = diff > 0 ? diff - featured.length : diff + featured.length;
    }

    if (diff === 0) return "center";
    if (diff === -1 || diff === featured.length - 1) return "left";
    if (diff === 1 || diff === -(featured.length - 1)) return "right";
    return "hidden";
  };

  return (
    <div className="featured" id="featured">
      <div className="featured-first-row">
        <div className="featured-title">
          <h2>منتجات مميزة</h2>
          <h4>أفضل اختياراتنا ليك</h4>
        </div>
        
      </div>

      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {loading ? (
          <div className="carousel-loading">
            <div className="loading-feautred"></div>
            <div className="loading-feautred"></div>
            <div className="loading-feautred"></div>
          </div>
        ) : featured.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">⭐</div>
            <h2>لا توجد منتجات مميزة حالياً</h2>
            <p>نعمل على اختيار أفضل المنتجات لك</p>
            <p className="stay-tuned">تابعنا للحصول على أحدث الاختيارات</p>
          </div>
        ) : (
          <div className="carousel-viewport">
            <AnimatePresence mode="wait">
              {featured.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`featured-card ${
                    index === activeIndex ? "active" : ""
                  }`}
                  variants={cardVariants}
                  initial="hidden"
                  animate={getAnimationVariant(index)}
                  exit="hidden"
                  data-state={getCardState(index)}
                >
                  <div className="card-image-container">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="card-image"
                      initial={{ scale: 1.1 }}
                      animate={
                        index === activeIndex ? { scale: 1 } : { scale: 1 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                    {index === activeIndex && (
                      <div className="focus-indicator"></div>
                    )}
                  </div>

                  <motion.div
                    className="card-content"
                    initial={{ opacity: 0 }}
                    animate={index === activeIndex ? { opacity: 1 } : { opacity: 0.5 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h4 className="product-name">{item.name}</h4>

                    <div className="card-footer">
                      <h3 className="product-price">{item.price} ج.س</h3>
                      <motion.button
                        className="add-to-cart-btn"
                        onClick={() => {
                          addToCart(item.image, item.price, item.name);
                          setCart(true);
                        }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                      >
                        <img src="/icons/add-to-cart.png" alt="add to cart" />
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Carousel Navigation Dots */}
            {featured.length > 0 && (
              <div className="carousel-indicators">
                {featured.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`indicator-dot ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveIndex(index);
                      resetAutoPlayTimer();
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Navigation Arrows - Infinite Loop */}
            {featured.length > 1 && (
              <>
                <motion.button
                  className="carousel-nav-btn prev"
                  onClick={() => setActiveIndex(getNextIndex(activeIndex, -1))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous product"
                >
                  ◀
                </motion.button>
                <motion.button
                  className="carousel-nav-btn next"
                  onClick={() => setActiveIndex(getNextIndex(activeIndex, 1))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next product"
                >
                  ▶
                </motion.button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Featured;
