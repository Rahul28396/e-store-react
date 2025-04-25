import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggleContainer} onClick={toggleTheme}>
      <span className={`${styles.icon} ${styles.left} ${theme === 'light' ? styles.light : ''}`}>
        <FaSun />
      </span>
      <span className={`${styles.icon} ${styles.right} ${theme === 'dark' ? styles.dark : ''}`}>
        <FaMoon/>
      </span>
    </button>
  );
};

export default ThemeToggle;
