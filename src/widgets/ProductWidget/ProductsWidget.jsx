import React from "react";
import Product from "../../components/Product/Product";
import PanelWithHeader from "../PanelWithHeader/PanelWithHeader";
import styles from "./ProductsWidget.module.css";

const ProductsWidget = ({ title, onClickViewAll, products = [] }) => {
  return (
    <PanelWithHeader title={title} onClickViewAll={onClickViewAll}>
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </PanelWithHeader>
  );
};

export default ProductsWidget;
