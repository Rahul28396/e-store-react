import React from "react";
import "./Tab.css";

const TabList = ({ children }) => {
  return <div className="tab-list">
    {children}
  </div>;
};

export default TabList;
