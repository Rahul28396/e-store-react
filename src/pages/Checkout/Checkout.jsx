import { Outlet } from 'react-router';
import styles from './Checkout.module.css';
import CartSummary from "../../components/CartSummary/CartSummary";

const Checkout = () => {
  return (
    <div className="container">
      <div className={styles["checkout-container"]}>
        <section className={styles["checkout-content"]}>
          <Outlet />
        </section>
        <CartSummary />
      </div>
    </div>
  );
};

export default Checkout;
