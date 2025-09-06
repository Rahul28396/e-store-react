import { useState } from "react";
import { FaMoneyBillWave, FaTruck, FaClock, FaCheckCircle } from "react-icons/fa";
import styles from "./CODOption.module.css";

const CODOption = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handlePlaceOrder = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      alert("Order placed successfully! You will receive a confirmation call shortly.");
    }, 1000);
  };

  const codFeatures = [
    {
      icon: <FaTruck />,
      title: "Cash on Delivery",
      description: "Pay when your order arrives"
    },
    {
      icon: <FaClock />,
      title: "No Prepayment",
      description: "No advance payment required"
    },
    {
      icon: <FaCheckCircle />,
      title: "Secure Delivery",
      description: "Verify before payment"
    }
  ];

  return (
    <div className={styles.codContainer}>
      <div className={styles.codHeader}>
        <FaMoneyBillWave className={styles.headerIcon} />
        <h3>Cash on Delivery</h3>
        <p>Pay when your order is delivered to your doorstep</p>
      </div>

      <div className={styles.codFeatures}>
        {codFeatures.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <div className={styles.featureContent}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.codInfo}>
        <div className={styles.infoCard}>
          <h4>COD Charges</h4>
          <div className={styles.chargeDetails}>
            <div className={styles.chargeItem}>
              <span>Order Amount</span>
              <span>₹1,66,399</span>
            </div>
            <div className={styles.chargeItem}>
              <span>COD Fee</span>
              <span>₹7</span>
            </div>
            <div className={styles.chargeItemTotal}>
              <span>Total Amount</span>
              <span>₹1,66,406</span>
            </div>
          </div>
        </div>

        <div className={styles.infoCard}>
          <h4>Important Notes</h4>
          <ul className={styles.notesList}>
            <li>Please keep exact change ready for delivery</li>
            <li>You can verify the order before making payment</li>
            <li>COD is available for orders above ₹500</li>
            <li>Delivery person will collect payment upon delivery</li>
          </ul>
        </div>
      </div>

      <div className={styles.codActions}>
        <button 
          onClick={handlePlaceOrder}
          disabled={isConfirmed}
          className={styles.placeOrderButton}
        >
          {isConfirmed ? (
            <>
              <FaCheckCircle className={styles.buttonIcon} />
              Order Placed Successfully!
            </>
          ) : (
            <>
              <FaTruck className={styles.buttonIcon} />
              Place Order with COD
            </>
          )}
        </button>
        
        <p className={styles.confirmationText}>
          You will receive a confirmation call within 30 minutes
        </p>
      </div>
    </div>
  );
};

export default CODOption;
