import { createContext, useState } from "react";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import Tab from "./Tab";

const TabContext = createContext();

export const TabProvider = ({ children, value }) => {
  const [activeTab, setActiveTab] = useState(value);

  const contextValue = {
    activeTab,
    setActiveTab,
  };

  return (
    <TabContext.Provider value={contextValue}>
      {children}
    </TabContext.Provider>
  );
};

TabProvider.Tab = Tab
TabProvider.TabList = TabList;
TabProvider.TabPanel = TabPanel;


export default TabContext;
