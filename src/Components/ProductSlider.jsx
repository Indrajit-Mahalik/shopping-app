import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useToast } from "../context/ToastContext";
import { products } from "../data/products";

// Select 6 highlighted products for the hero slider
const FEATURED_IDS = [1, 7, 3, 9, 10, 4];
const sliderProducts = products.filter((p) => FEATURED_IDS.includes(p.id));

function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const navigate = useNavigate();
  const { addItem, inCart, getItem, updateItemQuantity } = useCart();
  const { showToast } = useToast();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderProducts.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sliderProducts.length) % sliderProducts.length);
  }, []);

  // Smooth Autoplay (every 5.5s, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    if (inCart(product.id)) {
      updateItemQuantity(product.id, getItem(product.id).quantity + 1);
    } else {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        img: product.img,
      });
    }
    showToast(product);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const currentProduct = sliderProducts[currentIndex];

  return (
    <section
      className="hero_product_slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured Product Slider"
    >
      <div className="slider_stage_container">
        {sliderProducts.map((product, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={product.id}
              className={`slider_slide_item ${isActive ? "slide_active" : ""}`}
              aria-hidden={!isActive}
            >
              <div className="container">
                <div className="row align-items-center slider_content_row">
                  {/* Left Column: Product Info & Actions */}
                  <div className="col-lg-7 col-md-6 slider_text_col">
                    <div className="slider_badge">
                      <span className="badge_sparkle">✦</span>
                      <span>Featured Collection</span>
                    </div>

                    <h1
                      className="slider_product_title"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      {product.name}
                    </h1>

                    <p className="slider_product_desc">
                      {product.description ||
                        "Discover the finest craftsmanship, designed to add elegance and heartfelt emotion to every moment."}
                    </p>

                    <div className="slider_price_wrap">
                      <span className="slider_price_label">Special Price:</span>
                      <span className="slider_price_value">${product.price}</span>
                      <span className="slider_tag_deal">Free Shipping</span>
                    </div>

                    <div className="slider_btn_group">
                      <Link
                        to={`/product/${product.id}`}
                        className="slider_btn_primary"
                      >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        <span>Check Details</span>
                      </Link>

                      <button
                        type="button"
                        className="slider_btn_secondary"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Hero Product Showcase Image */}
                  <div className="col-lg-5 col-md-6 slider_img_col">
                    <div
                      className="slider_img_display_card"
                      onClick={() => navigate(`/product/${product.id}`)}
                      title={`View ${product.name} Details`}
                    >
                      <div className="slider_img_glow"></div>
                      <img
                        src={`/src/assets/images/${product.img}`}
                        alt={product.name}
                        className="slider_main_img"
                      />
                      <div className="slider_img_corner_tag">
                        <span>New Arrival</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        className="slider_nav_arrow arrow_prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </button>

      <button
        type="button"
        className="slider_nav_arrow arrow_next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>

      {/* Dots / Indicators */}
      <div className="slider_dots_wrapper">
        {sliderProducts.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`slider_dot_pill ${idx === currentIndex ? "dot_active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSlider;
