import { useLocation, useNavigate } from "react-router";
import styles from './CartSummary.module.css';
import { useEffect, useState } from "react";
import { FaTag, FaArrowRight } from "react-icons/fa";

const CartSummary = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [next, setNext] = useState('address');
  const [promoCode, setPromoCode] = useState('');

  useEffect(() => {
    switch (pathname) {
      case "/checkout/address":
        setNext("payment");
        break;
      case "/checkout/payment":
        setNext("/");
        break;
      default:
        setNext('address');
        break;
    }
  }, [pathname]);

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const applyPromoCode = () => {
    console.log("Apply promo code:", promoCode);
  };

  const orderSummary = [
    { label: "Total MRP", value: "₹1,84,888", type: "regular" },
    { label: "Discount on MRP", value: "-₹18,489", type: "discount" },
    { label: "Coupon Discount", value: "-₹5,000", type: "discount" },
    { label: "Platform Fee", value: "₹2,000", type: "regular" },
    { label: "Shipping Fee", value: "₹3,000", type: "regular" },
    { label: "Total Amount", value: "₹1,66,399", type: "total" },
  ];

  return (
    <div className={styles.cartSummary}>
      <div className={styles.summaryHeader}>
        <h3 className={styles.summaryTitle}>Price Details</h3>
        <span className={styles.itemCount}>(4 items)</span>
      </div>

      <div className={styles.promoSection}>
        <div className={styles.promoInputContainer}>
          <FaTag className={styles.promoIcon} />
          <input
            className={styles.promoInput}
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
          <button 
            className={styles.applyButton}
            onClick={applyPromoCode}
            disabled={!promoCode.trim()}
          >
            Apply
          </button>
        </div>
      </div>

      <div className={styles.orderSummary}>
        {orderSummary.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.summaryItem} ${item.type === 'total' ? styles.totalItem : ''}`}
          >
            <span className={styles.itemLabel}>{item.label}</span>
            <span className={`${styles.itemValue} ${item.type === 'discount' ? styles.discountValue : ''}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.savingsInfo}>
        <span className={styles.savingsText}>You save ₹23,489 on this order</span>
      </div>

      <button
        className={styles.checkoutButton}
        onClick={() => navigate(next)}
      >
        <span>{pathname === "/checkout/payment" ? "Place Order" : "Proceed to Checkout"}</span>
        <FaArrowRight className={styles.buttonIcon} />
      </button>
    </div>
  );
};

export default CartSummary;
