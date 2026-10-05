import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "../firebaseConfig";
import ThemeToggle from "./ThemeToggle";
import CartDrawer from "./CartDrawer";

function Header({ isCartOpen: propIsCartOpen, onOpenCart, onCloseCart }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();
  const [internalCartOpen, setInternalCartOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [user, setUser] = useState(null);

  const isCartVisible =
    propIsCartOpen !== undefined ? propIsCartOpen : internalCartOpen;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleCartClick = () => {
    if (isCartVisible) {
      if (onCloseCart) onCloseCart();
      else setInternalCartOpen(false);
    } else {
      if (onOpenCart) onOpenCart();
      else setInternalCartOpen(true);
    }
  };

  const handleCloseCart = () => {
    if (onCloseCart) onCloseCart();
    else setInternalCartOpen(false);
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

  const handleShopClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const shopSection = document.querySelector(".shop_section");
      if (shopSection) {
        shopSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const shopSection = document.querySelector(".shop_section");
        if (shopSection) {
          shopSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="header_section main_header_navbar">
        <div className="container-fluid px-3 px-md-5">
          <nav className="navbar custom_nav-container header_single_line">
            {/* Left Corner: Home & Shop */}
            <div className="header_left_corner">
              <ul className="navbar-nav">
                <li
                  className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
                >
                  <Link className="nav-link" to="/" onClick={handleHomeClick}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#shop"
                    onClick={handleShopClick}
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </div>

            {/* Center: Giftos (linking to home) */}
            <div className="header_center_brand">
              <Link className="navbar-brand" to="/" onClick={handleHomeClick}>
                <span>Giftos</span>
              </Link>
            </div>

            {/* Right Corner: Login, Cart & Dark/Light Theme */}
            <div className="header_right_corner">
              <div className="user_option">
                {user ? (
                  <div className="user_profile_box">
                    <span className="user_name_text">
                      Welcome, {user.displayName || user.email?.split("@")[0]}
                    </span>
                    <button
                      type="button"
                      className="logout_nav_btn"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="nav_btn login_nav_btn"
                    onClick={handleLogin}
                  >
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>Login</span>
                  </button>
                )}

                {/* Cart Button */}
                <button
                  type="button"
                  className="nav_btn cart_nav_btn"
                  onClick={handleCartClick}
                  title="View Cart"
                  aria-label="Open Shopping Cart"
                >
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  {totalItems > 0 && (
                    <span className="cart-badge">{totalItems}</span>
                  )}
                </button>

                {/* Dark / Light Mode Toggle */}
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>

        {/* Backdrop Blurred Cart Drawer */}
        <CartDrawer isOpen={isCartVisible} onClose={handleCloseCart} />

        {/* Alert Message */}
        {alertMessage && <div className="alert-message">{alertMessage}</div>}
      </header>
    </>
  );
}

export default Header;

