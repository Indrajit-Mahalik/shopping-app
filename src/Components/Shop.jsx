import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function Shop() {
  const { addItem, inCart, getItem, updateItemQuantity } = useCart();
  const [globalSuccessMessage, setGlobalSuccessMessage] = useState(null);

  const handleAdd = (product) => {
    if (inCart(product.id)) {
      updateItemQuantity(product.id, getItem(product.id).quantity + 1);
    } else {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        img: product.img,
      });
    }

    setGlobalSuccessMessage(`${product.name} added to cart!`);
    setTimeout(() => setGlobalSuccessMessage(null), 3000);
  };

  return (
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>

        {globalSuccessMessage && (
          <div className="success-popup">
            <p>{globalSuccessMessage}</p>
          </div>
        )}

        <div className="row">
          {[
            { id: 1, name: "Ring", price: 200, img: "p1.png" },
            { id: 2, name: "Watch", price: 300, img: "p2.png" },
            { id: 3, name: "Teddy Bear", price: 110, img: "p3.png" },
            { id: 4, name: "Flower Bouquet", price: 45, img: "p4.png" },
            { id: 5, name: "Teddy Bear", price: 95, img: "p5.png" },
            { id: 6, name: "Flower Bouquet", price: 70, img: "p6.png" },
            { id: 7, name: "Watch", price: 400, img: "p7.png" },
            { id: 8, name: "Ring", price: 450, img: "p8.png" },
          ].map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="box">
                <Link to={`/product/${product.id}`}>
                  <div className="img-box">
                    <img src={`/src/assets/images/${product.img}`} alt={product.name} />
                  </div>
                  <div className="detail-box">
                    <h6>{product.name}</h6>
                    <h6>Price: <span>${product.price}</span></h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </Link>
                <button className="shop-btn" onClick={() => handleAdd(product)}>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="btn-box">
          <a href="#">View All Products</a>
        </div>
      </div>
    </section>
  );
}

export default Shop;
 