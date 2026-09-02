// import React, { useState } from "react";
// import { useCart } from "react-use-cart";


// function Checkout() {
//     const { items, cartTotal } = useCart(); // Access cart data

//     const [formData, setFormData] = useState({
//         name: "",
//         phone: "",
//         pincode: "",
//         address: "",
//         district: "",
//         state: "",
//         deliveryType: "home",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Your order has been placed successfully!");
//     };

//     return (
//         <div className="checkout-container">
//             {/* Left Side - Address Form */}
//             <div className="checkout-left">
//                 <h2>Delivery Address</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label>Name:</label>
//                     <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

//                     <label>Phone Number:</label>
//                     <input type="tel" name="phone" placeholder="Enter your number" value={formData.phone} onChange={handleChange} required />

//                     <label>Pincode:</label>
//                     <input type="text" name="pincode" placeholder="Enter your pincode" value={formData.pincode} onChange={handleChange} required />

//                     <label>Address:</label>
//                     <textarea name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />

//                     <label>District:</label>
//                     <input type="text" name="district" placeholder="Enter your district" value={formData.district} onChange={handleChange} required />

//                     <label>State:</label>
//                     <input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} required />

//                     <label>Delivery Type:</label>
//                     <div className="delivery-options">
//                         <label>
//                             <input type="radio" name="deliveryType" value="home" checked={formData.deliveryType === "home"} onChange={handleChange} />
//                             Home 
//                         </label>
//                         <label>
//                             <input type="radio" name="deliveryType" value="office" checked={formData.deliveryType === "office"} onChange={handleChange} />
//                             Work 
//                         </label>
//                     </div>

//                     <button type="submit" className="place-order-btn">Save and Deliver Here</button>
//                 </form>
//             </div>

//             {/* Right Side - Cart Summary */}
//             <div className="checkout-right">
//                 <h2>Price Details</h2>
//                 <div className="price-details">
//                     <p>Items in Cart: <span>{items.length}</span></p>

//                     {/* Display all products dynamically */}
//                     {items.map((item) => (
//                         <div key={item.id} className="cart-item">
//                             <p>{item.name} (x{item.quantity})</p>
//                             <p>₹{(item.price * item.quantity).toFixed(2)}</p>
//                         </div>
//                     ))}

//                     <p>Delivery Charges: <span className="free">FREE</span></p>
//                     <hr />
//                     <p className="total">Total Payable: <span>₹{cartTotal.toFixed(2)}</span></p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Checkout;




// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Checkout() {
//     const { items, cartTotal } = useCart(); 

//     const [formData, setFormData] = useState({
//         name: "",
//         phone: "",
//         pincode: "",
//         address: "",
//         district: "",
//         state: "",
//         deliveryType: "home",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Your order has been placed successfully!");
//     };

//     return (
//         <div className="checkout-container">
            
//             <div className="checkout-left">
//                 <h2>Delivery Address</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label>Name:</label>
//                     <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

//                     <label>Phone Number:</label>
//                     <input type="tel" name="phone" placeholder="Enter your number" value={formData.phone} onChange={handleChange} required />

//                     <label>Pincode:</label>
//                     <input type="text" name="pincode" placeholder="Enter your pincode" value={formData.pincode} onChange={handleChange} required />

//                     <label>Address:</label>
//                     <textarea name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />

//                     <label>District:</label>
//                     <input type="text" name="district" placeholder="Enter your district" value={formData.district} onChange={handleChange} required />

//                     <label>State:</label>
//                     <input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} required />

//                     <label>Delivery Type:</label>
//                     <div className="delivery-options">
//                         <label>
//                             <input type="radio" name="deliveryType" value="home" checked={formData.deliveryType === "home"} onChange={handleChange} />
//                             Home 
//                         </label>
//                         <label>
//                             <input type="radio" name="deliveryType" value="office" checked={formData.deliveryType === "office"} onChange={handleChange} />
//                             Work 
//                         </label>
//                     </div>

//                     <button type="submit" className="place-order-btn">Save and Deliver Here</button>
//                 </form>
//             </div>


//             <div className="checkout-right">
//                 <h2>Price Details</h2>
//                 <div className="price-details">
//                     <p>Items in Cart: <span>{items.length}</span></p>

                
//                     {items.map((item) => (
//                         <div key={item.id} className="cart-item-price">
//                             <img src={`/src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                             <div>
//                                 <p>{item.name} (x{item.quantity})</p>
//                                 <p>₹{(item.price * item.quantity).toFixed(2)}</p>
//                             </div>
//                         </div>
//                     ))}

//                     <p>Delivery Charges: <span className="free">FREE</span></p>
//                     <hr />
//                     <p className="total">Total Payable: <span>₹{cartTotal.toFixed(2)}</span></p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Checkout;



// import React, { useState } from "react";
// import { useCart } from "react-use-cart";

// function Checkout() {
//     const { items, cartTotal, updateItemQuantity } = useCart(); 

//     const [formData, setFormData] = useState({
//         name: "",
//         phone: "",
//         pincode: "",
//         address: "",
//         district: "",
//         state: "",
//         deliveryType: "home",
//     });

//     const [showPopup, setShowPopup] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setShowPopup(true); // Show popup when form is submitted
//     };

//     return (
//         <div className="checkout-container">
//             <div className="checkout-left">
//                 <h2>Delivery Address</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label>Name:</label>
//                     <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

//                     <label>Phone Number:</label>
//                     <input type="tel" name="phone" placeholder="Enter your number" value={formData.phone} onChange={handleChange} required />

//                     <label>Pincode:</label>
//                     <input type="text" name="pincode" placeholder="Enter your pincode" value={formData.pincode} onChange={handleChange} required />

//                     <label>Address:</label>
//                     <textarea name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />

//                     <label>District:</label>
//                     <input type="text" name="district" placeholder="Enter your district" value={formData.district} onChange={handleChange} required />

//                     <label>State:</label>
//                     <input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} required />

//                     <label>Delivery Type:</label>
//                     <div className="delivery-options">
//                         <label>
//                             <input type="radio" name="deliveryType" value="home" checked={formData.deliveryType === "home"} onChange={handleChange} />
//                             Home 
//                         </label>
//                         <label>
//                             <input type="radio" name="deliveryType" value="office" checked={formData.deliveryType === "office"} onChange={handleChange} />
//                             Work 
//                         </label>
//                     </div>

//                     <button type="submit" className="place-order-btn">Save and Deliver Here</button>
//                 </form>
//             </div>

//             <div className="checkout-right">
//                 <h2>Price Details</h2>
//                 <div className="price-details">
//                     <p>Items in Cart: <span>{items.length}</span></p>

//                     {items.map((item) => (
//                         <div key={item.id} className="cart-item-price">
//                             <img src={`/src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
//                             <div>
//                                 <p>{item.name} (x{item.quantity})</p>
//                                 <p>₹{(item.price * item.quantity).toFixed(2)}</p>
//                             </div>
//                         </div>
//                     ))}

//                     <p>Delivery Charges: <span className="free">FREE</span></p>
//                     <hr />
//                     <p className="total">Total Payable: <span>₹{cartTotal.toFixed(2)}</span></p>
//                 </div>
//             </div>

//             {/* POPUP OVERLAY */}
//             {showPopup && (
//                 <div className="popup-overlay">
//                     <div className="popup">
//                         <h2>Order Summary</h2>
//                         <p><strong>Delivery Address:</strong></p>
//                         <p>{formData.name}, {formData.phone}</p>
//                         <p>{formData.address}, {formData.district}, {formData.state} - {formData.pincode}</p>
//                         <hr />

//                         <h3>Products</h3>
//                         {items.map((item) => (
//                             <div key={item.id} className="popup-cart-item">
//                                 <img src={`/src/assets/images/${item.img}`} alt={item.name} width="60" height="60" />
//                                 <div>
//                                     <p>{item.name}</p>
//                                     <p>₹{item.price}</p>
//                                     <div className="quantity-control">
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
//                                         <span>{item.quantity}</span>
//                                         <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}

//                         <p className="total">Total: ₹{cartTotal.toFixed(2)}</p>
//                         <button className="payment-btn">Proceed to Payment</button>
//                         <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Checkout;




import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Checkout() {
    const { items, cartTotal, updateItemQuantity } = useCart(); 
    const navigate = useNavigate(); // Initialize navigate

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        pincode: "",
        address: "",
        district: "",
        state: "",
        deliveryType: "home",
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true); // Show popup when form is submitted
    };

    return (
        <div className="checkout-container">
            <div className="checkout-left">
                <h2>Delivery Address</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

                    <label>Phone Number:</label>
                    <input type="tel" name="phone" placeholder="Enter your number" value={formData.phone} onChange={handleChange} required />

                    <label>Pincode:</label>
                    <input type="text" name="pincode" placeholder="Enter your pincode" value={formData.pincode} onChange={handleChange} required />

                    <label>Address:</label>
                    <textarea name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />

                    <label>District:</label>
                    <input type="text" name="district" placeholder="Enter your district" value={formData.district} onChange={handleChange} required />

                    <label>State:</label>
                    <input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} required />

                    <label>Delivery Type:</label>
                    <div className="delivery-options">
                        <label>
                            <input type="radio" name="deliveryType" value="home" checked={formData.deliveryType === "home"} onChange={handleChange} />
                            Home 
                        </label>
                        <label>
                            <input type="radio" name="deliveryType" value="office" checked={formData.deliveryType === "office"} onChange={handleChange} />
                            Work 
                        </label>
                    </div>

                    <button type="submit" className="place-order-btn">Save and Deliver Here</button>
                </form>
            </div>

            <div className="checkout-right">
                <h2>Price Details</h2>
                <div className="price-details">
                    <p>Items in Cart: <span>{items.length}</span></p>

                    {items.map((item) => (
                        <div key={item.id} className="cart-item-price">
                            <img src={`/src/assets/images/${item.img}`} alt={item.name} width="50" height="50" />
                            <div>
                                <p>{item.name} (x{item.quantity})</p>
                                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}

                    <p>Delivery Charges: <span className="free">FREE</span></p>
                    <hr />
                    <p className="total">Total Payable: <span>₹{cartTotal.toFixed(2)}</span></p>
                </div>
            </div>

            {/* POPUP OVERLAY */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Order Summary</h2>
                        <p><strong>Delivery Address:</strong></p>
                        <p>{formData.name}, {formData.phone}</p>
                        <p>{formData.address}, {formData.district}, {formData.state} - {formData.pincode}</p>
                        <hr />

                        <h3>Products</h3>
                        {items.map((item) => (
                            <div key={item.id} className="popup-cart-item">
                                <img src={`/src/assets/images/${item.img}`} alt={item.name} width="60" height="60" />
                                <div>
                                    <p>{item.name}</p>
                                    <p>₹{item.price}</p>
                                    <div className="quantity-control">
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <p className="total">Total: ₹{cartTotal.toFixed(2)}</p>
                        <button className="payment-btn" onClick={() => navigate("/payment")}>Proceed to Payment</button>
                        <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
