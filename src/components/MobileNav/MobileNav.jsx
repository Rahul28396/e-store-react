import { MdFavoriteBorder } from "react-icons/md";
import styles from "./MobileNav.module.css";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router";
import { IoIosLogIn } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineStore } from "react-icons/md";

const MobileNav = ({ closeSideBar }) => {
  const handleLinkClick = () => {
    if (closeSideBar) closeSideBar();
  };

  return (
    <section>
      <h3 className={styles.header}>GadgetZone</h3>
      <ul className={styles.popupNavList}>
        <li className={styles.popupNavItem}>
          <Link
            to={"/"}
            className={styles.popupNavLink}
            onClick={handleLinkClick}
          >
            <MdOutlineStore size={20} />
            <span>Home</span>
          </Link>
        </li>
        <li className={styles.popupNavItem}>
          <Link
            to={"/"}
            className={styles.popupNavLink}
            onClick={handleLinkClick}
          >
            <TbCategory size={20} />
            <span>Categories</span>
          </Link>
        </li>
        <li className={styles.popupNavItem}>
          <Link
            to={"/"}
            className={styles.popupNavLink}
            onClick={handleLinkClick}
          >
            <IoCallOutline size={20} />
            <span>Contact</span>
          </Link>
        </li>
        <li className={styles.popupNavItem}>
          <Link
            to={"/"}
            className={styles.navIcon + " " + styles.popupNavLink}
            onClick={handleLinkClick}
          >
            <MdFavoriteBorder size={20} />
            <span>Wishlist</span>
          </Link>
        </li>
        <li className={styles.popupNavItem}>
          <Link
            to={"checkout"}
            className={styles.navIcon + " " + styles.popupNavLink}
            onClick={handleLinkClick}
          >
            <IoCartOutline size={20} />
            <span>Cart</span>
          </Link>
        </li>
        <li className={styles.popupNavItem}>
          <Link
            to={"/"}
            className={styles.navIcon + " " + styles.popupNavLink}
            onClick={handleLinkClick}
          >
            <CiUser size={20} />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
      
      <ul className={`${styles.popupNavList} ${styles.footer}`}>
        <li className={styles.popupNavItem}>
          <Link
            to={"/login"}
            className={styles.popupNavLink}
            onClick={handleLinkClick}
          >
            <IoIosLogIn size={20} />
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MobileNav;
