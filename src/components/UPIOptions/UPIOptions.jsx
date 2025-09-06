import { useState } from "react";
import { FaMobile, FaCheckCircle, FaQrcode } from "react-icons/fa";
import styles from "./UPIOptions.module.css";

const UPIOptions = () => {
  const [upiId, setUpiId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const upiApps = [
    { name: "PhonePe", icon: "📱", color: "#5f259f" },
    { name: "Google Pay", icon: "💳", color: "#4285f4" },
    { name: "Paytm", icon: "💰", color: "#00baf2" },
    { name: "BHIM", icon: "🏦", color: "#ff6b35" }
  ];

  const handleVerify = async () => {
    if (!upiId.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsVerified(true);
      setIsLoading(false);
    }, 1500);
  };

  const handlePay = () => {
    if (!isVerified) {
      alert("Please verify your UPI ID first");
      return;
    }
    alert(`Payment initiated with UPI ID: ${upiId}`);
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
    setIsVerified(false);
  };

  return (
    <div className={styles.upiContainer}>
      <div className={styles.upiHeader}>
        <FaMobile className={styles.headerIcon} />
        <h3>UPI Payment</h3>
        <p>Pay securely using your UPI ID</p>
      </div>

      <div className={styles.upiApps}>
        <h4>Supported UPI Apps</h4>
        <div className={styles.appsGrid}>
          {upiApps.map((app, index) => (
            <div key={index} className={styles.appItem}>
              <span className={styles.appIcon} style={{ backgroundColor: app.color }}>
                {app.icon}
              </span>
              <span className={styles.appName}>{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handlePay(); }} className={styles.upiForm}>
        <div className={styles.formGroup}>
          <label htmlFor="upiId" className={styles.label}>
            <FaMobile className={styles.labelIcon} />
            UPI ID
          </label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="upiId"
              placeholder="Enter your UPI ID (e.g., 9876543210@paytm)"
              value={upiId}
              onChange={handleUpiIdChange}
              className={`${styles.input} ${isVerified ? styles.inputVerified : ""}`}
              required
            />
            {isVerified && <FaCheckCircle className={styles.verifiedIcon} />}
          </div>
          <p className={styles.helpText}>
            Enter your UPI ID in the format: mobile@bankname or name@bankname
          </p>
        </div>

        <button 
          type="button" 
          onClick={handleVerify}
          disabled={!upiId.trim() || isLoading}
          className={styles.verifyButton}
        >
          {isLoading ? "Verifying..." : "Verify UPI ID"}
        </button>

        <div className={styles.qrOption}>
          <div className={styles.qrHeader}>
            <FaQrcode className={styles.qrIcon} />
            <span>Or scan QR code</span>
          </div>
          <div className={styles.qrPlaceholder}>
            <FaQrcode className={styles.qrPlaceholderIcon} />
            <p>QR Code will be generated here</p>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={!isVerified}
          className={styles.payButton}
        >
          <FaMobile className={styles.buttonIcon} />
          Pay ₹1,66,399
        </button>
      </form>
    </div>
  );
};

export default UPIOptions;
