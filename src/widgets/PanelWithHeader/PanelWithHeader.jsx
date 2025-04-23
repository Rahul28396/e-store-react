import styles from "./PanelWithHeader.module.css";
import { GrNext } from "react-icons/gr";

const PanelWithHeader = ({ title, onClickViewAll, children }) => {
  return (
    <section className={styles.PanelWithHeader}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.navigation}>
          <button className={styles.next} onClick={onClickViewAll}>
            <span>View All</span>
            <GrNext size={20} />
          </button>
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
};

export default PanelWithHeader;
