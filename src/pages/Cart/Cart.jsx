import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router";

const Cart = () => {
  const cartProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/product-images/image1.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      image: "/product-images/image2.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      image: "/product-images/image3.png",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className={styles["cart-container"]}>
        <div className={styles["cart-items"]}>
          <div className={styles["cart-items-header"]}>
            <h2 className={styles["cart-items-title"]}>Cart Items (3)</h2>
            <button className={styles["clear-cart-button"]}>CLEAR CART</button>
          </div>

          {cartProducts.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onRemove={(id) => console.log("Remove item with id:", id)}
              onUpdateQuantity={(id, quantity) =>
                console.log(
                  "Update item with id:",
                  id,
                  "to quantity:",
                  quantity
                )
              }
            />
          ))}
        </div>
        <div className={styles["cart-summary"]}>
          <h4 className={styles["cart-summary-header"]}>Price Details (3 Items)</h4>
          <div className={styles["promo"]}>
            <label
              className={styles["cart-summary-label"]}
              htmlFor="promo-code"
            >
              Promo Code:
            </label>
            <input
              className={styles["cart-summary-input"]}
              type="text"
              id="promo-code"
              placeholder="Enter promo code"
            />
          </div>
          <div className={styles["order-summary"]}>
            <p className={`${styles["order-summary-item"]} font-bold`}>
              <span>Total MRP:</span>
              <span>$100.00</span>
            </p>
            <p className={styles["order-summary-item"]}>
              <span>Tax:</span>
              <span>$0.00</span>
            </p>
            <p className={styles["order-summary-item"]}>
              <span>Discount on MRP:</span>
              <span>$25.00</span>
            </p>
             <p className={styles["order-summary-item"]}>
              <span>Coupon Discount:</span>
              <span>$10.00</span>
            </p>
            <p className={`${styles["order-summary-item"]}`}>
              <span>Platform Fee:</span>
              <span>$2.00</span>
            </p>
            <p className={`${styles["order-summary-item"]}`}>
              <span>Shipping Fee:</span>
              <span>$3.00</span>
            </p>
            <p className={`${styles["order-summary-item"]} font-bold`}>
              <span>Total amount:</span>
              <span>$60.00</span>
            </p>
          </div>
          <button className={styles["checkout-button"]} onClick={()=> navigate('/checkout')}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
