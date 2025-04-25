import React from 'react';
import styles from './Breadcumb.module.css'; // Assuming you have a CSS module for styling
import { Link } from 'react-router';

const Breadcrumb = ({ items }) => {
    return (
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            {items.map((item, index) => {
                const isLastItem = index === items.length - 1;
                return (
                    <span key={index} className={styles.breadcrumbItem}>
                        {item.link && !isLastItem ? (
                            <Link to={item.link} className={styles.breadcrumbLink}>
                                {item.label}
                            </Link>
                        ) : (
                            <span className={`${styles.breadcrumbLink} ${isLastItem ? styles.active : ''}`}>
                                {item.label}
                            </span>
                        )}
                        {!isLastItem && <span className={styles.breadcrumbSeparator}>/</span>}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;