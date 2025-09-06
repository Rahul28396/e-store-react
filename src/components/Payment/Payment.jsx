import { useState } from "react";
import { TabProvider } from "../UI/Tab/TabContext";
import Tab from "../UI/Tab/Tab";
import CardDetailsForm from "../CardDetailsForm/CardDetailsForm";
import UPIOptions from "../UPIOptions/UPIOptions";
import CODOption from "../CODOption/CODoption";
import RecommendedPaymentOption from "../RecommendedPaymentOption/RecommendedPaymentOption";
import styles from "./Payment.module.css";
import { FaCreditCard, FaMobile, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";

const Payment = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const paymentMethods = [
    {
      id: 1,
      title: "Recommended",
      icon: <FaShieldAlt />,
      description: "Fastest & most secure",
      component: <RecommendedPaymentOption />
    },
    {
      id: 2,
      title: "Cash on Delivery",
      icon: <FaMoneyBillWave />,
      description: "Pay when delivered",
      component: <CODOption />
    },
    {
      id: 3,
      title: "UPI Payment",
      icon: <FaMobile />,
      description: "Quick & easy",
      component: <UPIOptions />
    },
    {
      id: 4,
      title: "Card Payment",
      icon: <FaCreditCard />,
      description: "Credit/Debit card",
      component: <CardDetailsForm />
    }
  ];

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentHeader}>
        <h1 className={styles.paymentTitle}>Choose Payment Method</h1>
        <p className={styles.paymentSubtitle}>
          Select your preferred payment option to complete your order
        </p>
      </div>

      <div className={styles.paymentContent}>
        <div className={styles.paymentMethods}>
          <TabProvider value={selectedTab}>
            <div className={styles.tabContainer}>
              <TabProvider.TabList className={styles.tabList}>
                {paymentMethods.map((method) => (
                  <Tab 
                    key={method.id} 
                    index={method.id}
                    className={styles.tabButton}
                  >
                    <div className={styles.tabContent}>
                      <div className={styles.tabIcon}>{method.icon}</div>
                      <div className={styles.tabText}>
                        <span className={styles.tabTitle}>{method.title}</span>
                        <span className={styles.tabDescription}>{method.description}</span>
                      </div>
                    </div>
                  </Tab>
                ))}
              </TabProvider.TabList>

              <div className={styles.tabPanels}>
                {paymentMethods.map((method) => (
                  <TabProvider.TabPanel 
                    key={method.id} 
                    value={method.id}
                    className={styles.tabPanel}
                  >
                    <div className={styles.paymentForm}>
                      {method.component}
                    </div>
                  </TabProvider.TabPanel>
                ))}
              </div>
            </div>
          </TabProvider>
        </div>

        <div className={styles.paymentSecurity}>
          <div className={styles.securityHeader}>
            <FaShieldAlt className={styles.securityIcon} />
            <h3>Secure Payment</h3>
          </div>
          <div className={styles.securityFeatures}>
            <div className={styles.securityFeature}>
              <span className={styles.featureIcon}>🔒</span>
              <span>256-bit SSL encryption</span>
            </div>
            <div className={styles.securityFeature}>
              <span className={styles.featureIcon}>🛡️</span>
              <span>PCI DSS compliant</span>
            </div>
            <div className={styles.securityFeature}>
              <span className={styles.featureIcon}>✅</span>
              <span>Verified by Visa/Mastercard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
