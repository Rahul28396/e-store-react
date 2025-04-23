import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./Product.module.css";

const Product = ({ product, showFavIcon  }) => {
  const { name, price, image } = product;
  return (
    <div className={styles.productCard}>
      {showFavIcon && <div className={styles.favoriteIcon}>
        <AiOutlineHeart size={24} />
      </div>}
      <img src={`product-images/${image}`} alt={name} className={styles.productImage} />
      <h2 className={styles.productName}>{name}</h2>
      <p className={styles.productPrice}>{price}</p>
      <button className={styles.addToCartButton}>Add to Cart</button>
    </div>
  );
};

export default Product;
