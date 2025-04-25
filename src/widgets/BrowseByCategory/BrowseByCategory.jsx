import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { ImHeadphones } from "react-icons/im";
import { IoGameControllerSharp } from "react-icons/io5";
import styles from "./BrowseByCategory.module.css";
import PanelWithHeader from "../PanelWithHeader/PanelWithHeader";

const BrowseByCategory = () => {
  return (
    <PanelWithHeader 
      title="Browse By Category" 
      onClickViewAll={() => { console.log("View All Clicked"); }}
    >
      <div className={styles["category-list"]}>
        <div className={styles["category-item"]}>
          <span>
            <CiMobile3 size={30} />
          </span>
          <h3 className={styles.title}>Mobiles</h3>
        </div>
        <div className={styles["category-item"]}>
          <span>
            <BsSmartwatch size={30} />
          </span>
          <h3 className={styles.title}>Smart Watches</h3>
        </div>
        <div className={styles["category-item"]}>
          <span>
            <BsCamera size={30} />
          </span>
          <h3 className={styles.title}>Cameras</h3>
        </div>
        <div className={styles["category-item"]}>
          <span>
            <RiComputerLine size={30} />
          </span>
          <h3 className={styles.title}>Computers</h3>
        </div>
        <div className={styles["category-item"]}>
          <span>
            <ImHeadphones size={30} />
          </span>
          <h3 className={styles.title}>Headphones</h3>
        </div>
        <div className={styles["category-item"]}>
          <span>
            <IoGameControllerSharp size={30} />
          </span>
          <h3 className={styles.title}>Games</h3>
        </div>
      </div>
    </PanelWithHeader>
  );
};

export default BrowseByCategory;
