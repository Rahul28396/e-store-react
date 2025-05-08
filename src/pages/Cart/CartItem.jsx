import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './CartItem.module.css';

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
        <div className={styles['cart-item']}>
            <img src={product.image} alt={product.name} className={styles["cart-item-image"]} />
            <div className={styles['cart-item-details']}>
                <p className={styles["cart-item-name"]}>{product.name}</p>
                <div className={styles['cart-item-quantity']}>
                    <button onClick={handleDecrease} className={styles["quantity-btn"]}>-</button>
                    <span className={styles["quantity-count"]}>{quantity}</span>
                    <button onClick={handleIncrease} className={styles["quantity-btn"]}>+</button>
                </div>
                <p className={styles["cart-item-price"]}>${(product.price * quantity).toFixed(2)}</p>
            </div>
            <button onClick={handleRemove} className={styles['remove-button']}>
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItem;