import React, { memo } from "react";
import styles from "./ProductList.module.css";
import Product from "../Product/Product";

const ProductList = memo(({ products }) => {
  return (
    <section className={styles["products-list"]}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
});

export default ProductList;
