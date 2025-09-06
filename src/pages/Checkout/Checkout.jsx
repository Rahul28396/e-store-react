import { Outlet, useLocation } from 'react-router';
import styles from './Checkout.module.css';
import CartSummary from "../../components/CartSummary/CartSummary";
import Breadcrumb from "../../components/UI/Breadcumb/Breadcumb";

const Checkout = () => {
  const { pathname } = useLocation();

  const showSummary = !pathname.includes('payment');

  const getBreadcrumbItems = () => {
    const items = [
      { label: 'Cart', path: '/checkout' },
    ];

    if (pathname.includes('address')) {
      items.push({ label: 'Address', path: '/checkout/address' });
    } else if (pathname.includes('payment')) {
      items.push(
        { label: 'Address', path: '/checkout/address' },
        { label: 'Payment', path: '/checkout/payment' }
      );
    }

    return items;
  };

  return (
    <div className="container">
      <div className={styles["checkout-container"]}>
        <div className={styles["checkout-content"]} style={{ width: !showSummary ? '100%': '' }}>
          <Breadcrumb items={getBreadcrumbItems()} />
          <Outlet />
        </div>
        {showSummary && <CartSummary />}
      </div>
    </div>
  );
};

export default Checkout;
