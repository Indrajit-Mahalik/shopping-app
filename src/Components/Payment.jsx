// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


// function Payment() {
//     const navigate = useNavigate();
//     const [selectedPayment, setSelectedPayment] = useState("UPI");

//     const handlePaymentChange = (e) => {
//         setSelectedPayment(e.target.value);
//     };

//     return (
//         <div className="payment-container">
//             <h2>Payment Options</h2>
//             <div className="payment-section">
//                 <label>
//                     <input type="radio" value="UPI" checked={selectedPayment === "UPI"} onChange={handlePaymentChange} />
//                     UPI
//                 </label>
//                 {selectedPayment === "UPI" && (
//                     <div className="upi-options">
//                         <label><input type="radio" name="upi" /> PhonePe</label>
//                         <label><input type="radio" name="upi" /> Your UPI ID</label>
//                     </div>
//                 )}

//                 <label>
//                     <input type="radio" value="Wallets" checked={selectedPayment === "Wallets"} onChange={handlePaymentChange} />
//                     Wallets
//                 </label>

//                 <label>
//                     <input type="radio" value="Card" checked={selectedPayment === "Card"} onChange={handlePaymentChange} />
//                     Credit / Debit / ATM Card
//                 </label>

//                 <label>
//                     <input type="radio" value="Net Banking" checked={selectedPayment === "Net Banking"} onChange={handlePaymentChange} />
//                     Net Banking
//                 </label>

//                 <label>
//                     <input type="radio" value="COD" checked={selectedPayment === "COD"} onChange={handlePaymentChange} />
//                     Cash on Delivery
//                 </label>
//             </div>

//             <button className="pay-btn" onClick={() => navigate("/confirmation")}>Pay Now</button>
//         </div>
//     );
// }

// export default Payment;


// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";


// function Payment() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [selectedPayment, setSelectedPayment] = useState("UPI");
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         if (location.state && location.state.product) {
//             setProduct(location.state.product);
//         }
//     }, [location.state]);

//     const handlePaymentChange = (e) => {
//         setSelectedPayment(e.target.value);
//     };

//     return (
//         <div className="payment-wrapper">
//             <div className="payment-container">
//                 <h2 className="payment-title">Payment Options</h2>
//                 <div className="timer">Complete payment in ⏳ 00:13:44</div>

//                 <div className="payment-section">
//                     <label>
//                         <input type="radio" value="UPI" checked={selectedPayment === "UPI"} onChange={handlePaymentChange} />
//                         UPI
//                     </label>
//                     {selectedPayment === "UPI" && (
//                         <div className="upi-options">
//                             <label><input type="radio" name="upi" /> PhonePe</label>
//                             <label><input type="radio" name="upi" /> Your UPI ID</label>
//                         </div>
//                     )}

//                     <label>
//                         <input type="radio" value="Wallets" checked={selectedPayment === "Wallets"} onChange={handlePaymentChange} />
//                         Wallets
//                     </label>

//                     <label>
//                         <input type="radio" value="Card" checked={selectedPayment === "Card"} onChange={handlePaymentChange} />
//                         Credit / Debit / ATM Card
//                     </label>

//                     <label>
//                         <input type="radio" value="Net Banking" checked={selectedPayment === "Net Banking"} onChange={handlePaymentChange} />
//                         Net Banking
//                     </label>

//                     <label>
//                         <input type="radio" value="COD" checked={selectedPayment === "COD"} onChange={handlePaymentChange} />
//                         Cash on Delivery
//                     </label>
//                 </div>

//                 <button className="pay-btn" onClick={() => navigate("/confirmation")}>Pay Now</button>
//             </div>

//             {/* Right-side: Show only selected product */}
//             {product && (
//                 <div className="product-summary">
//                     <h3>Price Details</h3>
//                     <div className="product-item">
//                         <img src={product.image} alt={product.name} />
//                         <div>
//                             <p>{product.name}</p>
//                             <p>₹{product.price}</p>
//                         </div>
//                     </div>
//                     <div className="total-amount">
//                         <p>Total Payable:</p>
//                         <p>₹{product.price}</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Payment;


// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";


// function Payment() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [selectedPayment, setSelectedPayment] = useState("UPI");
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         if (location.state && location.state.product) {
//             setProduct(location.state.product);
//         }
//     }, [location.state]);

//     const handlePaymentChange = (e) => {
//         setSelectedPayment(e.target.value);
//     };

//     return (
//         <div className="payment-wrapper">
//             <div className="payment-container">
//                 <h2 className="payment-title">Payment Options</h2>
               

//                 <div className="payment-section">
//                     <label className="payment-option">
//                         <input type="radio" value="UPI" checked={selectedPayment === "UPI"} onChange={handlePaymentChange} />
//                         UPI
//                     </label>
//                     {selectedPayment === "UPI" && (
//                         <div className="upi-options">
//                             <label><input type="radio" name="upi" /> PhonePe</label>
//                             <label><input type="radio" name="upi" /> Your UPI ID</label>
//                         </div>
//                     )}

//                     <label className="payment-option">
//                         <input type="radio" value="Wallets" checked={selectedPayment === "Wallets"} onChange={handlePaymentChange} />
//                         Wallets
//                     </label>

//                     <label className="payment-option">
//                         <input type="radio" value="Card" checked={selectedPayment === "Card"} onChange={handlePaymentChange} />
//                         Credit / Debit / ATM Card
//                     </label>

//                     <label className="payment-option">
//                         <input type="radio" value="Net Banking" checked={selectedPayment === "Net Banking"} onChange={handlePaymentChange} />
//                         Net Banking
//                     </label>

//                     <label className="payment-option">
//                         <input type="radio" value="COD" checked={selectedPayment === "COD"} onChange={handlePaymentChange} />
//                         Cash on Delivery
//                     </label>
//                 </div>

//                 <button className="pay-btn" onClick={() => navigate("/confirmation")}>Pay Now</button>
//             </div>

//             {/* Right-side: Show product summary */}
//             <div className="order-summary">
//                 <h3>Price Details</h3>
//                 {product ? (
//                     <div className="product-item">
//                         <img src={product.image} alt={product.name} />
//                         <div>
//                             <p>{product.name}</p>
//                             <p>₹{product.price}</p>
//                         </div>
//                     </div>
//                 ) : (
//                     <p>No product selected</p>
//                 )}
//                 <div className="total-amount">
//                     <p>Total Payable:</p>
//                     <p>₹{product ? product.price : "0"}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Payment;



// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// function Payment() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [selectedPayment, setSelectedPayment] = useState("UPI");
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         if (location.state && location.state.product) {
//             setProduct(location.state.product);
//         }
//     }, [location.state]);

//     const handlePaymentChange = (e) => {
//         setSelectedPayment(e.target.value);
//     };

//     const handlePayment = async () => {
//         if (!product) return alert("No product selected");

//         try {
//             const token = "YOUR_ACCESS_TOKEN"; // Replace with your Shiprocket token

//             const orderData = {
//                 order_id: `ORD${Date.now()}`,
//                 order_date: new Date().toISOString().split("T")[0],
//                 pickup_location: "Primary",
//                 billing_customer_name: "Indrajit Mahalik",
//                 billing_last_name: "Mahalik",
//                 billing_address: "Acharya vihar",
//                 billing_city: "Bhubaneswar",
//                 billing_pincode: "751022",
//                 billing_state: "Odisha",
//                 billing_country: "India",
//                 billing_email: "indrajitmahalik38@gmail.com",
//                 billing_phone: "9337958675",
                
//                 "shipping_is_billing": true, 
//                 order_items: [
//                     {
//                         name: product.name,
//                         sku: "PROD001",
//                         units: 1,
//                         selling_price: product.price,
//                         discount: "",
//                         tax: "",
//                         hsn: 441122
//                     }
//                 ],
//                 payment_method: selectedPayment === "COD" ? "COD" : "Prepaid",
//                 sub_total: product.price,
//                 length: 10,
//                 breadth: 10,
//                 height: 10,
//                 weight: 0.5
//             };

//             const response = await axios.post(
//                 "https://apiv2.shiprocket.in/v1/external/orders/create/",
//                 orderData,
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                         "Authorization": `Bearer ${token}`
//                     }
//                 }
//             );

//             console.log("Order Created:", response.data);
//             alert("Order Created Successfully!");

//             // Navigate to Confirmation Page
//             navigate("/confirmation");
//         } catch (error) {
//             console.error("Error creating order:", error);
//             alert("Order creation failed!");
//         }
//     };

//     return (
//         <div className="payment-wrapper">
//             <div className="payment-container">
//                 <h2 className="payment-title">Payment Options</h2>

//                 <div className="payment-section">
//                     <label className="payment-option">
//                         <input type="radio" value="UPI" checked={selectedPayment === "UPI"} onChange={handlePaymentChange} />
//                         UPI
//                     </label>
//                     <label className="payment-option">
//                         <input type="radio" value="COD" checked={selectedPayment === "COD"} onChange={handlePaymentChange} />
//                         Cash on Delivery
//                     </label>
//                 </div>

//                 <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
//             </div>

//             <div className="order-summary">
//                 <h3>Price Details</h3>
//                 {product ? (
//                     <div className="product-item">
//                         <img src={product.image} alt={product.name} />
//                         <div>
//                             <p>{product.name}</p>
//                             <p>₹{product.price}</p>
//                         </div>
//                     </div>
//                 ) : (
//                     <p>No product selected</p>
//                 )}
//                 <div className="total-amount">
//                     <p>Total Payable:</p>
//                     <p>₹{product ? product.price : "0"}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Payment;


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Payment() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedPayment, setSelectedPayment] = useState("UPI");
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (location.state && location.state.product) {
            setProduct(location.state.product);
        }
    }, [location.state]);

    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
    };

    const getOrderData = () => {
        if (!product) return null;
    
        return {
            order_id: "ORD123456",
            order_date: "2025-03-31",
            pickup_location: "Primary",
    
            // Billing Address
            billing_customer_name: "Indrajit",
            billing_last_name: "Mahalik",
            billing_address: "Acharya vihar",
            billing_city: "Bhubaneswar",
            billing_pincode: "751022",
            billing_state: "Odisha",
            billing_country: "India",
            billing_email: "indrajitmahalik38@gmail.com",
            billing_phone: "9337958675",
    
            // Shipping Address (copy same as billing)
            shipping_customer_name: "Ashutosh",
            shipping_last_name: "Samal",
            shipping_address: "Rasulgarh",
            shipping_city: "Bhubaneswar",
            shipping_pincode: "751010",
            shipping_state: "Odisha",
            shipping_country: "India",
            shipping_email: "ashutoshsamal55@gmail.com",
            shipping_phone: "6372225445",
    
            order_items: [
                {
                    name: product.name,
                    sku: "PROD001",
                    units: 1,
                    selling_price: Number(product.price),
                    discount: "",
                    tax: "",
                    hsn: 441122
                }
            ],
            payment_method: "Prepaid",
            sub_total: Number(product.price),
            length: 10,
            breadth: 10,
            height: 10,
            weight: 0.5
        };
    };
    

    const handlePayment = async () => {
        if (!product) return alert("No product selected");

        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYxMjIwNzcsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzQ0MjYzMTIzLCJqdGkiOiJPOWhCcVdwUTc0c1JwYUN5IiwiaWF0IjoxNzQzMzk5MTIzLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTc0MzM5OTEyMywiY2lkIjo1ODcxNDA1LCJ0YyI6MzYwLCJ2ZXJib3NlIjpmYWxzZSwidmVuZG9yX2lkIjowLCJ2ZW5kb3JfY29kZSI6IiJ9.1uQCOVQfcgnf3iXIooC79rDMguPabnf3iYw5LQfjx2Y"; // Replace with your Shiprocket token
            const orderData = getOrderData();
            if (!orderData) return;

            const response = await axios.post(
                "https://apiv2.shiprocket.in/v1/external/orders/create/",
                orderData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            console.log("Order Created:", response.data);
            alert("Order Created Successfully!");

            // Navigate to Confirmation Page
            navigate("/confirmation");
        } catch (error) {
            console.error("Error creating order:", error.response?.data || error.message);
            alert("Order creation failed! " + (error.response?.data?.message || "Unknown error"));
        }
    };

    return (
        <div className="payment-wrapper">
            <div className="payment-container">
                <h2 className="payment-title">Payment Options</h2>

                <div className="payment-section">
                    <label className="payment-option">
                        <input type="radio" value="UPI" checked={selectedPayment === "UPI"} onChange={handlePaymentChange} />
                        UPI
                    </label>
                    <label className="payment-option">
                        <input type="radio" value="COD" checked={selectedPayment === "COD"} onChange={handlePaymentChange} />
                        Cash on Delivery
                    </label>
                </div>

                <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
            </div>

            <div className="order-summary">
                <h3>Price Details</h3>
                {product ? (
                    <div className="product-item">
                        <img src={product.image} alt={product.name} />
                        <div>
                            <p>{product.name}</p>
                            <p>₹{product.price}</p>
                        </div>
                    </div>
                ) : (
                    <p>No product selected</p>
                )}
                <div className="total-amount">
                    <p>Total Payable:</p>
                    <p>₹{product ? product.price : "0"}</p>
                </div>
            </div>
        </div>
    );
}

export default Payment;
