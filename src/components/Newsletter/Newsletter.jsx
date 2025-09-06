import React, { useState } from "react";
import styles from "./Newsletter.module.css";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
      console.log("Newsletter subscription:", email);
    }
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.iconContainer}>
              <FaEnvelope className={styles.icon} />
            </div>
            <h2 className={styles.title}>Stay Updated</h2>
            <p className={styles.subtitle}>
              Subscribe to our newsletter and get the latest updates on new products, 
              exclusive deals, and special offers delivered straight to your inbox.
            </p>
          </div>
          
          <div className={styles.formContainer}>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={styles.input}
                    required
                  />
                  <button type="submit" className={styles.submitButton}>
                    <FaPaperPlane className={styles.buttonIcon} />
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <p>Thank you for subscribing! You'll receive our updates soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

