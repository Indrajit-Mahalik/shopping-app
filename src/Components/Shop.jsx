import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useToast } from "../context/ToastContext";
import { products } from "../data/products";

// Configuration for pagination/loading
const INITIAL_COUNT = 8; // Initially show 8 products
const PRODUCTS_PER_LOAD = 4; // Number of additional products to load on each click

function Shop() {
  const { addItem, inCart, getItem, updateItemQuantity } = useCart();
  const { showToast } = useToast();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleAdd = (product) => {
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

    // Trigger modern bottom-right toast notification with 3s timer
    showToast(product);
  };

  const handleToggleProducts = () => {
    if (visibleCount >= products.length) {
      setVisibleCount(INITIAL_COUNT);
      const shopSection = document.querySelector(".shop_section");
      if (shopSection) {
        shopSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setVisibleCount((prev) =>
        Math.min(prev + PRODUCTS_PER_LOAD, products.length),
      );
    }
  };

  return (
    <section className="shop_section layout_padding" id="shop">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>

        <div className="row">
          {products.slice(0, visibleCount).map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="box">
                <Link to={`/product/${product.id}`}>
                  <div className="img-box">
                    <img
                      src={`/src/assets/images/${product.img}`}
                      alt={product.name}
                    />
                  </div>
                  <div className="detail-box">
                    <h6>{product.name}</h6>
                    <h6>
                      Price: <span>${product.price}</span>
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </Link>
                <button className="shop-btn" onClick={() => handleAdd(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="btn-box">
          <button
            type="button"
            className="more-btn"
            onClick={handleToggleProducts}
          >
            {visibleCount >= products.length
              ? "Show Less"
              : "Load More Products"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Shop;

