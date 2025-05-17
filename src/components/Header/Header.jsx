import { useState } from "react";
import styles from "./Header.module.css";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../UI/Sidebar/Sidebar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import SearchInput from "../UI/SearchInput/SearchInput";
import Overlay from "../UI/Overlay/Overlay";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import MobileNav from "../MobileNav/MobileNav";

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
          <h2 className={styles.companyName}>
            <Link to={"/"} className={styles.logoLink}>
              GadgetZone
            </Link>
          </h2>
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
              <Link
                to={"/checkout"}
                className={styles.navIcon + " " + styles.navLink}
              >
                <IoCartOutline size={20} />
              </Link>
            </li>
            <li className={styles.navItem}>
              <Overlay>
                <Overlay.Trigger>
                  <CiUser size={20} />
                </Overlay.Trigger>
                <Overlay.Content className={styles["overlay-content-top"]}>
                  <ProfileDropdown />
                </Overlay.Content>
              </Overlay>
            </li>
            <li className={styles.navItem}>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </header>

      <Sidebar isOpen={isPopupOpen} onClose={togglePopup} position="left">
        <MobileNav closeSideBar={togglePopup}/>
      </Sidebar>
    </>
  );
};

export default Header;
