import React, { useState } from "react";
import styles from "./Header.module.css";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import SearchInput from "../SearchInput/SearchInput";
import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.hamburgerMenu} onClick={togglePopup}>
            <RxHamburgerMenu size={30} />
          </div>
          <h1 className={styles.companyName}>E-Store</h1>
        </div>
        <div className={styles.searchContainer}>
          <SearchInput />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to={"/"} className={styles.navIcon + " " + styles.navLink}>
                <MdFavoriteBorder size={20} />
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to={"/"} className={styles.navIcon + " " + styles.navLink}>
                <IoCartOutline size={20} />
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to={"/"} className={styles.navIcon + " " + styles.navLink}>
                <CiUser size={20} />
              </Link>
            </li>
          </ul>

          <ul className={styles.mobileNavList}>
            <li className={styles.navItem}>
              <Link to={"/"} className={styles.navIcon + " " + styles.navLink}>
                <IoCartOutline size={20} />
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to={"/"} className={styles.navIcon + " " + styles.navLink}>
                <CiUser size={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Sidebar isOpen={isPopupOpen} onClose={togglePopup} position="left">
        <ul className={styles.popupNavList}>
          <li className={styles.popupNavItem}>
            <Link to={"/"} className={styles.popupNavLink}>
              Home
            </Link>
          </li>
          <li className={styles.popupNavItem}>
            <Link to={"/"} className={styles.popupNavLink}>
              Categories
            </Link>
          </li>
          <li className={styles.popupNavItem}>
            <Link to={"/"} className={styles.popupNavLink}>
              Contact
            </Link>
          </li>
          <li className={styles.popupNavItem}>
            <Link
              to={"/"}
              className={styles.navIcon + " " + styles.popupNavLink}
            >
              <MdFavoriteBorder size={20} />
            </Link>
          </li>
          <li className={styles.popupNavItem}>
            <Link
              to={"/"}
              className={styles.navIcon + " " + styles.popupNavLink}
            >
              <IoCartOutline size={20} />
            </Link>
          </li>
          <li className={styles.popupNavItem}>
            <Link
              to={"/"}
              className={styles.navIcon + " " + styles.popupNavLink}
            >
              <CiUser size={20} />
            </Link>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};

export default Header;
