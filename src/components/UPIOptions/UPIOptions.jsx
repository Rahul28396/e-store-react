import React, { useState } from 'react';

const UPIOptions = () => {
    const [selectedOption, setSelectedOption] = useState('PhonePe');
    const [upiId, setUpiId] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setUpiId('');
    };

    const handlePay = () => {
        alert(`Payment initiated with UPI ID: ${upiId}`);
    };

    return (
        <div>
            <div>
                <button onClick={() => handleOptionChange('PhonePe')}>PhonePe</button>
                <button onClick={() => handleOptionChange('Gpay')}>Gpay</button>
                <button onClick={() => handleOptionChange('Paytm')}>Paytm</button>
                <button onClick={() => handleOptionChange('UPI ID')}>UPI ID</button>
            </div>

            {selectedOption && (
                <div style={{ marginTop: '20px' }}>
                    <h3>{selectedOption} Payment</h3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handlePay();
                        }}
                    >
                        <label>
                            UPI ID:
                            <input
                                type="text"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Pay</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UPIOptions;