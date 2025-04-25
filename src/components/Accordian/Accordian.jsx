import React, { Children, useState } from "react";
import styles from "./Accordian.module.css"; // Assuming you have a CSS module for styling
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useAccordian } from "./AccordianHook";

export const AccordianContainer = ({ children }) => {
  return <div className={styles.accordianContainer}>{children}</div>;
};

export const AccordianItem = ({ children, title }) => {
  const { activeAccordian, setActiveAccordian } = useAccordian();
  const isActive = activeAccordian === title;
  const [isOpen, setIsOpen] = useState(isActive);

  const toggleItem = () => {
    setIsOpen(prev => !prev);
    setActiveAccordian(isOpen ? null : title);
  };

  return (
    <div className={`${styles.accordianItem} ${isOpen ? styles.open : ""}`}>
      <div className={styles.accordianTitle} onClick={toggleItem}>
        <h3>{title}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && <div className={styles.accordianContent}>
        {children}
      </div>}
    </div>
  );
};
