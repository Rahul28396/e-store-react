import { createContext, useState } from "react";
import { AccordianContainer, AccordianItem } from "./Accordian";

const AccordianContext = createContext();

export const AccordianProvider = ({ children, value }) => {
  const [activeAccordian, setActiveAccordian] = useState(value);

  const contextValue = {
    activeAccordian,
    setActiveAccordian,
  };

  return (
    <AccordianContext.Provider value={contextValue}>
      {children}
    </AccordianContext.Provider>
  );
};

AccordianProvider.Container = AccordianContainer
AccordianProvider.Item = AccordianItem;

export default AccordianContext;