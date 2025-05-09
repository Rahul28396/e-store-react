import CartItem from "../CartItem/CartItem";
import styles from "./CartItemList.module.css";
import { BsCartDash } from "react-icons/bs";


const CartItemList = () => {
  const cartProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/product-images/image1.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      image: "/product-images/image2.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      image: "/product-images/image3.png",
    },
  ];

  return (
    <>
      <div className={styles["cart-items-header"]}>
        <h2 className={styles["cart-items-title"]}>Cart Items (3)</h2>
        <button className={styles["clear-cart-button"]}>
          <BsCartDash />
          Clear cart
        </button>
      </div>

      {cartProducts.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onRemove={(id) => console.log("Remove item with id:", id)}
          onUpdateQuantity={(id, quantity) =>
            console.log("Update item with id:", id, "to quantity:", quantity)
          }
        />
      ))}
    </>
  );
};

export default CartItemList;
