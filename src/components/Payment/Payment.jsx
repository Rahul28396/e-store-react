import { TabProvider } from "../UI/Tab/TabContext";
import Tab from "../UI/Tab/Tab";
import CardDetailsForm from "../CardDetailsForm/CardDetailsForm";
import UPIOptions from "../UPIOptions/UPIOptions";
import CODOption from "../CODOption/CODoption";
import RecommendedPaymentOption from "../RecommendedPaymentOption/RecommendedPaymentOption";

const Payment = () => {

  return (
    <div>
      <h3>Payment Options</h3>
      <TabProvider value={1}>
        <TabProvider.TabList>
          <Tab index={1}>Recommended</Tab>
          <Tab index={2}>C.O.D</Tab>
          <Tab index={3}>UPI</Tab>
          <Tab index={4}>Card payment</Tab>
        </TabProvider.TabList>
        <TabProvider.TabPanel value={1}>
          <RecommendedPaymentOption />
        </TabProvider.TabPanel>
        <TabProvider.TabPanel value={2}>
          <CODOption />
        </TabProvider.TabPanel>
        <TabProvider.TabPanel value={3}>
          <UPIOptions />
        </TabProvider.TabPanel>
        <TabProvider.TabPanel value={4}>
            <CardDetailsForm />
        </TabProvider.TabPanel>
      </TabProvider>
    </div>
  );
};

export default Payment;
