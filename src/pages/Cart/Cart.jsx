import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
return (
    <div className="container">
        <div className={styles["cart-container"]}>
            <div className={styles["cart-items"]}>
                <h2 className={styles["cart-items-header"]}>Items in your cart</h2>

                <CartItem
                    product={{
                        id: 1,
                        name: "Product 1",
                        price: 29.99,
                        image: "/product-images/image1.png",
                    }}
                    onRemove={(id) => console.log("Remove item with id:", id)}
                    onUpdateQuantity={(id, quantity) =>
                        console.log("Update item with id:", id, "to quantity:", quantity)
                    }
                />
                <CartItem
                    product={{
                        id: 2,
                        name: "Product 2",
                        price: 49.99,
                        image: "/product-images/image2.png",
                    }}
                    onRemove={(id) => console.log("Remove item with id:", id)}
                    onUpdateQuantity={(id, quantity) =>
                        console.log("Update item with id:", id, "to quantity:", quantity)
                    }
                />
                <CartItem
                    product={{
                        id: 3,
                        name: "Product 3",
                        price: 19.99,
                        image: "/product-images/image3.png",
                    }}
                    onRemove={(id) => console.log("Remove item with id:", id)}
                    onUpdateQuantity={(id, quantity) =>
                        console.log("Update item with id:", id, "to quantity:", quantity)
                    }
                />
            </div>
            <div className={styles["cart-summary"]}>
                <h4 className={styles["cart-summary-header"]}>Order Summary</h4>
                <div className={styles["promo"]}>
                    <label className={styles["cart-summary-label"]} htmlFor="promo-code">Promo Code:</label>
                    <input className={styles["cart-summary-input"]} type="text" id="promo-code" placeholder="Enter promo code" />
                </div>
                <div className={styles["gift"]}>
                    <label className={styles["cart-summary-label"]} htmlFor="gift-card">Gift Card:</label>
                    <input className={styles["cart-summary-input"]} type="text" id="gift-card" placeholder="Enter gift card code" />
                </div>
                <div className={styles["order-summary"]}>
                    <p className={`${styles["order-summary-item"]} font-bold`}>
                        <span>Subtotal:</span>
                        <span>$99.97</span>
                    </p>
                    <p className={styles["order-summary-item"]}>
                        <span>Tax:</span>
                        <span>$0.00</span>
                    </p>    
                    <p className={styles["order-summary-item"]}>
                        <span>Shipping:</span>
                        <span>$5.00</span>
                    </p>
                    <p className={`${styles["order-summary-item"]} font-bold`}>
                        <span>Total:</span>
                        <span>$104.97</span>
                    </p>
                </div>
                <button className={styles["checkout-button"]}>Checkout</button>
            </div>
        </div>
    </div>
);
};

export default Cart;
