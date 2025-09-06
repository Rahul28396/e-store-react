import { useState } from "react";
import { FaShieldAlt, FaCreditCard, FaMobile } from "react-icons/fa";
import CardDetailsForm from "../CardDetailsForm/CardDetailsForm";
import UPIOptions from "../UPIOptions/UPIOptions";
import styles from './RecommendedPaymentOption.module.css';

const RecommendedPaymentOption = () => {
  const [selectedOption, setSelectedOption] = useState("upi");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const recommendedOptions = [
    {
      id: "upi",
      title: "UPI Payment",
      description: "Fastest & most secure",
      icon: <FaMobile />,
      component: <UPIOptions />
    },
    {
      id: "card",
      title: "Card Payment",
      description: "Credit/Debit card",
      icon: <FaCreditCard />,
      component: <CardDetailsForm />
    }
  ];

  return (
    <div className={styles.recommendedContainer}>
      <div className={styles.recommendedHeader}>
        <FaShieldAlt className={styles.headerIcon} />
        <h3>Recommended Payment</h3>
        <p>Choose the fastest and most secure payment method</p>
      </div>

      <div className={styles.optionsContainer}>
        <div className={styles.optionsList}>
          {recommendedOptions.map((option) => (
            <label key={option.id} className={styles.optionLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={handleOptionChange}
                className={styles.radioInput}
              />
              <div className={styles.optionContent}>
                <div className={styles.optionIcon}>{option.icon}</div>
                <div className={styles.optionText}>
                  <span className={styles.optionTitle}>{option.title}</span>
                  <span className={styles.optionDescription}>{option.description}</span>
                </div>
                <div className={styles.radioIndicator}></div>
              </div>
            </label>
          ))}
        </div>

        <div className={styles.selectedOption}>
          {recommendedOptions.find(option => option.id === selectedOption)?.component}
        </div>
      </div>

      <div className={styles.securityNote}>
        <FaShieldAlt className={styles.securityIcon} />
        <span>All payments are processed securely with bank-level encryption</span>
      </div>
    </div>
  );
};

export default RecommendedPaymentOption;
