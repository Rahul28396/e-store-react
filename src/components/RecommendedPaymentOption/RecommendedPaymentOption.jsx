import React, { useState } from "react";
import CardDetailsForm from "../CardDetailsForm/CardDetailsForm";

const RecommendedPaymentOption = () => {
  const [selectedOption, setSelectedOption] = useState("PhonePe");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="PhonePe"
            checked={selectedOption === "PhonePe"}
            onChange={handleOptionChange}
          />
          PhonePe
        </label>

        {selectedOption === "PhonePe" && (
          <form>
            <h3>PhonePe Payment</h3>
            <div>
              <label>
                PhonePe ID:
                <input type="text" placeholder="Enter your PhonePe ID" />
              </label>
            </div>
            <button type="submit">Pay with PhonePe</button>
          </form>
        )}
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="Card"
            checked={selectedOption === "Card"}
            onChange={handleOptionChange}
          />
          Card
        </label>
        {selectedOption === "Card" && <CardDetailsForm />}
      </div>
      
    </div>
  );
};

export default RecommendedPaymentOption;
