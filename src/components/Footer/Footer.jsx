import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSections}>
        <div className={styles.footerInfo}>
          <h2>GadgetZone</h2>
          <p>
            Discover the latest and greatest in electronic gadgets! From
            cutting-edge smartphones to must-have accessories, we've got
            everything you need to stay connected and ahead of the curve.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <h3>Shop With Us</h3>
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
          <div>
            <h3>Support</h3>
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
                <a href="/tech-support">Tech Support</a>
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
        <div data-testid="rights" className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} GadgetZone. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
