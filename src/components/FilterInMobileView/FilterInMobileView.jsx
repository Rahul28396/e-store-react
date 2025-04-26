import React from "react";
import styles from "./FilterInMobileView.module.css";
import { IoChevronBackOutline } from "react-icons/io5";
import Filter from "../Filter/Filter";

const FilterInMobileView = ({ isOpen, setIsOpen }) => {

  return (
    <>
      {isOpen && (
        <section>
          <div className={styles.filterHeader}>
            <button
              className={styles.backButton}
              onClick={() => setIsOpen(false)}
            >
              <IoChevronBackOutline size={20} />
            </button>
            <h2>Filters</h2>
          </div>
          <Filter />

          <div className={styles.filterActions}>
            <button onClick={() => setIsOpen(false)}>Apply</button>
            <button onClick={() => setIsOpen(false)}>Clear</button>
          </div>
        </section>
      )}
    </>
  );
};

export default FilterInMobileView;
