import { Outlet, useLocation,  } from 'react-router';
import styles from './Checkout.module.css';
import CartSummary from "../../components/CartSummary/CartSummary";

const Checkout = () => {
  const { pathname } = useLocation();

  const showSummary = !pathname.includes('payment')

  return (
    <div className="container">
      <div className={styles["checkout-container"]}>
        <section className={styles["checkout-content"]} style={{ width: !showSummary ? '100%': '' }}>
          <Outlet />
        </section>
        {showSummary && <CartSummary />}
      </div>
    </div>
  );
};

export default Checkout;
