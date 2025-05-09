import { useState } from "react";
import CardDetailsForm from "../CardDetailsForm/CardDetailsForm";
import UPIOptions from "../UPIOptions/UPIOptions";
import './RecommendedPaymentOption.css';

const RecommendedPaymentOption = () => {
  const [selectedOption, setSelectedOption] = useState("PhonePe");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="option">
        <input
          type="radio"
          value="PhonePe"
          checked={selectedOption === "PhonePe"}
          onChange={handleOptionChange}
        />
        <label>UPI Options</label>
      </div>

      
      {selectedOption === "PhonePe" && (
        <section className="option-section">
          <UPIOptions />
        </section>
      )}

      <div className="option">
        <input
          type="radio"
          value="Card"
          checked={selectedOption === "Card"}
          onChange={handleOptionChange}
        />
        <label>Card Options</label>
      </div>

      {selectedOption === "Card" && (
        <section className="option-section">
          <CardDetailsForm />
        </section>
      )}
    </div>
  );
};

export default RecommendedPaymentOption;
