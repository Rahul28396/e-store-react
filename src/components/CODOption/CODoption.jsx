const CODOption = () => {
  const handleChange = () => {
    console.log("Placed ordered with COD");
  };

  return (
    <>
      <p>
        Due to handling costs, a nominal fee of Rs. 7 will be charged.
      </p>
      <button
        type="button"
        style={{ padding: "10px 20px", cursor: "pointer" }}
        onClick={handleChange}
      >
        Place Order
      </button>
    </>
  );
};

export default CODOption;
