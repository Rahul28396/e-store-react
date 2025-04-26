import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchInput.module.css';

const SearchInput = () => {
    return (
        <div className={styles.searchInputContainer}>
            <FaSearch className={styles.searchIcon}/>
            <input
                type="text"
                className="search-input"
                placeholder="Search"
            />
        </div>
    );
};

export default SearchInput;