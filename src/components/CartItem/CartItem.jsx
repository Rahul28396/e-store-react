import { useState } from "react";
import { MdClear, MdDeleteOutline } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router";
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

  const originalPrice = product.originalPrice || (product.price * 1.2);
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.cartItemImage}
        />
      </div>

      <div className={styles.cartItemDetails}>
        <Link to={`/product/${product.id}`} className={styles.productLink}>
          <h3 className={styles.cartItemName}>{product.name}</h3>
        </Link>

        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>₹{originalPrice.toFixed(0)}</span>
          <span className={styles.currentPrice}>₹{(product.price * quantity).toFixed(0)}</span>
          <span className={styles.discount}>{discount}% OFF</span>
        </div>

        <div className={styles.quantityContainer}>
          <div className={styles.quantityControls}>
            <button 
              onClick={handleDecrease} 
              className={styles.quantityBtn}
              disabled={quantity <= 1}
            >
              <FaMinus size={14} />
            </button>
            <span className={styles.quantityCount}>{quantity}</span>
            <button onClick={handleIncrease} className={styles.quantityBtn}>
              <FaPlus size={14} />
            </button>
          </div>
          <div className={styles.itemTotal}>
            Total: ₹{(product.price * quantity).toFixed(0)}
          </div>
        </div>
      </div>

      <div className={styles.cartItemActions}>
        <button 
          onClick={handleRemove} 
          className={styles.removeButton}
          title="Remove item"
        >
          <MdDeleteOutline size={24} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
