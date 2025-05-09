import { FaPlus } from "react-icons/fa";
import styles from "./AddressList.module.css";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";

const AddressList = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      userName: "John Doe",
      mobile: "1234567890",
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      pincode: "62701",
      addressType: "Home",
      district: "Sangamon",
      selected: true,
    },
    {
      id: 2,
      userName: "Jane Smith",
      mobile: "9876543210",
      street: "456 Elm St",
      city: "Metropolis",
      state: "NY",
      pincode: "10001",
      addressType: "Office",
      district: "New York",
      selected: false,
    },
    {
      id: 3,
      userName: "Alice Johnson",
      mobile: "5551234567",
      street: "789 Oak St",
      city: "Gotham",
      state: "NJ",
      pincode: "07001",
      addressType: "Other",
      district: "Middlesex",
      selected: false,
    },
  ]);

  const onSelect = (address) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((item) =>
        item.id === address.id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };

  return (
    <>
      <div className={styles["cart-items-header"]}>
        <h2 className={styles["cart-items-title"]}>Select delivery address</h2>
        <button className={styles["clear-cart-button"]}>
          <FaPlus />
          Add an address
        </button>
      </div>

      {addresses && addresses.length > 0 ? (
        <ul className={styles["address-list"]}>
          {addresses.map((address) => (
            <li key={address.id} className={styles["address-item"]}>
              <input
                type="radio"
                name="selected-address"
                checked={address.selected}
                onChange={() => onSelect(address)}
              />
              <div>
                <div className={styles["address-item-info"]}>
                  <h3>{address.userName}</h3>
                  <p>
                    {address.street}, {address.city}, {address.district}
                  </p>
                  <p>
                    {address.state}, {address.pincode}
                  </p>
                  <p>Mobile: {address.mobile}</p>
                </div>
                {address.selected && (
                  <div className={styles["address-item-action"]}>
                    <button><RiDeleteBinLine /> Remove</button>
                    <button><RiEditBoxLine /> Edit</button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No address available</p>
      )}
    </>
  );
};

export default AddressList;
