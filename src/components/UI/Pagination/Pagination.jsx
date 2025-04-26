import React, { useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import styles from "./Pagination.module.css";

const Pagination = ({ totalItems, itemsPerPageOptions, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            onPageChange(newPage, itemsPerPage);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            onPageChange(newPage, itemsPerPage);
        }
    };

    const handleItemsPerPageChange = (e) => {
        const newItemsPerPage = parseInt(e.target.value, 10);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page
        onPageChange(1, newItemsPerPage);
    };

    return (
        <div className={styles.pagination}>
            <button
                className={styles.paginationButton} 
                onClick={handlePrev} 
                disabled={currentPage === 1}
            >
                <IoChevronBackOutline size={20} />
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button 
                onClick={handleNext} 
                disabled={currentPage === totalPages}
                className={styles.paginationButton}>
                <IoChevronForwardOutline size={20} />
            </button>
            <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                {itemsPerPageOptions.map((option) => (
                    <option key={option} value={option}>
                        {option} items/page
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Pagination;