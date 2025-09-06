import { useState } from "react";
import { FaCreditCard, FaLock, FaUser, FaCalendarAlt } from "react-icons/fa";
import styles from "./CardDetailsForm.module.css";

const CardDetailsForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === "cardNumber") {
      formattedValue = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim();
    }
    
    // Format expiry date
    if (name === "expiryDate") {
      formattedValue = value.replace(/\D/g, "").replace(/(.{2})/, "$1/").slice(0, 5);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, "").length < 16) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
    }

    if (!formData.cardHolderName || formData.cardHolderName.length < 2) {
      newErrors.cardHolderName = "Please enter the cardholder name";
    }

    if (!formData.expiryDate || formData.expiryDate.length < 5) {
      newErrors.expiryDate = "Please enter expiry date (MM/YY)";
    }

    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = "Please enter a valid CVV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Card payment submitted:", formData);
      alert("Payment processed successfully!");
    }
  };

  return (
    <div className={styles.cardFormContainer}>
      <div className={styles.formHeader}>
        <FaCreditCard className={styles.headerIcon} />
        <h3>Card Payment</h3>
        <p>Enter your card details to complete the payment</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.cardForm}>
        <div className={styles.formGroup}>
          <label htmlFor="cardNumber" className={styles.label}>
            <FaCreditCard className={styles.labelIcon} />
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            className={`${styles.input} ${errors.cardNumber ? styles.inputError : ""}`}
            maxLength="19"
          />
          {errors.cardNumber && <span className={styles.errorText}>{errors.cardNumber}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cardHolderName" className={styles.label}>
            <FaUser className={styles.labelIcon} />
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleInputChange}
            placeholder="John Doe"
            className={`${styles.input} ${errors.cardHolderName ? styles.inputError : ""}`}
          />
          {errors.cardHolderName && <span className={styles.errorText}>{errors.cardHolderName}</span>}
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="expiryDate" className={styles.label}>
              <FaCalendarAlt className={styles.labelIcon} />
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              className={`${styles.input} ${errors.expiryDate ? styles.inputError : ""}`}
              maxLength="5"
            />
            {errors.expiryDate && <span className={styles.errorText}>{errors.expiryDate}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cvv" className={styles.label}>
              <FaLock className={styles.labelIcon} />
              CVV
            </label>
            <input
              type="password"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              className={`${styles.input} ${errors.cvv ? styles.inputError : ""}`}
              maxLength="4"
            />
            {errors.cvv && <span className={styles.errorText}>{errors.cvv}</span>}
          </div>
        </div>

        <div className={styles.securityNote}>
          <FaLock className={styles.securityIcon} />
          <span>Your payment information is secure and encrypted</span>
        </div>

        <button type="submit" className={styles.submitButton}>
          <FaCreditCard className={styles.buttonIcon} />
          Pay ₹1,66,399
        </button>
      </form>
    </div>
  );
};

export default CardDetailsForm;
