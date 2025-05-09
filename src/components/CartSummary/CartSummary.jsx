import { useLocation, useNavigate } from "react-router";
import styles from './CartSummary.module.css';
import { useEffect, useState } from "react";

const CartSummary = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [ next, setNext ] = useState('address')

  useEffect(()=> {
    console.log(pathname)
    switch (pathname) {
      case "/checkout/address":
        setNext("payment");
        break;
      case "/checkout/payment":
        setNext("/");
        break;
      default:
        break;
    }
  }, [pathname])

  return (
    <div className={styles["cart-summary"]}>
      <h4 className={styles["cart-summary-header"]}>Price Details (3 Items)</h4>
      <div className={styles["promo"]}>
        <label className={styles["cart-summary-label"]} htmlFor="promo-code">
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
      <button
        className={styles["checkout-button"]}
        onClick={() => navigate(next)}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
