import React from "react";
import styles from "./Scrollbar.module.css";

const Scrollbar = ({ className, direction, children }) => {
  return (
    <div className={`${styles.scrollbar} ${styles[direction]} ${className}`}>
      {children}
    </div>
  );
};

export default Scrollbar;
