
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

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
//   const [cart, setCart] = useState([]);  // Cart state
//   const [message, setMessage] = useState(""); // Success message state
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     setCart([...cart, product]); // Add product to cart
//     setMessage("Item added to cart successfully!"); // Show success message

//     setTimeout(() => setMessage(""), 3000); // Hide message after 3s
//   };

//   return (
//     <div className="product-details">
//       <img src={`/src/assets/images/${product.img}`} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//       {message && <p className="success-message">{message}</p>}
//     </div>
//   );
// }

// export default ProductDetails;



// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";

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
//   const { addItem } = useCart(); // Using react-use-cart's addItem function
//   const [message, setMessage] = useState(""); // Success message state
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product); // Add product to global cart
//     setMessage("Item added to cart successfully!"); // Show success message

//     setTimeout(() => setMessage(""), 3000); // Hide message after 3s
//   };

//   return (
//     <div className="product-details">
//       <img src={`/src/assets/images/${product.img}`} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//       {message && <p className="success-message">{message}</p>}
//     </div>
//   );
// }

// export default ProductDetails;



// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";

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
//   const { addItem } = useCart();
//   const [message, setMessage] = useState("");
//   const product = products.find((item) => item.id === parseInt(id));
//   const [mainImage, setMainImage] = useState(product?.img);
//   const [zoomImage, setZoomImage] = useState(null);

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product);
//     setMessage("Item added to cart successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.target.getBoundingClientRect();
//     const x = ((e.pageX - left) / width) * 100;
//     const y = ((e.pageY - top) / height) * 100;
//     setZoomImage({ url: mainImage, x, y });
//   };

//   const handleMouseLeave = () => {
//     setZoomImage(null);
//   };

//   return (
//     <div className="product-details">
//       <div className="product-gallery">
//         <img
//           src={`/src/assets/images/${mainImage}`}
//           alt="Product"
//           className="main-image"
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         />
//         <div className="thumbnail-container">
//           {product.images.map((img, index) => (
//             <img
//               key={index}
//               src={`/src/assets/images/${img}`}
//               alt="Thumbnail"
//               className="thumbnail"
//               onMouseEnter={() => setMainImage(img)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="product-info">
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//         <button className="buy-btn">Buy</button>
//         <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//         {message && <p className="success-message">{message}</p>}
//       </div>
//       {zoomImage && (
//         <div
//           className="zoom-box"
//           style={{
//             backgroundImage: `url(/src/assets/images/${zoomImage.url})`,
//             backgroundPosition: `${zoomImage.x}% ${zoomImage.y}%`,
//           }}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default ProductDetails;



// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";

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
//   const { addItem } = useCart();
//   const [message, setMessage] = useState("");
//   const product = products.find((item) => item.id === parseInt(id));
//   const [mainImage, setMainImage] = useState(product?.img);
//   const [zoomImage, setZoomImage] = useState(null);

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product);
//     setMessage("Item added to cart successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.target.getBoundingClientRect();
//     const x = ((e.pageX - left) / width) * 100;
//     const y = ((e.pageY - top) / height) * 100;
//     setZoomImage({ url: mainImage, x, y });
//   };

//   const handleMouseLeave = () => {
//     setZoomImage(null);
//   };

//   return (
//     <div className="product-details">
//       <div className="product-gallery">
//         <img
//           src={`/src/assets/images/${mainImage}`}
//           alt="Product"
//           className="main-image"
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         />
//         <div className="thumbnail-container">
//           {(product.images || [product.img]).map((img, index) => (
//             <img
//               key={index}
//               src={`/src/assets/images/${img}`}
//               alt="Thumbnail"
//               className="thumbnail"
//               onMouseEnter={() => setMainImage(img)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="product-info">
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//         <button className="buy-btn">Buy</button>
//         <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//         {message && <p className="success-message">{message}</p>}
//       </div>
//       {zoomImage && (
//         <div
//           className="zoom-box"
//           style={{
//             backgroundImage: `url(/src/assets/images/${zoomImage.url})`,
//             backgroundPosition: `${zoomImage.x}% ${zoomImage.y}%`,
//           }}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default ProductDetails;




// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";

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
//   const { addItem } = useCart();
//   const [message, setMessage] = useState("");
//   const product = products.find((item) => item.id === parseInt(id));
//   const [mainImage, setMainImage] = useState(product?.img);
//   const [zoomImage, setZoomImage] = useState(null);

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product);
//     setMessage("Item added to cart successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.target.getBoundingClientRect();
//     const x = ((e.pageX - left) / width) * 100;
//     const y = ((e.pageY - top) / height) * 100;
//     setZoomImage({ url: mainImage, x, y });
//   };

//   const handleMouseLeave = () => {
//     setZoomImage(null);
//   };

//   return (
//     <div className="product-details" style={{ display: "flex", gap: "20px" }}>
//       <div className="product-gallery" style={{ flex: "1" }}>
//         <img
//           src={`/src/assets/images/${mainImage}`}
//           alt="Product"
//           className="main-image"
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         />
//         <div className="thumbnail-container">
//           {(product.images ? product.images : [product.img]).map((img, index) => (
//             <img
//               key={index}
//               src={`/src/assets/images/${img}`}
//               alt="Thumbnail"
//               className="thumbnail"
//               onMouseEnter={() => setMainImage(img)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="product-info" style={{ flex: "1" }}>
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//         <button className="buy-btn">Buy</button>
//         <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//         {message && <p className="success-message">{message}</p>}
//       </div>
//       {zoomImage && (
//         <div
//           className="zoom-box"
//           style={{
//             backgroundImage: `url(/src/assets/images/${zoomImage.url})`,
//             backgroundPosition: `${zoomImage.x}% ${zoomImage.y}%`,
//           }}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default ProductDetails;

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";

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
//   const { addItem } = useCart();
//   const [message, setMessage] = useState("");
//   const product = products.find((item) => item.id === parseInt(id));
//   const [mainImage, setMainImage] = useState(product?.img);

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product);
//     setMessage("Item added to cart successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   return (
//     <div className="product-details" style={{ display: "flex", gap: "20px" }}>
//       <div className="product-gallery" style={{ flex: "1" }}>
//         <img
//           src={`/src/assets/images/${mainImage}`}
//           alt="Product"
//           className="main-image"
//         />
//         <div className="thumbnail-container">
//           {(product.images ? product.images : [product.img]).map((img, index) => (
//             <img
//               key={index}
//               src={`/src/assets/images/${img}`}
//               alt="Thumbnail"
//               className="thumbnail"
//               onMouseEnter={() => setMainImage(img)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="product-info" style={{ flex: "1" }}>
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//         <button className="buy-btn">Buy</button>
//         <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//         {message && <p className="success-message">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;




// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";

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
//   const { addItem } = useCart();
//   const [message, setMessage] = useState("");
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product);
//     setMessage("Item added to cart successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   return (
//     <div className="product-details" style={{ display: "flex", gap: "20px" }}>
//       <div className="product-gallery" style={{ flex: "1" }}>
//         <img
//           src={`/src/assets/images/${product.img}`}
//           alt="Product"
//           className="main-image"
//         />
//       </div>
//       <div className="product-info" style={{ flex: "1" }}>
//         <h2>{product.name}</h2>
//         <p>{product.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta tenetur numquam mollitia iusto ipsum, distinctio animi libero ullam dolor soluta.</p>
//         <p>Price: ${product.price}</p>
//         <button className="buy-btn">Buy</button>
//         <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//         {message && <p className="success-message">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;



// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";

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
//   const { addItem } = useCart();
//   const [message, setMessage] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product);
//     setMessage("Item added to cart successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   return (
//     <div className="product-details" style={{ display: "flex", gap: "20px", padding: "20px" }}>
//       <div className="product-gallery" style={{ flex: "1" }}>
//         <img
//           src={`/src/assets/images/${selectedImage || product.img}`}
//           alt="Product"
//           className="main-image"
//           style={{ width: "40%", height: "auto", borderRadius: "5px" }}
//         />
//         <div className="thumbnail-gallery" style={{ display: "flex", marginTop: "10px", gap: "10px" }}>
//           {[product.img, "p1.png", "p2.png", "p3.png", "p4.png"].map((img, index) => (
//             <img
//               key={index}
//               src={`/src/assets/images/${img}`}
//               alt="Thumbnail"
//               style={{ width: "50px", height: "50px", cursor: "pointer", border: selectedImage === img ? "2px solid blue" : "none" }}
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="product-info" style={{ flex: "1", padding: "10px" }}>
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p style={{ fontSize: "18px", fontWeight: "bold", color: "green" }}>Special Price: ${product.price}</p>
//         <button className="buy-btn" style={{ backgroundColor: "orange", padding: "10px", borderRadius: "5px", marginRight: "10px" }}>Buy Now</button>
//         <button className="add-to-cart" style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px" }} onClick={handleAddToCart}>Add to Cart</button>
//         {message && <p className="success-message" style={{ color: "green", marginTop: "10px" }}>{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;



// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";


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
//   const { addItem } = useCart();
//   const [message, setMessage] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product);
//     setMessage("Item added to cart successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   return (
//     <div className="product-details">
//       <div className="product-gallery">
//         <img
//           src={`/src/assets/images/${selectedImage || product.img}`}
//           alt="Product"
//           className="main-image"
//         />
//         <div className="thumbnail-gallery">
//           {[product.img, product.img].map((img, index) => (
//             <img
//               key={index}
//               src={`/src/assets/images/${img}`}
//               alt="Thumbnail"
//               className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="product-info">
//         <h2>{product.name} </h2>
//         <p>{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus maiores, blanditiis tenetur dolores culpa rerum quibusdam magni veniam nulla a incidunt praesentium! Quis sit illo numquam dicta velit blanditiis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsum eos alias dignissimos aperiam provident architecto obcaecati omnis, cupiditate adipisci at harum sapiente tempore quidem reprehenderit ratione in veritatis nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit aliquid dolores beatae. Rem aliquam id, velit et numquam enim fuga temporibus, dolor laudantium placeat cupiditate quas nihil officia tempore.</p>
//         <p className="special-price">Special Price: $  {product.price}</p>
//         <button className="buy-btn">Buy Now</button>
//         <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//         {message && <p className="success-message">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;






// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "react-use-cart";
// import ReactImageMagnify from "react-image-magnify";

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
//   const { addItem } = useCart();
//   const [message, setMessage] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <h2>Product not found</h2>;

//   const handleAddToCart = () => {
//     addItem(product);
//     setMessage("Item added to cart successfully!");
//     setTimeout(() => setMessage(""), 3000);
//   };

//   return (
//     <div className="product-details">
//       <div className="product-gallery">
//         <ReactImageMagnify
//           {...{
//             smallImage: {
//               alt: "Product",
//               src: `/src/assets/images/${selectedImage || product.img}`,
//               width: 300,
//               height: 300
//             },
//             largeImage: {
//               src: `/src/assets/images/${selectedImage || product.img}`,
//               width: 1200,
//               height: 1200
//             },
//             enlargedImagePosition: "over",
//           }}
//         />
//         <div className="thumbnail-gallery">
//           {[product.img, "p1.png", "p2.png", "p3.png", "p4.png"].map((img, index) => (
//             <img
//               key={index}
//               src={`/src/assets/images/${img}`}
//               alt="Thumbnail"
//               className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="product-info">
//         <h2>{product.name} </h2>
//         <p>{product.description}</p>
//         <p className="special-price">Special Price: $ {product.price}</p>
//         <button className="buy-btn">Buy Now</button>
//         <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//         {message && <p className="success-message">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;







 {/* <div className="product-details">
      <div className="product-gallery">
        
        <div className="cls">
        <ReactImageMagnify className="prp-img"
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
             
          }}
        />
        </div>
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
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="special-price">Special Price: ${product.price}</p>
        <button className="buy-btn">Buy Now</button>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {message && <p className="success-message">{message}</p>}
      </div>
    </div> */}




          // import React, { useState } from "react";
      // import { useParams } from "react-router-dom";
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
      //   const { addItem } = useCart();
      //   const [message, setMessage] = useState("");
      //   const [selectedImage, setSelectedImage] = useState(null);
      //   const product = products.find((item) => item.id === parseInt(id));

      //   if (!product) return <h2>Product not found</h2>;

      //   const handleAddToCart = () => {
      //     addItem(product);
      //     setMessage("Item added to cart successfully!");
      //     setTimeout(() => setMessage(""), 3000);
      //   };

      //   return (
      //       <>

      //       <Header />
            

      // <div className="product-details">
      //   <div className="product-gallery">
      //     <div className="thumbnail-gallery">
      //       {[product.img, "p1.png", "p2.png", "p3.png", "p4.png"].map((img, index) => (
      //         <img
      //           key={index}
      //           src={`/src/assets/images/${img}`}
      //           alt="Thumbnail"
      //           className={`thumbnail ${selectedImage === img ? "selected" : ""}`}
      //           onClick={() => setSelectedImage(img)}
      //         />
      //       ))}
      //     </div>
          
      //     <div className="main-image">
      //       <ReactImageMagnify
      //         {...{
      //           smallImage: {
      //             alt: "Product",
      //             isFluidWidth: true,
      //             src: `/src/assets/images/${selectedImage || product.img}`,
      //           },
      //           largeImage: {
      //             src: `/src/assets/images/${selectedImage || product.img}`,
      //             width: 1400,
      //             height: 1600,
      //           },
      //           enlargedImageContainerDimensions: {
      //             width: "350%",
      //             height: "150%",
      //           },
      //           enlargedImageContainerStyle: {
      //             backgroundColor: "#f0f0f0", 
      //             borderRadius: "10px", 
      //             padding: "10px",
      //           },
      //         }}
      //       />
      //     </div>
      //   </div>

      //   <div className="product-info">
      //     <h2>{product.name}</h2>
      //     <p>{product.description}</p>
      //     <p className="special-price">Special Price: ${product.price}</p>
      //     <button className="buy-btn">Buy Now</button>
      //     <button className="add-to-cart" onClick={handleAddToCart}>
      //       Add to Cart
      //     </button>
      //     {message && <p className="success-message">{message}</p>}
      //   </div>
      // </div>










      //     <Footer />
      //       </>
      //   );
      // }

      // export default ProductDetails;