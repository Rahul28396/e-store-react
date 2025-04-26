import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, onClose, position = 'right', children }) => {
    return (
            <div className={`${styles["sidebar-overlay"]} ${isOpen ? styles.open: ''}`} onClick={onClose}>
                <div
                    className={`${styles["sidebar"]} ${styles[position]}`}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
                >
                    <button className={styles["close-btn"]} onClick={onClose}>
                        &times;
                    </button>
                    <div className={styles["sidebar-content"]}>{children}</div>
                </div>
            </div>
    );
};

export default Sidebar;