


// import React, { useState } from "react";

// function Shop({ handleAddToCart }) {
//   // State to track the quantities for each product
//   const [quantities, setQuantities] = useState({
//     1: 1,
//     2: 1,
//     3: 1,
//     4: 1,
//     5: 1,
//     6: 1,
//     7: 1,
//     8: 1,
//   });

  
//   const increaseQuantity = (productId) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: prevQuantities[productId] + 1,
//     }));
//   };

  
//   const decreaseQuantity = (productId) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: Math.max(1, prevQuantities[productId] - 1), 
//     }));
//   };

//   return (
//     <>
//       <section className="shop_section layout_padding">
//         <div className="container">
//           <div className="heading_container heading_center">
//             <h2>Latest Products</h2>
//           </div>
//           <div className="row">
//             {[
//               { id: 1, name: "Ring", price: 200, img: "src/assets/images/p1.png" },
//               { id: 2, name: "Watch", price: 300, img: "src/assets/images/p2.png" },
//               { id: 3, name: "Teddy Bear", price: 110, img: "src/assets/images/p3.png" },
//               { id: 4, name: "Flower Bouquet", price: 45, img: "src/assets/images/p4.png" },
//               { id: 5, name: "Teddy Bear", price: 95, img: "src/assets/images/p5.png" },
//               { id: 6, name: "Flower Bouquet", price: 70, img: "src/assets/images/p6.png" },
//               { id: 7, name: "Watch", price: 400, img: "src/assets/images/p7.png" },
//               { id: 8, name: "Ring", price: 450, img: "src/assets/images/p8.png" },
//             ].map((product) => (
//               <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
//                 <div className="box">
//                   <a href="#">
//                     <div className="img-box">
//                       <img src={product.img} alt={product.name} />
//                     </div>
//                     <div className="detail-box">
//                       <h6>{product.name}</h6>
//                       <h6>
//                         Price: <span>${product.price}</span>
//                       </h6>
//                     </div>
//                     <div className="new">
//                       <span>New</span>
//                     </div>
//                   </a>

                  
//                   <div className="cart-info">
                    
//                     {/* <p>Total: ${quantities[product.id] * product.price}</p> */}
//                     <div className="quantity-controls">
//                       <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                       <p className="quantity"> {quantities[product.id]}</p>
//                       <button onClick={() => increaseQuantity(product.id)}>+</button>
//                     </div>
//                   </div>

                  
//                   <button
//                     className="shop-btn"
//                     onClick={() => handleAddToCart(product.id, product.name, product.price, quantities[product.id])}
//                   >
//                     Add To Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="btn-box">
//             <a href="#">View All Products</a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Shop;


// Success sms 

// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Shop() {
//   const { addItem } = useCart();
//   const [quantities, setQuantities] = useState({
//     1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1,
//   });
//   const [successMessage, setSuccessMessage] = useState({});

//   const increaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
//   };

//   const decreaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: Math.max(1, prev[productId] - 1) }));
//   };

//   const handleAdd = (product) => {
//     addItem({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       quantity: quantities[product.id],
//       img: product.img,
//     });

//     // Show success message for the specific product
//     setSuccessMessage((prev) => ({ ...prev, [product.id]: true }));

//     // Hide success message after 3 seconds
//     setTimeout(() => {
//       setSuccessMessage((prev) => ({ ...prev, [product.id]: false }));
//     }, 3000);
//   };

//   return (
//     <section className="shop_section layout_padding">
//       <div className="container">
//         <div className="heading_container heading_center">
//           <h2>Latest Products</h2>
//         </div>
//         <div className="row">
//           {[
//             { id: 1, name: "Ring", price: 200, img: "p1.png" },
//             { id: 2, name: "Watch", price: 300, img: "p2.png" },
//             { id: 3, name: "Teddy Bear", price: 110, img: "p3.png" },
//             { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png" },
//             { id: 5, name: "Teddy Bear", price: 95, img: "p5.png" },
//             { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png" },
//             { id: 7, name: "Watch", price: 400, img: "p7.png" },
//             { id: 8, name: "Ring", price: 450, img: "p8.png" },
//           ].map((product) => (
//             <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
//               <div className="box">
//                 <a href="#">
//                   <div className="img-box">
//                     <img src={`src/assets/images/${product.img}`} alt={product.name} />
//                   </div>
//                   <div className="detail-box">
//                     <h6>{product.name}</h6>
//                     <h6>Price: <span>${product.price}</span></h6>
//                   </div>
//                   <div className="new">
//                     <span>New</span>
//                   </div>
//                 </a>
//                 <div className="cart-info">
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                     <p className="quantity">{quantities[product.id]}</p>
//                     <button onClick={() => increaseQuantity(product.id)}>+</button>
//                   </div>
//                 </div>
//                 {/* Add to Cart Button with Success Message */}
//                 <button 
//                   className="shop-btn" 
//                   onClick={() => handleAdd(product)}
//                   disabled={successMessage[product.id]} // Disable button when showing success message
//                 >
//                   {successMessage[product.id] ? "Added!" : "Add To Cart"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="btn-box">
//           <a href="#">View All Products</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Shop;




// edited 


// import React, { useState } from "react";

// function Shop({ handleAddToCart }) {
//   const [quantities, setQuantities] = useState({
//     1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1,
//   });

//   const [successMessage, setSuccessMessage] = useState({}); // Success message state

//   const increaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
//   };

//   const decreaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: Math.max(1, prev[productId] - 1) }));
//   };

//   const handleAdd = (productId, name, price) => {
//     handleAddToCart(productId, name, price, quantities[productId]);

//     // Show success message
//     setSuccessMessage((prev) => ({ ...prev, [productId]: true }));

//     // Hide message after 3 seconds
//     setTimeout(() => {
//       setSuccessMessage((prev) => ({ ...prev, [productId]: false }));
//     }, 3000);
//   };

//   return (
//     <section className="shop_section layout_padding">
//       <div className="container">
//         <div className="heading_container heading_center">
//           <h2>Latest Products</h2>
//         </div>
//         <div className="row">
//           {[
//             { id: 1, name: "Ring", price: 200, img: "src/assets/images/p1.png" },
//             { id: 2, name: "Watch", price: 300, img: "src/assets/images/p2.png" },
//             { id: 3, name: "Teddy Bear", price: 110, img: "src/assets/images/p3.png" },
//             { id: 4, name: "Flower Bouquet", price: 45, img: "src/assets/images/p4.png" },
//             { id: 5, name: "Teddy Bear", price: 95, img: "src/assets/images/p5.png" },
//             { id: 6, name: "Flower Bouquet", price: 70, img: "src/assets/images/p6.png" },
//             { id: 7, name: "Watch", price: 400, img: "src/assets/images/p7.png" },
//             { id: 8, name: "Ring", price: 450, img: "src/assets/images/p8.png" },
//           ].map((product) => (
//             <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
//               <div className="box">
//                 <a href="#">
//                   <div className="img-box">
//                     <img src={product.img} alt={product.name} />
//                   </div>
//                   <div className="detail-box">
//                     <h6>{product.name}</h6>
//                     <h6>Price: <span>${product.price}</span></h6>
//                   </div>
//                   <div className="new">
//                     <span>New</span>
//                   </div>
//                 </a>

//                 <div className="cart-info">
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                     <p className="quantity">{quantities[product.id]}</p>
//                     <button onClick={() => increaseQuantity(product.id)}>+</button>
//                   </div>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button className="shop-btn" onClick={() => handleAdd(product.id, product.name, product.price)}>
//                   Add To Cart
//                 </button>

//                 {/* Success Message */}
//                 {successMessage[product.id] && (
//                   <p style={{ color: "green", marginTop: "5px", fontSize: "14px" }}>
//                     Added to Cart ✅
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="btn-box">
//           <a href="#">View All Products</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Shop;



// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Shop() {
//   const { addItem } = useCart();
//   const [quantities, setQuantities] = useState({
//     1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1,
//   });



//   const increaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
//   };

//   const decreaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: Math.max(1, prev[productId] - 1) }));
//   };

  

//   const handleAdd = (product) => {
//     addItem({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       quantity: quantities[product.id],
//       img: product.img,
//     });

    
//   };

//   return (
//     <section className="shop_section layout_padding">
//       <div className="container">
//         <div className="heading_container heading_center">
//           <h2>Latest Products</h2>
//         </div>
//         <div className="row">
//           {[
//             { id: 1, name: "Ring", price: 200, img: "p1.png" },
//             { id: 2, name: "Watch", price: 300, img: "p2.png" },
//             { id: 3, name: "Teddy Bear", price: 110, img: "p3.png" },
//             { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png" },
//             { id: 5, name: "Teddy Bear", price: 95, img: "p5.png" },
//             { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png" },
//             { id: 7, name: "Watch", price: 400, img: "p7.png" },
//             { id: 8, name: "Ring", price: 450, img: "p8.png" },
//           ].map((product) => (
//             <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
//               <div className="box">
//                 <a href="#">
//                   <div className="img-box">
//                     <img src={`src/assets/images/${product.img}`} alt={product.name} />
//                   </div>
//                   <div className="detail-box">
//                     <h6>{product.name}</h6>
//                     <h6>Price: <span>${product.price}</span></h6>
//                   </div>
//                   <div className="new">
//                     <span>New</span>
//                   </div>
//                 </a>
//                 <div className="cart-info">
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                     <p className="quantity">{quantities[product.id]}</p>
//                     <button onClick={() => increaseQuantity(product.id)}>+</button>
//                   </div>
//                 </div>
//                 <button className="shop-btn" onClick={() => handleAdd(product)}>Add To Cart</button>

                
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="btn-box">
//           <a href="#">View All Products</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Shop;



// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Shop() {
//   const { addItem } = useCart();
//   const [quantities, setQuantities] = useState({
//     1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1,
//   });
//   const [successMessage, setSuccessMessage] = useState({});

//   const increaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
//   };

//   const decreaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: Math.max(1, prev[productId] - 1) }));
//   };

//   const handleAdd = (product) => {
//     addItem({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       quantity: quantities[product.id],
//       img: product.img,
//     });

//     // Show success message for the specific product
//     setSuccessMessage((prev) => ({ ...prev, [product.id]: true }));

//     // Hide success message after 3 seconds
//     setTimeout(() => {
//       setSuccessMessage((prev) => ({ ...prev, [product.id]: false }));
//     }, 3000);
//   };

//   return (
//     <section className="shop_section layout_padding">
//       <div className="container">
//         <div className="heading_container heading_center">
//           <h2>Latest Products</h2>
//         </div>
//         <div className="row">
//           {[
//             { id: 1, name: "Ring", price: 200, img: "p1.png" },
//             { id: 2, name: "Watch", price: 300, img: "p2.png" },
//             { id: 3, name: "Teddy Bear", price: 110, img: "p3.png" },
//             { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png" },
//             { id: 5, name: "Teddy Bear", price: 95, img: "p5.png" },
//             { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png" },
//             { id: 7, name: "Watch", price: 400, img: "p7.png" },
//             { id: 8, name: "Ring", price: 450, img: "p8.png" },
//           ].map((product) => (
//             <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
//               <div className="box">
//                 <a href="#">
//                   <div className="img-box">
//                     <img src={`src/assets/images/${product.img}`} alt={product.name} />
//                   </div>
//                   <div className="detail-box">
//                     <h6>{product.name}</h6>
//                     <h6>Price: <span>${product.price}</span></h6>
//                   </div>
//                   <div className="new">
//                     <span>New</span>
//                   </div>
//                 </a>
//                 <div className="cart-info">
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                     <p className="quantity">{quantities[product.id]}</p>
//                     <button onClick={() => increaseQuantity(product.id)}>+</button>
//                   </div>
//                 </div>
//                 {/* Add to Cart Button */}
//                 <button className="shop-btn" onClick={() => handleAdd(product)}>Add To Cart</button>

//                 {/* Success Message Below the Button */}
//                 {successMessage[product.id] && (
//                   <p style={{ color: "green", marginTop: "5px", fontSize: "14px" }}>
//                     ✅ Added to Cart!
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="btn-box">
//           <a href="#">View All Products</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Shop;


// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Shop() {
//   const { addItem, updateItemQuantity, inCart, getItem } = useCart();
//   const [quantities, setQuantities] = useState({
//     1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1,
//   });
//   const [successMessage, setSuccessMessage] = useState({});

//   const increaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
//   };

//   const decreaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: Math.max(1, prev[productId] - 1) }));
//   };

//   const handleAdd = (product) => {
//     const selectedQuantity = quantities[product.id];

//     if (inCart(product.id)) {
//       // If item already exists, update quantity by adding the new selected amount
//       const currentQuantity = getItem(product.id)?.quantity || 0;
//       updateItemQuantity(product.id, currentQuantity + selectedQuantity);
//     } else {
//       // If item does not exist, add it with the selected quantity
//       addItem({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: selectedQuantity,
//         img: product.img,
//       });
//     }

//     // Show success message for the specific product
//     setSuccessMessage((prev) => ({ ...prev, [product.id]: selectedQuantity }));

//     // Hide success message after 3 seconds
//     setTimeout(() => {
//       setSuccessMessage((prev) => ({ ...prev, [product.id]: false }));
//     }, 3000);
//   };

//   return (
//     <section className="shop_section layout_padding">
//       <div className="container">
//         <div className="heading_container heading_center">
//           <h2>Latest Products</h2>
//         </div>
//         <div className="row">
//           {[
//             { id: 1, name: "Ring", price: 200, img: "p1.png" },
//             { id: 2, name: "Watch", price: 300, img: "p2.png" },
//             { id: 3, name: "Teddy Bear", price: 110, img: "p3.png" },
//             { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png" },
//             { id: 5, name: "Teddy Bear", price: 95, img: "p5.png" },
//             { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png" },
//             { id: 7, name: "Watch", price: 400, img: "p7.png" },
//             { id: 8, name: "Ring", price: 450, img: "p8.png" },
//           ].map((product) => (
//             <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
//               <div className="box">
//                 <a href="#">
//                   <div className="img-box">
//                     <img src={`src/assets/images/${product.img}`} alt={product.name} />
//                   </div>
//                   <div className="detail-box">
//                     <h6>{product.name}</h6>
//                     <h6>Price: <span>${product.price}</span></h6>
//                   </div>
//                   <div className="new">
//                     <span>New</span>
//                   </div>
//                 </a>
//                 <div className="cart-info">
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                     <p className="quantity">{quantities[product.id]}</p>
//                     <button onClick={() => increaseQuantity(product.id)}>+</button>
//                   </div>
//                 </div>
//                 {/* Add to Cart Button */}
//                 <button className="shop-btn" onClick={() => handleAdd(product)}>Add To Cart</button>

//                 {/* Success Message Below the Button */}
//                 {successMessage[product.id] && (
//                   <p style={{ color: "green", marginTop: "5px", fontSize: "14px" }}>
//                     ✅ Added {successMessage[product.id]} to Cart!
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="btn-box">
//           <a href="#">View All Products</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Shop;






// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Shop() {
//   const { addItem, updateItemQuantity, inCart, getItem } = useCart();
//   const [quantities, setQuantities] = useState({
//     1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1,
//   });
//   const [successMessage, setSuccessMessage] = useState({});

//   const increaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
//   };

//   const decreaseQuantity = (productId) => {
//     setQuantities((prev) => ({ ...prev, [productId]: Math.max(1, prev[productId] - 1) }));
//   };

//   const handleAdd = (product) => {
//     const selectedQuantity = quantities[product.id];
    
//     if (inCart(product.id)) {
//       updateItemQuantity(product.id, getItem(product.id).quantity + selectedQuantity);
//     } else {
//       addItem({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: selectedQuantity,
//         img: product.img,
//       });
//     }

//     setSuccessMessage((prev) => ({ ...prev, [product.id]: selectedQuantity }));
//     setTimeout(() => {
//       setSuccessMessage((prev) => ({ ...prev, [product.id]: false }));
//     }, 3000);
//   };

//   return (
//     <section className="shop_section layout_padding">
//       <div className="container">
//         <div className="heading_container heading_center">
//           <h2>Latest Products</h2>
//         </div>
//         <div className="row">
//           {[{ id: 1, name: "Ring", price: 200, img: "p1.png" },
//             { id: 2, name: "Watch", price: 300, img: "p2.png" },
//             { id: 3, name: "Teddy Bear", price: 110, img: "p3.png" },
//             { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png" },
//             { id: 5, name: "Teddy Bear", price: 95, img: "p5.png" },
//             { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png" },
//             { id: 7, name: "Watch", price: 400, img: "p7.png" },
//             { id: 8, name: "Ring", price: 450, img: "p8.png" },
//           ].map((product) => (
//             <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
//               <div className="box">
//                 <a href="#">
//                   <div className="img-box">
//                     <img src={`src/assets/images/${product.img}`} alt={product.name} />
//                   </div>
//                   <div className="detail-box">
//                     <h6>{product.name}</h6>
//                     <h6>Price: <span>${product.price}</span></h6>
//                   </div>
//                   <div className="new">
//                     <span>New</span>
//                   </div>
//                 </a>
//                 <div className="cart-info">
//                   <div className="quantity-controls">
//                     <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                     <p className="quantity">{quantities[product.id]}</p>
//                     <button onClick={() => increaseQuantity(product.id)}>+</button>
//                   </div>
//                 </div>
//                 <button className="shop-btn" onClick={() => handleAdd(product)}>Add To Cart</button>
//                 {successMessage[product.id] && (
//                   <p style={{ color: "green", marginTop: "5px", fontSize: "14px" }}>
//                     ✅ Added {successMessage[product.id]} to Cart!
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="btn-box">
//           <a href="#">View All Products</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Shop;


// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Shop() {
//   const { addItem, inCart, getItem, updateItemQuantity } = useCart();
//   const [successMessage, setSuccessMessage] = useState({});

//   const handleAdd = (product) => {
//     if (inCart(product.id)) {
//       updateItemQuantity(product.id, getItem(product.id).quantity + 1);
//     } else {
//       addItem({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: 1, // Always adding 1 unit
//         img: product.img,
//       });
//     }

//     setSuccessMessage((prev) => ({ ...prev, [product.id]: true }));
//     setTimeout(() => {
//       setSuccessMessage((prev) => ({ ...prev, [product.id]: false }));
//     }, 3000);
//   };

//   return (
//     <section className="shop_section layout_padding">
//       <div className="container">
//         <div className="heading_container heading_center">
//           <h2>Latest Products</h2>
//         </div>
//         <div className="row">
//           {[
//             { id: 1, name: "Ring", price: 200, img: "p1.png" },
//             { id: 2, name: "Watch", price: 300, img: "p2.png" },
//             { id: 3, name: "Teddy Bear", price: 110, img: "p3.png" },
//             { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png" },
//             { id: 5, name: "Teddy Bear", price: 95, img: "p5.png" },
//             { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png" },
//             { id: 7, name: "Watch", price: 400, img: "p7.png" },
//             { id: 8, name: "Ring", price: 450, img: "p8.png" },
//           ].map((product) => (
//             <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
//               <div className="box">
//                 <a href="#">
//                   <div className="img-box">
//                     <img src={`src/assets/images/${product.img}`} alt={product.name} />
//                   </div>
//                   <div className="detail-box">
//                     <h6>{product.name}</h6>
//                     <h6>Price: <span>${product.price}</span></h6>
//                   </div>
//                   <div className="new">
//                     <span>New</span>
//                   </div>
//                 </a>
//                 <button className="shop-btn" onClick={() => handleAdd(product)}>Add To Cart</button>
//                 {successMessage[product.id] && (
//                   <p style={{ color: "green", marginTop: "5px", fontSize: "14px" }}>
//                     ✅ Added to Cart!
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="btn-box">
//           <a href="#">View All Products</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Shop;








// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Shop() {
//   const { addItem, inCart, getItem, updateItemQuantity } = useCart();
//   const [globalSuccessMessage, setGlobalSuccessMessage] = useState(null);

//   const handleAdd = (product) => {
//     if (inCart(product.id)) {
//       updateItemQuantity(product.id, getItem(product.id).quantity + 1);
//     } else {
//       addItem({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: 1,
//         img: product.img,
//       });
//     }

//     // Set global success message
//     setGlobalSuccessMessage(`${product.name} added to cart!`);

//     // Hide message after 3 seconds
//     setTimeout(() => {
//       setGlobalSuccessMessage(null);
//     }, 3000);
//   };

//   return (
//     <section className="shop_section layout_padding">
//       <div className="container">
//         <div className="heading_container heading_center">
//           <h2>Latest Products</h2>
//         </div>

//         {/* Success Popup */}
//         {globalSuccessMessage && (
//           <div className="success-popup">
//             <p>{globalSuccessMessage}</p>
//           </div>
//         )}

//         <div className="row">
//           {[
//             { id: 1, name: "Ring", price: 200, img: "p1.png" },
//             { id: 2, name: "Watch", price: 300, img: "p2.png" },
//             { id: 3, name: "Teddy Bear", price: 110, img: "p3.png" },
//             { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png" },
//             { id: 5, name: "Teddy Bear", price: 95, img: "p5.png" },
//             { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png" },
//             { id: 7, name: "Watch", price: 400, img: "p7.png" },
//             { id: 8, name: "Ring", price: 450, img: "p8.png" },
//           ].map((product) => (
//             <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
//               <div className="box">
//                 <a href="#">
//                   <div className="img-box">
//                     <img src={`src/assets/images/${product.img}`} alt={product.name} />
//                   </div>
//                   <div className="detail-box">
//                     <h6>{product.name}</h6>
//                     <h6>Price: <span>${product.price}</span></h6>
//                   </div>
//                   <div className="new">
//                     <span>New</span>
//                   </div>
//                 </a>
//                 <button className="shop-btn" onClick={() => handleAdd(product)}>Add To Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="btn-box">
//           <a href="#">View All Products</a>
//         </div>
//       </div>

      
//     </section>
//   );
// }

// export default Shop;