import React from "react";
import "./Tab.css";
import { useTabContext } from "./TabContextHook.js";


const Tab = ({ index, children }) => {
  const { activeTab, setActiveTab } = useTabContext();
  console.log(activeTab) // This should be managed by the parent component
  return (
    <button
      key={index}
      className={`tab-button ${activeTab === index ? "active" : ""}`}
      onClick={() => setActiveTab(index)}
      role="tab"
    >
      {children}
    </button>
  );
};

export default Tab;
