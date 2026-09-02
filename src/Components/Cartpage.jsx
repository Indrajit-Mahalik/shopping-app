

import React from "react";


function Cartpage({ cart }) {
  const totalPrice = (cart || [])
    .reduce((acc, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 0;
      return acc + price * quantity;
    }, 0)
    .toFixed(2);

  return (
    <section className="cart-container">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 className="cart-heading">Shopping Cart</h2>
        <div className="cart-row">
          {(cart || []).length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div style={{ width: "100%", maxWidth: "250px" }} key={item.id}>
                <div className="cart-box">
                  <div className="cart-img-box">
                    <img
                      src={item.img ? `/assets/images/${item.img}` : '/assets/images/p5.png'} 
                      alt={item.name || "Product"} 
                      width="50" 
                      height="50"
                      className="cart-img"
                    />
                  </div>
                  <div className="cart-detail-box">
                    <h6>{item.name}</h6>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-total-price">
          <h3>Total: ${totalPrice}</h3>
        </div>
        <button>Order</button>
      </div>
    </section>
  );
}

export default Cartpage;
