import { useContext } from "react";
import AccordianContext from "./AccordianContext";

export const useAccordian = () => {
    const context = useContext(AccordianContext);
    if (!context) {
        throw new Error("useAccordian must be used within an AccordianProvider");
    }
    return context;
}