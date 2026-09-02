// import React, { useState } from 'react';
// import Cartpage from './Cartpage';

// function Header({ cart }) {
//   const [isCartVisible, setIsCartVisible] = useState(false);

//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//   const handleCartClick = () => {
//     setIsCartVisible(prevState => !prevState);
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="why.html">Why Us</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="testimonial.html">Testimonial</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="contact.html">Contact Us</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="">
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick }  >
//                   <i className="fa fa-shopping-bag" aria-hidden="true" ></i>
//                   <span>Cart ({totalQuantity} items)</span>
//                 </a>
//                 {isCartVisible && (
//                   <div className="cart-details" >
//                     <p>Total: ${totalPrice}</p>
//                     <ul>
//                       {cart.map((item) => (
//                         <li key={item.id} className="cart-item">
//                           <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                           <span>{item.name} - {item.quantity} x ${item.price.id} = ${item.quantity * item.price}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;

// import React, { useState } from 'react';
// import Cartpage from './Cartpage';

// function Header({ cart }) {
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//   const handleCartClick = () => {
//     setIsCartVisible(prevState => !prevState);
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="">
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick}>
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   <span>Cart ({totalQuantity} items)</span>
//                 </a>
//                 {isCartVisible && (
//                   <div className="cart-details-slider">
//                     <div className="cart-details">
//                       <p>Total: ${totalPrice}</p>
//                       <ul>
//                         {cart.map((item) => (
//                           <li key={item.id} className="cart-item">
//                             <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                             <span>{item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <button>Checkout</button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;

// import React, { useState } from 'react';
// import Cartpage from './Cartpage';

// function Header({ cart }) {
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//   const handleCartClick = () => {
//     setIsCartVisible(prevState => !prevState);
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="">
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick}>
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   <span>Cart ({totalQuantity} items)</span>
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? 'active' : ''}`}>
//                     <div className="cart-details">
//                       <p>Total: ${totalPrice}</p>
//                       <ul>
//                         {cart.map((item) => (
//                           <li key={item.id} className="cart-item">
//                             <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                             <span>{item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <button className='btn-btn'>Buy </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;

// import React, { useState } from 'react';
// import Cartpage from './Cartpage';

// function Header({ cart }) {
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//   const handleCartClick = () => {
//     setIsCartVisible(prevState => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false);
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="">
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick}>
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   <span>Cart ({totalQuantity} items)</span>
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? 'active' : ''}`}>
//                     <div className="cart-details">
//                       <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
//                       <p>Total: ${totalPrice}</p>
//                       <ul>
//                         {cart.map((item) => (
//                           <li key={item.id} className="cart-item">
//                             <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                             <span>{item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <button className='btn-btn'>Buy</button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;

// import React, { useState } from "react";

// function Header({ cart, setCart }) {
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cart
//     .reduce((acc, item) => acc + item.price * item.quantity, 0)
//     .toFixed(2);

//   const handleCartClick = () => {
//     setIsCartVisible((prevState) => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false);
//   };

//   const handleClearCart = () => {
//     setCart([]); // Clears the cart
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarSupportedContent"
//             >
//               <span></span>
//             </button>

//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">
//                     Shop
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">
//                     Product
//                   </a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="#">
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick}>
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   <span>Cart ({totalQuantity} items)</span>
//                 </a>
//                 {isCartVisible && (
//                   <div
//                     className={`cart-details-slider ${
//                       isCartVisible ? "active" : ""
//                     }`}
//                   >
//                     <div className="cart-details">
//                       <button
//                         className="close-cart-btn"
//                         onClick={handleCloseCart}
//                       >
//                         X
//                       </button>
//                       <p>Total: ${totalPrice}</p>
//                       <ul>
//                         {cart.map((item) => (
//                           <li key={item.id} className="cart-item">
//                             <img
//                               src={`src/assets/images/${item.img}`}
//                               alt={item.name}
//                               width="50"
//                               height="50"
//                             />
//                             <span>
//                               {item.name} - {item.quantity} x ${item.price} = $
//                               {item.quantity * item.price}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                       {/* Move Clear Cart Button Inside the Slider */}
//                       <div className="cart-buttons">
//                         <button className="btn-btn">Buy</button>
//                         <button className="clear-btn" onClick={handleClearCart}>
//                           Clear
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;




// import React, { useState } from 'react';

// function Header({ cart, setCart }) { 
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//   const handleCartClick = () => {
//     setIsCartVisible(prevState => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false); 
//   };

//   const handleClearCart = () => {
//     setCart([]); // Clears the cart
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="#">    
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick}>
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   <span>Cart ({totalQuantity} items)</span>
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? 'active' : ''}`}>
//                     <div className="cart-details">
//                       <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
//                       <p>Total: ${totalPrice}</p>
//                       <ul>
//                         {cart.map((item) => (
//                           <li key={item.id} className="cart-item">
//                             <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                             <span>{item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <div className="cart-buttons">
//                         <button className="btn-btn">Buy</button>
//                         <button className="clear-btn" onClick={handleClearCart}>Clear</button> 
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;



// import React, { useState } from 'react';

// function Header({ cart, setCart }) { 
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//   const handleCartClick = () => {
//     setIsCartVisible(prevState => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false); 
//   };

//   const handleClearCart = () => {
//     setCart([]); // Clears the cart
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="#">    
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick} className="cart-icon">
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? 'active' : ''}`}>
//                     <div className="cart-details">
//                       <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
//                       <p>Total: ${totalPrice}</p>
//                       <ul>
//                         {cart.map((item) => (
//                           <li key={item.id} className="cart-item">
//                             <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                             <span>{item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <div className="cart-buttons">
//                         <button className='btn-btn'>Buy</button>
//                         <button className='clear-btn' onClick={handleClearCart}>Clear</button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>

//     </>
//   );
// }

// export default Header;



// updated the button in quantity in slider..


// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Header() { 
//   const { isEmpty, totalItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
//   const [isCartVisible, setIsCartVisible] = useState(false);

//   const handleCartClick = () => {
//     setIsCartVisible((prevState) => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false);
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="#">    
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick} className="cart-icon">
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? "active" : ""}`}>
//                     <div className="cart-details">
//                       <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
//                       <p>Total: ${cartTotal.toFixed(2)}</p>
//                       <ul>
//                         {isEmpty ? (
//                           <p>Your cart is empty.</p>
//                         ) : (
//                           items.map((item) => (
//                             <li key={item.id} className="cart-item">
//                               <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                               <span>{item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}</span>
//                               <div className="cart-quantity-controls">
//                                 <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
//                                 <span>{item.quantity}</span>
//                                 <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
//                               </div>
//                               <button className="delete-item-btn" onClick={() => removeItem(item.id)}>🗑</button>
//                             </li>
//                           ))
//                         )}
//                       </ul>
//                       <div className="cart-buttons">
//                         <button className="btn-btn">Buy</button>
//                         <button className="clear-btn" onClick={() => emptyCart()}>Clear</button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;







// import React, { useState } from 'react';



// function Header({ cart, setCart }) { 
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//   const handleCartClick = () => {
//     setIsCartVisible(prevState => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false); 
//   };

//   const handleClearCart = () => {
//     setCart([]); // Clears the cart
//   };

//   const handleRemoveFromCart = (id) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== id));
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="#">    
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick} className="cart-icon">
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? 'active' : ''}`}>
//                     <div className="cart-details">
//                       <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
//                       <p>Total: ${totalPrice}</p>
//                       <ul>
//                         {cart.map((item) => (
//                           <li key={item.id} className="cart-item">
//                             <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                             <span>{item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}</span>
//                             <button className="delete-item-btn" onClick={() => handleRemoveFromCart(item.id)}>🗑</button>
//                           </li>
//                         ))}
//                       </ul>
//                       <div className="cart-buttons">
//                         <button className='btn-btn'>Buy</button>
//                         <button className='clear-btn' onClick={handleClearCart}>Clear</button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;


// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Header() { 
//   const { isEmpty, totalItems, totalUniqueItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
//   const [isCartVisible, setIsCartVisible] = useState(false);

//   const handleCartClick = () => {
//     setIsCartVisible((prevState) => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false);
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="#">    
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick} className="cart-icon">
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? "active" : ""}`}>
//                     <div className="cart-details">
//                       <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
//                       <p>Total: ${cartTotal.toFixed(2)}</p>
//                       <ul>
//                         {isEmpty ? (
//                           <p>Your cart is empty.</p>
//                         ) : (
//                           items.map((item) => (
//                             <li key={item.id} className="cart-item">
//                               <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                               <span>{item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}</span>
//                               <button className="delete-item-btn" onClick={() => removeItem(item.id)}>🗑</button>
//                             </li>
//                           ))
//                         )}
//                       </ul>
//                       <div className="cart-buttons">
//                         <button className="btn-btn">Buy</button>
//                         <button className="clear-btn" onClick={() => emptyCart()}>Clear</button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;



// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Header() { 
//   const { isEmpty, totalItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
//   const [isCartVisible, setIsCartVisible] = useState(false);

//   const handleCartClick = () => {
//     setIsCartVisible((prevState) => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false);
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="shop.html">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="#">    
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick} className="cart-icon">
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? "active" : ""}`}>
//                     <div className="cart-details">
//                       <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
//                       <p>Total: ${cartTotal.toFixed(2)}</p>
//                       <ul>
//                         {isEmpty ? (
//                           <p>Your cart is empty.</p>
//                         ) : (
//                           items.map((item) => (
//                             <li key={item.id} className="cart-item">
//                               <img src={`src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                               <span>{item.name} - ${item.price} each</span>
//                               <div className="quantity-controls">
//                                 <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
//                                 <span>{item.quantity}</span>
//                                 <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
//                               </div>
//                               <span>Total: ${item.quantity * item.price}</span>
//                               <button className="delete-item-btn" onClick={() => removeItem(item.id)}>🗑</button>
//                             </li>
//                           ))
//                         )}
//                       </ul>
//                       <div className="cart-buttons">
//                         <button className="btn-btn">Buy</button>
//                         <button className="clear-btn" onClick={() => emptyCart()}>Clear</button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>

//       {/* CSS for Cart Quantity Controls */}
//       <style>
//         {`
//           .cart-item {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding: 10px;
//             border-bottom: 1px solid #ddd;
//           }

//           .cart-item img {
//             margin-right: 10px;
//             border-radius: 5px;
//           }

//           .quantity-controls {
//             display: flex;
//             align-items: center;
//             gap: 5px;
//           }

//           .quantity-controls button {
//             width: 30px;
//             height: 30px;
//             border: none;
//             background-color: #f0f0f0;
//             cursor: pointer;
//             font-size: 18px;
//             border-radius: 5px;
//           }

//           .quantity-controls span {
//             min-width: 20px;
//             text-align: center;
//             font-weight: bold;
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default Header;






// import React, { useState } from "react";
// import { useCart } from "react-use-cart";
// import { useNavigate } from "react-router-dom";

// function Header() { 
//   const navigate = useNavigate();
//   const { isEmpty, totalItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
//   const [isCartVisible, setIsCartVisible] = useState(false);

//   const handleCartClick = () => {
//     setIsCartVisible((prevState) => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false);
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="#">    
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick} className="cart-icon">
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? "active" : ""}`}>
//                     <div className="cart-details">
//                       <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
//                       <p>Total: ${cartTotal.toFixed(2)}</p>
//                       <ul>
//                         {isEmpty ? (
//                           <p>Add a Product .</p>
//                         ) : (
//                           items.map((item) => (
//                             <li key={item.id} className="cart-item">
//                               <div className="cart-product">
//                                 <img src={`/src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                                 <div className="cart-info">
//                                   <span>{item.name}</span>
//                                   <span>Price: ${item.price}</span>
//                                   <span>Total: ${item.quantity * item.price}</span>
//                                 </div>
//                               </div>

                              
//                               <div className="quantity-controls">
//                                 <button 
//                                   onClick={() => updateItemQuantity(item.id, item.quantity - 1)} 
//                                   disabled={item.quantity <= 1}
//                                 >-</button>
//                                 <span>{item.quantity}</span>
//                                 <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
//                               </div>

//                               <button className="delete-item-btn" onClick={() => removeItem(item.id)}>🗑</button>
//                             </li>
//                           ))
//                         )}
//                       </ul>
//                       <div className="cart-buttons">
//                       <button
//                               className="btn-btn"
//                               onClick={() => {
//                                 if (isEmpty) {
//                                   alert("The cart is empty... Add to cart first!");
//                                   return;
//                                 }
//                                 navigate("/checkout");
//                               }}
//                             >
//                               Buy
//                             </button>

//                         <button className="clear-btn" onClick={() => emptyCart()}>Clear</button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>

      
      
//     </>
//   );
// }

// export default Header;



// import React, { useState } from "react";
// import { useCart } from "react-use-cart";
// import { useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();
//   const { isEmpty, totalItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const [alertMessage, setAlertMessage] = useState(""); // State for alert message

//   const handleCartClick = () => {
//     setIsCartVisible((prevState) => !prevState);
//   };

//   const handleCloseCart = () => {
//     setIsCartVisible(false);
//   };

//   const handleBuyClick = () => {
//     if (isEmpty) {
//       setAlertMessage("The cart is empty... Add to cart first!"); // Show alert message
//       setTimeout(() => setAlertMessage(""), 3000); // Hide alert after 3 sec
//       return;
//     }
//     navigate("/checkout");
//   };

//   return (
//     <>
//       <div className="hero_area">
//         <header className="header_section">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//               <span>Giftos</span>
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="">Shop</a>
//                 </li>
//               </ul>
//               <div className="user_option">
//                 <a href="#">
//                   <i className="fa fa-user" aria-hidden="true"></i>
//                   <span>Login</span>
//                 </a>
//                 <a href="#" onClick={handleCartClick} className="cart-icon">
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
//                 </a>
//                 {isCartVisible && (
//                   <div className={`cart-details-slider ${isCartVisible ? "active" : ""}`}>
//                     <div className="cart-details">
//                       <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
//                       <p>Total: ${cartTotal.toFixed(2)}</p>
//                       <ul>
//                         {isEmpty ? (
//                           <p>Add a Product.</p>
//                         ) : (
//                           items.map((item) => (
//                             <li key={item.id} className="cart-item">
//                               <div className="cart-product">
//                                 <img src={`/src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                                 <div className="cart-info">
//                                   <span>{item.name}</span>
//                                   <span>Price: ${item.price}</span>
//                                   <span>Total: ${item.quantity * item.price}</span>
//                                 </div>
//                               </div>

//                               <div className="quantity-controls">
//                                 <button 
//                                   onClick={() => updateItemQuantity(item.id, item.quantity - 1)} 
//                                   disabled={item.quantity <= 1}
//                                 >-</button>
//                                 <span>{item.quantity}</span>
//                                 <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
//                               </div>

//                               <button className="delete-item-btn" onClick={() => removeItem(item.id)}>🗑</button>
//                             </li>
//                           ))
//                         )}
//                       </ul>
//                       <div className="cart-buttons">
//                         <button className="btn-btn" onClick={handleBuyClick}>
//                           Buy
//                         </button>
//                         <button className="clear-btn" onClick={() => emptyCart()}>Clear</button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </header>

//         {/* Alert Message */}
//         {alertMessage && (
//           <div className="alert-message">
//             {alertMessage}
//           </div>
//         )}
//       </div>

      
//     </>
//   );
// }

// export default Header;