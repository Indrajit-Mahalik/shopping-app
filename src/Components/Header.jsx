


// import React, { useState, useEffect } from "react";
// import { useCart } from "react-use-cart";
// import { useNavigate } from "react-router-dom";
// import { auth, provider, signInWithPopup, signOut, onAuthStateChanged } from "../firebaseConfig";

// function Header() {
//   const navigate = useNavigate();
//   const { isEmpty, totalItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
//   const [isCartVisible, setIsCartVisible] = useState(false);
//   const [alertMessage, setAlertMessage] = useState(""); 
//   const [user, setUser] = useState(null);
//   const [showLoginPopup, setShowLoginPopup] = useState(false); 

//   useEffect(() => {
//     onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser);
  //       if (!currentUser) {
//         emptyCart(); // Clear cart on logout
//       }
//     });
//   }, []);

//   const handleCartClick = () => {
//     if (!user) {
  //       setShowLoginPopup(true);
  //       return;
  //     }
  //     setIsCartVisible((prevState) => !prevState);
  //   };
  
  //   const handleCloseCart = () => {
    //     setIsCartVisible(false);
    //   };
    
    //   const handleBuyClick = () => {
//     if (isEmpty) {
  //       setAlertMessage("The cart is empty... Add to cart first!");
//       setTimeout(() => setAlertMessage(""), 3000);
//       return;
//     }
//     navigate("/checkout");
//   };

//   const handleLogin = async () => {
//     try {
//       if (auth.currentUser) {
//         return; 
//       }
//       await signInWithPopup(auth, provider);
//       setShowLoginPopup(false); 
//     } catch (error) {
  //       if (error.code === "auth/cancelled-popup-request") {
//         console.warn("Popup request was canceled due to multiple popups.");
//       } else {
//         alert(error.message);
//       }
//     }
//   };

//   const handleLogout = async () => {
  //     try {
//       await signOut(auth);
//       emptyCart(); // Clear cart when logged out
//       alert("Logged out successfully!");
//     } catch (error) {
  //       alert(error.message);
  //     }
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
//                 {user ? (
//                   <>
//                     <span>Welcome, {user.displayName || user.email}</span>
//                     <button onClick={handleLogout}>Logout</button>
//                   </>
//                 ) : (
//                   <a href="#" onClick={handleLogin}>
//                     <i className="fa fa-user" aria-hidden="true"></i>
//                     <span>Login</span>
//                   </a>
//                 )}
//                 <a href="#" onClick={handleCartClick} className="cart-icon">
//                   <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                   {user && totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
//                 </a>
                
//                 {isCartVisible && user && (
//                   <div className="cart-details-slider active">
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

//         {alertMessage && (
  //           <div className="alert-message">
//             {alertMessage}
//           </div>
//         )}

//         {showLoginPopup && (
  //           <div className="login-popup">
  //             <p>Please <strong>Login Now</strong> to access the cart.</p>
  //             <button onClick={handleLogin}>Login</button>
  //             <button onClick={() => setShowLoginPopup(false)}>Close</button>
  //           </div>
  //         )}
  //       </div>
  //     </>
  //   );
  // }
  
  // export default Header;
  
  
  
  // olddd
  
  
  
  
  import React, { useState, useEffect } from "react";
  import { useCart } from "react-use-cart";
  import { useNavigate } from "react-router-dom";
  import { auth, provider, signInWithPopup, signOut, onAuthStateChanged } from "../firebaseConfig";
  
  
  function Header() {
    const navigate = useNavigate();
    const { isEmpty, totalItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState(""); 
    const [user, setUser] = useState(null); 
  
    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    }, []);
  
    const handleCartClick = () => {
      setIsCartVisible((prevState) => !prevState);
    };
  
    const handleCloseCart = () => {
      setIsCartVisible(false);
    };
  
    const handleBuyClick = () => {
      if (isEmpty) {
        setAlertMessage("The cart is empty... Add to cart first!");
        setTimeout(() => setAlertMessage(""), 3000);
        return;
      }
      navigate("/checkout");
    };
  
  
  
    const handleLogin = async () => {
      try {
        if (auth.currentUser) {
          return; 
        }
    
        await signInWithPopup(auth, provider);
      } catch (error) {
        if (error.code === "auth/cancelled-popup-request") {
          console.warn("Popup request was canceled due to multiple popups.");
        } else {
          alert(error.message);
        }
      }
    };
    
    const handleLogout = async () => {
      try {
        await signOut(auth);
        alert("Logged out successfully!");
      } catch (error) {
        alert(error.message);
      }
    };
  
    return (
      <>
        <div className="hero_area">
          <header className="header_section">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Giftos</span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span></span>
              </button>
  
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Shop</a>
                  </li>
                </ul>
                <div className="user_option">
                  {user ? (
                    <>
                      <span>Welcome, {user.displayName || user.email}</span>
                      <button onClick={handleLogout}>Logout</button>
                    </>
                  ) : (
                    <a href="#" onClick={handleLogin}>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span>Login</span>
                    </a>
                  )}
                  <a href="#" onClick={handleCartClick} className="cart-icon">
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                  </a>
                  {isCartVisible && (
                    <div className={`cart-details-slider ${isCartVisible ? "active" : ""}`}>
                      <div className="cart-details">
                        <button className="close-cart-btn" onClick={handleCloseCart}>X</button>
                        <p>Total: ${cartTotal.toFixed(2)}</p>
                        <ul>
                          {isEmpty ? (
                            <p>Add a Product.</p>
                          ) : (
                            items.map((item) => (
                              <li key={item.id} className="cart-item">
                                <div className="cart-product">
                                  <img src={`/src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
                                  <div className="cart-info">
                                    <span>{item.name}</span>
                                    <span>Price: ${item.price}</span>
                                    <span>Total: ${item.quantity * item.price}</span>
                                  </div>
                                </div>
  
                                <div className="quantity-controls">
                                  <button 
                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)} 
                                    disabled={item.quantity <= 1}
                                  >-</button>
                                  <span>{item.quantity}</span>
                                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
  
                                <button className="delete-item-btn" onClick={() => removeItem(item.id)}>🗑</button>
                              </li>
                            ))
                          )}
                        </ul>
                        <div className="cart-buttons">
                          <button className="btn-btn" onClick={handleBuyClick}>
                            Buy
                          </button>
                          <button className="clear-btn" onClick={() => emptyCart()}>Clear</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </header>
  
         
          {alertMessage && (
            <div className="alert-message">
              {alertMessage}
            </div>
          )}
        </div>
      </>
    );
  }
  
  export default Header;
