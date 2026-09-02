// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom"; 
// import { useCart } from "react-use-cart";
// import ReactImageMagnify from "react-image-magnify";
// import Header from "./Header";
// import Footer from "./Footer";

// const products = [
//   { id: 1, name: "Ring", price: 200, img: "p1.png", description: "A beautiful gold ring." },
//   { id: 2, name: "Watch", price: 300, img: "p2.png", description: "Stylish wristwatch." },
//   { id: 3, name: "Teddy Bear", price: 110, img: "p3.png", description: "Soft and cuddly teddy bear." },
//   { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png", description: "Fresh flower bouquet." },
//   { id: 5, name: "Teddy Bear", price: 95, img: "p5.png", description: "Cute little teddy bear." },
//   { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png", description: "A perfect gift for loved ones." },
//   { id: 7, name: "Watch", price: 400, img: "p7.png", description: "Premium watch with leather straps." },
//   { id: 8, name: "Ring", price: 450, img: "p8.png", description: "Diamond-studded ring." },
// ];

// function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate(); 
//   const [message, setMessage] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product);
//     setMessage("Item added to cart successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   const handleBuyNow = () => {
//     addItem(product); 
//     navigate("/checkout"); 
//   };

//   return (
//     <>
//       <Header />

//       <div className="product-details">
//         <div className="product-gallery">
//           <div className="thumbnail-gallery">
//             {[product.img, "p1.png", "p2.png", "p3.png", "p4.png"].map((img, index) => (
//               <img
//                 key={index}
//                 src={`/src/assets/images/${img}`}
//                 alt="Thumbnail"
//                 className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
//                 onClick={() => setSelectedImage(img)}
//               />
//             ))}
//           </div>
          
//           <div className="main-image">
//             <ReactImageMagnify
//               {...{
//                 smallImage: {
//                   alt: "Product",
//                   isFluidWidth: true,
//                   src: `/src/assets/images/${selectedImage || product.img}`,
//                 },
//                 largeImage: {
//                   src: `/src/assets/images/${selectedImage || product.img}`,
//                   width: 1400,
//                   height: 1600,
//                 },
//                 enlargedImageContainerDimensions: {
//                   width: "350%",
//                   height: "150%",
//                 },
//                 enlargedImageContainerStyle: {
//                   backgroundColor: "#f0f0f0", 
//                   borderRadius: "10px", 
//                   padding: "10px",
//                 },
//               }}
//             />
//           </div>
//         </div>

//         <div className="product-info">
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p className="special-price">Special Price: ${product.price}</p>
//           <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button> 
//           <button className="add-to-cart" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//           {message && <p className="success-message">{message}</p>}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default ProductDetails;



import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { useCart } from "react-use-cart";
import ReactImageMagnify from "react-image-magnify";
import Header from "./Header";
import Footer from "./Footer";

const products = [
  { id: 1, name: "Ring", price: 200, img: "p1.png", description: "A beautiful gold ring." },
  { id: 2, name: "Watch", price: 300, img: "p2.png", description: "Stylish wristwatch." },
  { id: 3, name: "Teddy Bear", price: 110, img: "p3.png", description: "Soft and cuddly teddy bear." },
  { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png", description: "Fresh flower bouquet." },
  { id: 5, name: "Teddy Bear", price: 95, img: "p5.png", description: "Cute little teddy bear." },
  { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png", description: "A perfect gift for loved ones." },
  { id: 7, name: "Watch", price: 400, img: "p7.png", description: "Premium watch with leather straps." },
  { id: 8, name: "Ring", price: 450, img: "p8.png", description: "Diamond-studded ring." },
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart(); // Access cart functions
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
    addItem(product); // Add product to cart
    setMessage("Item added to cart successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleBuyNow = () => {
    addItem(product); // Add product before checkout
    navigate("/checkout"); // Redirect to checkout
  };

  return (
    <>
      <Header /> {/* Header will show cart items in a slider */}

      <div className="product-details">
        <div className="product-gallery">
          <div className="thumbnail-gallery">
            {[product.img, "p1.png", "p2.png", "p3.png", "p4.png"].map((img, index) => (
              <img
                key={index}
                src={`/src/assets/images/${img}`}
                alt="Thumbnail"
                className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
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
          <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button> 
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {message && <p className="success-message">{message}</p>}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
