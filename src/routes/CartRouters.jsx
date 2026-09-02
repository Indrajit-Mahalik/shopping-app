import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cartpage from '../Components/Cartpage';



function CartRouters() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<h1>Home Page</h1>} /> */} 
        <Route path="/cartitem" element={<Cartpage />} />
      </Routes>
    </Router>
  )
}

export default CartRouters