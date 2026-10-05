import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";
import LoadingScreen from "./Components/LoadingScreen";
import Header from "./Components/Header";
import ProductSlider from "./Components/ProductSlider";
import Shop from "./Components/Shop";
import Saving from "./Components/Saving";
import Gift from "./Components/Gift";
import Contact from "./Components/Contact";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import WhyShop from "./Components/Whyshop";
import Checkout from "./Components/Checkout";
import Payment from "./Components/Payment";

function HomePage({ handleAddToCart }) {
  return (
    <>
      {/* Hero product slider placed directly below the navbar on the Home page */}
      <ProductSlider />
      <Shop handleAddToCart={handleAddToCart} />
    </>
  );
}

function AppLayout({
  cart,
  setCart,
  handleAddToCart,
  isCartOpen,
  setIsCartOpen,
}) {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/product/");
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      {!isCheckoutPage && (
        <Header
          cart={cart}
          setCart={setCart}
          isCartOpen={isCartOpen}
          onOpenCart={() => setIsCartOpen(true)}
          onCloseCart={() => setIsCartOpen(false)}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={<HomePage handleAddToCart={handleAddToCart} />}
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {!isProductPage && !isCheckoutPage && (
        <>
          <Saving />
          <WhyShop />
          <Gift />
          <Contact />
          <Layout />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("giftos_visited");
    } catch {
      return true;
    }
  });

  const handleFinishLoading = () => {
    setShowLoading(false);
    try {
      sessionStorage.setItem("giftos_visited", "true");
    } catch {
      // storage unavailable
    }
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (id, name, price, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevCart, { id, name, price, quantity }];
    });
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <ToastProvider onOpenCart={() => setIsCartOpen(true)}>
          {/* Loading Screen on initial website visit */}
          {showLoading && <LoadingScreen onFinish={handleFinishLoading} />}
          <Router>
            <AppLayout
              cart={cart}
              setCart={setCart}
              handleAddToCart={handleAddToCart}
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
            />
          </Router>
        </ToastProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
