import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import ReactImageMagnify from "react-image-magnify";
import Footer from "./Footer";
import { useToast } from "../context/ToastContext";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart(); // Access cart functions
  const { showToast } = useToast();
  const [selectedImage, setSelectedImage] = useState(null);
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
    addItem(product); // Add product to cart
    showToast(product); // Trigger modern bottom-right toast with 3s timer
  };

  const handleBuyNow = () => {
    addItem(product); // Add product before checkout
    navigate("/checkout"); // Redirect to checkout
  };

  return (
    <>
      <div className="product-details">
        <div className="product-gallery">
          <div className="thumbnail-gallery">
            {[product.img, "p1.png", "p2.png", "p3.png", "p4.png"].map(
              (img, index) => (
                <img
                  key={index}
                  src={`/src/assets/images/${img}`}
                  alt="Thumbnail"
                  className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
                  onClick={() => setSelectedImage(img)}
                />
              ),
            )}
          </div>

          <div className="main-image">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Product",
                  isFluidWidth: true,
                  src: `/src/assets/images/${selectedImage || product.img}`,
                },
                largeImage: {
                  src: `/src/assets/images/${selectedImage || product.img}`,
                  width: 1400,
                  height: 1600,
                },
                enlargedImageContainerDimensions: {
                  width: "350%",
                  height: "150%",
                },
                enlargedImageContainerStyle: {
                  backgroundColor: "#f0f0f0",
                  borderRadius: "10px",
                  padding: "10px",
                },
              }}
            />
          </div>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="special-price">Special Price: ${product.price}</p>
          <button className="buy-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;

