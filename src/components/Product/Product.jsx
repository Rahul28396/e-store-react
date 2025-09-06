import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Product.module.css";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { name, price, image, originalPrice } = product;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add to cart:", product);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.favoriteIcon} onClick={toggleFavorite}>
        {isFavorite ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
      </div>
      
      <div className={styles.imageContainer}>
        <img src={`/product-images/${image}`} alt={name} className={styles.productImage} />
      </div>
      
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>
          <Link to={`/product/${product.id}`} className={styles.productLink}>
            {name}
          </Link>
        </h2>
        
        <div className={styles.priceContainer}>
          {originalPrice && (
            <span className={styles.originalPrice}>{originalPrice}</span>
          )}
          <span className={styles.currentPrice}>{price}</span>
          {originalPrice && (
            <span className={styles.discount}>
              {Math.round(((parseFloat(originalPrice.replace(/[₹,]/g, '')) - parseFloat(price.replace(/[₹,]/g, ''))) / parseFloat(originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
            </span>
          )}
        </div>
        
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          <FaShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
