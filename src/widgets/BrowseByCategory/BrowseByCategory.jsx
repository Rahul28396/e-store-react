import React from "react";
import styles from "./BrowseByCategory.module.css";
import PanelWithHeader from "../PanelWithHeader/PanelWithHeader";
import Scrollbar from "../../components/Scrollbar/Scrollbar";
import { Link } from "react-router";

const BrowseByCategory = ({ categories }) => {
  return (
    <PanelWithHeader
      title="Browse By Category"
      onClickViewAll={() => {
        console.log("View All Clicked");
      }}
    >
      <Scrollbar direction="horizontal">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              to={`category/${category.slug}`}
              key={category.id}
              className={styles["category-item"]}
            >
              <span>
                <Icon size={30} />
              </span>
              <h3 className={styles.title}>{category.title}</h3>
            </Link>
          );
        })}
      </Scrollbar>
    </PanelWithHeader>
  );
};

export default BrowseByCategory;
