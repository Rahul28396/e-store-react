import React from "react";
import "./Checkout.css"; // Assuming you have a CSS file for styles

const Checkout = () => {
  return (
    <div className="container">
      <div className="checkout-container">
        <ul className="checkout-steps-list">
          <li className="checkout-step active">1. Summary</li>
          <li className="checkout-step">2. Address</li>
          <li className="checkout-step">3. Payment</li>
        </ul>
        <div className="checkout-form">
          <section className="order-summary">
            
          </section>

          <section className="address-info active-section">
            
          </section>

          <section className="payment-info"></section>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
