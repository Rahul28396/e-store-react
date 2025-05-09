const CashOnDeliveryForm = () => {
  return (
    <form>
      <div className='col-12 mb10'>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      
      <div className='col-12 mb10'>
        <label htmlFor="cardHolderName">Cardholder Name:</label>
        <input
          type="text"
          id="cardHolderName"
          name="cardHolderName"
          placeholder="John Doe"
          required
        />
      </div>

      <div className='row mb10'>
        <div className='col-5 mr6rem'>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className='col-5 mb1rem'>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            placeholder="123"
            required
          />
        </div>
      </div>
      
      <div className="full-width">
        <button type="submit">Pay Now</button>
      </div>
    </form>
  );
};

export default CashOnDeliveryForm;
