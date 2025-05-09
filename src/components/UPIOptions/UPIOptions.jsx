import { useState } from "react";

const UPIOptions = () => {
  const [upiId, setUpiId] = useState("");

  const handlePay = () => {
    alert(`Payment initiated with UPI ID: ${upiId}`);
  };

  return (
    <div>
      <p>Pay by an UPI app</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePay();
        }}
        style={{ display: 'flex', flexDirection: 'column' , gap: '1rem', maxWidth: '380px'}}
      >
        <div>
          <label>UPI ID:</label>
          <div className="flex gap2">
            <input
              type="text"
              placeholder="Enter your UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
            <button> Verify </button>
          </div>
        </div>

        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default UPIOptions;
