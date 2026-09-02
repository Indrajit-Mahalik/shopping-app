// import { useState , useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { CartProvider } from 'react-use-cart'
// // import { useCart } from 'react-use-cart'
// import Header from './Components/Header'
// import Shop from './Components/Shop'
// import Saving from './Components/Saving'
// import Whyshop from './Components/Whyshop'
// import Gift from './Components/Gift'
// import Contact from './Components/Contact'
// import Layout from './Components/Layout'
// import Footer from './Components/Footer'
// import CartRouter from './/routes/CartRouters'
// import Cartpage from './Components/Cartpage'  
// import ProductDetails from './Components/ProductDetails'
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'






// function App() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart'));
//     if (savedCart) {
//       setCart(savedCart);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const handleAddToCart = (id, name, price, quantity) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.id === id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevCart, { id, name, price, quantity }];
//     });
    
//   };



//   return (
//     <>

//     <CartProvider>
//     <Router>
//       <Header Header cart={cart} setCart={setCart} />
      
//       <Routes>
//         <Route path="/" element={<Shop handleAddToCart={handleAddToCart} />} />
//         <Route path="/cart" element={<Cartpage cart={cart} />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//     </CartProvider>

    
    
//       {/* <CartRouter /> */}
//       {/* <Header cart={cart} />   */}
//       {/* <Shop handleAddToCart={handleAddToCart} /> */}
//       <Saving />
//       <Gift />
//       <Contact />
//       <Layout />
//       <Footer />
//       {/* <Whyshop /> */}
//       <div>
//     </div>
//     </>
//   )
// }

// export default App



// New 

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import { CartProvider } from 'react-use-cart';
// import Header from './Components/Header';
// import Shop from './Components/Shop';
// import Saving from './Components/Saving';
// import Gift from './Components/Gift';
// import Contact from './Components/Contact';
// import Layout from './Components/Layout';
// import Footer from './Components/Footer';
 
// import ProductDetails from './Components/ProductDetails';
// import WhyShop from './Components/Whyshop';
// import Checkout from './Components/Checkout';


// function AppLayout({ cart, setCart, handleAddToCart }) {
//   const location = useLocation();
//   const isProductPage = location.pathname.startsWith('/product/');
//   const isCheckoutPage = location.pathname === "/checkout";


//   return (
//     <>
//       {!isProductPage && <Header cart={cart} setCart={setCart} />}
//       <Routes>
//         <Route path="/checkout" element={<Checkout />} />
        
//         <Route path="/" element={<Shop handleAddToCart={handleAddToCart} />} />
        
//         <Route path="/product/:id" element={<ProductDetails />} />

//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/checkout" element={<Checkout />} />

        
//       </Routes>
      
//       {!isProductPage && !isCheckoutPage && (
//         <>
//           <Saving />
//           <WhyShop />
//           <Gift />
//           <Contact />
//           <Layout />
//           <Footer />
//         </>
//       )}
//     </>
//   );
// }

// function App() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart'));
//     if (savedCart) {
//       setCart(savedCart);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const handleAddToCart = (id, name, price, quantity) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.id === id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevCart, { id, name, price, quantity }];
//     });
//   };

//   return (
//     <CartProvider>
//       <Router>
//         <AppLayout cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} />
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Header from './Components/Header';
import Shop from './Components/Shop';
import Saving from './Components/Saving';
import Gift from './Components/Gift';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import ProductDetails from './Components/ProductDetails';
import WhyShop from './Components/Whyshop';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';

function AppLayout({ cart, setCart, handleAddToCart }) {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/product/');
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      {!isProductPage && <Header cart={cart} setCart={setCart} />}
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<Shop handleAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
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

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (id, name, price, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { id, name, price, quantity }];
    });
  };

  return (
    <CartProvider>
      <Router>
        <AppLayout cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} />
      </Router>
    </CartProvider>
  );
}

export default App;
