import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSections}>
        <div className={styles.footerInfo}>
          <h2>E-Store</h2>
          <p>
            Your one-stop shop for everything! Shop now and enjoy great deals.
            Your one-stop shop for everything! Shop now and enjoy great deals.
            Your one-stop shop for everything! Shop now and enjoy great deals.
            Your one-stop shop for everything! Shop now and enjoy great deals.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div >
            <h3>Services</h3>
            <ul>
              <li className={styles.footerLink}>
                <a href="/customer-service">Customer Service</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/about-us">About Us</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/careers">Careers</a>
              </li>
            </ul>
          </div>
          <div >
            <h3>Assistance to buyer</h3>
            <ul>
              <li className={styles.footerLink}>
                <a href="/order-tracking">Order Tracking</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/returns">Returns</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/shipping">Shipping</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/payment-options">Payment Options</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/faq">FAQ</a>
              </li>
              <li className={styles.footerLink}>
                <a href="/feedback">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.footerSections}>
        <div className={styles.footerSocial}>
          <a
            href="https://www.facebook.com"
            className={styles.footerSocialLink}
          >
            <FaFacebookF /> Facebook
          </a>
          <a href="https://www.twitter.com" className={styles.footerSocialLink}>
            <FaTwitter /> Twitter
          </a>
          <a
            href="https://www.instagram.com"
            className={styles.footerSocialLink}
          >
            <FaInstagram /> Instagram
          </a>
        </div>
        <div className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} E-Store. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
