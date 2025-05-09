import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import styles from "./CartItem.module.css";

const CartItem = ({ product, onRemove, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(product.id, newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity(product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    onRemove(product.id);
  };

  return (
    <div className={styles["cart-item"]}>
      <img
        src={product.image}
        alt={product.name}
        className={styles["cart-item-image"]}
      />

      <div className={styles["cart-item-details"]}>
        <p className={styles["cart-item-name"]}>{product.name}</p>

        <p className={styles["cart-item-price"]}>
          <span>${(product.price * quantity).toFixed(2)}</span>
          <span className={styles["cart-item-price-off"]}>
            ${(product.price * quantity + 100).toFixed(2)}
          </span>
          <span className={styles["cart-item-price-discount"]}>
            ${"30% off"}
          </span>
        </p>

        <div className={styles["cart-item-quantity"]}>
          <button onClick={handleDecrease} className={styles["quantity-btn"]}>
            <FaMinus />
          </button>
          <span className={styles["quantity-count"]}>{quantity}</span>
          <button onClick={handleIncrease} className={styles["quantity-btn"]}>
            <FaPlus />
          </button>
        </div>
      </div>

      <div className={styles["cart-item-remove"]}>
        <button onClick={handleRemove} className={styles["remove-button"]}>
          <ImCancelCircle size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
