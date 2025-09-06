import CartItem from "../CartItem/CartItem";
import styles from "./CartItemList.module.css";
import { BsCartDash, BsCartX } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router";

const CartItemList = () => {
  const cartProducts = [
    {
      id: 1,
      name: "Apple iPhone 14",
      price: 79900,
      originalPrice: 89900,
      image: "/product-images/image1.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 74999,
      originalPrice: 84999,
      image: "/product-images/image2.png",
      quantity: 2,
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: 29990,
      originalPrice: 34990,
      image: "/product-images/image3.png",
      quantity: 1,
    },
  ];

  const handleClearCart = () => {
    console.log("Clear cart clicked");
  };

  const handleRemoveItem = (id) => {
    console.log("Remove item with id:", id);
  };

  const handleUpdateQuantity = (id, quantity) => {
    console.log("Update item with id:", id, "to quantity:", quantity);
  };

  const totalItems = cartProducts.reduce((sum, item) => sum + item.quantity, 0);

  if (cartProducts.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyCartIcon}>
          <MdShoppingCart size={64} />
        </div>
        <h2 className={styles.emptyCartTitle}>Your cart is empty</h2>
        <p className={styles.emptyCartMessage}>
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link to="/" className={styles.continueShoppingBtn}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <div className={styles.cartTitleSection}>
          <h1 className={styles.cartTitle}>Shopping Cart</h1>
          <span className={styles.itemCount}>({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
        </div>
        <button 
          className={styles.clearCartButton}
          onClick={handleClearCart}
        >
          <BsCartX size={18} />
          Clear Cart
        </button>
      </div>

      <div className={styles.cartItems}>
        {cartProducts.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onRemove={handleRemoveItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
