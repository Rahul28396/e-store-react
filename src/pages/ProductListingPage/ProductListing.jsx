import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Breadcrumb from "../../components/UI/Breadcumb/Breadcumb";
import styles from "./ProductListing.module.css";
import ProductList from "../../components/ProductList/ProductList";
import { IoChevronBackOutline } from "react-icons/io5";
import Filter from "../../components/Filter/Filter";
import { VscSettings } from "react-icons/vsc";
import FilterInMobileView from "../../components/FilterInMobileView/FilterInMobileView";
import Pagination from "../../components/UI/Pagination/Pagination";

const ProductListing = () => {
  const { category } = useParams();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const products = [
    {
      id: 1,
      name: "Apple iPhone 14",
      price: "₹79,900",
      image: "image1.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: "₹74,999",
      image: "image2.png",
    },
    {
      id: 3,
      name: "OnePlus 11",
      price: "₹56,999",
      image: "image3.png",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Headphones",
      price: "₹29,990",
      image: "image4.png",
    },
    {
      id: 5,
      name: "Apple MacBook Air M2",
      price: "₹1,14,900",
      image: "image5.png",
    },
    {
      id: 6,
      name: "Dell XPS 13 Laptop",
      price: "₹99,990",
      image: "image6.png",
    },
    {
      id: 7,
      name: "Samsung Galaxy Watch 5",
      price: "₹27,999",
      image: "image7.png",
    },
    {
      id: 8,
      name: "Apple iPad Pro 11-inch",
      price: "₹81,900",
      image: "image1.png",
    },
    {
      id: 9,
      name: "Sony PlayStation 5",
      price: "₹49,990",
      image: "image2.png",
    },
    {
      id: 10,
      name: "Microsoft Xbox Series X",
      price: "₹52,990",
      image: "image3.png",
    },
    {
      id: 11,
      name: "Bose SoundLink Revolve+",
      price: "₹24,500",
      image: "image4.png",
    },
    {
      id: 12,
      name: "Canon EOS R10 Camera",
      price: "₹80,995",
      image: "image5.png",
    },
    {
      id: 13,
      name: "DJI Mini 3 Pro Drone",
      price: "₹85,500",
      image: "image6.png",
    },
    {
      id: 14,
      name: "Kindle Paperwhite (11th Gen)",
      price: "₹13,999",
      image: "image7.png",
    },
    {
      id: 15,
      name: "Logitech MX Master 3S Mouse",
      price: "₹8,995",
      image: "image1.png",
    },
    {
      id: 16,
      name: "Samsung 32-inch Smart Monitor M8",
      price: "₹59,999",
      image: "image2.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isFilterModalOpen) {
      setIsFilterModalOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isFilterModalOpen]);

  return (
    <section className="container">
      {!isFilterModalOpen && (
        <>
          <Breadcrumb
            items={[
              { label: "Home", link: "/" },
              { label: "Products" },
              {
                label: category,
                link: `/category/${
                  category.charAt(0).toUpperCase() + category.slice(1)
                }`,
              },
            ]}
          />

          <section className={styles.productListContainer}>
            <Filter classes={styles.filters} />
            <div className={styles.productList}>
              <div className={styles.productListHeader}>
                <span className={styles.productCount}>
                  {products.length} Products
                </span>
                <div className={styles.sortfileterContainer}>
                  <div className={styles.sortOptions}>
                    <select id="sort" name="sort">
                      <option value="popularity">By Popularity</option>
                      <option value="priceLowToHigh">Price: Low to High</option>
                      <option value="priceHighToLow">Price: High to Low</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                  </div>
                  <div className={styles.filtersInMobileView}>
                    <button
                      className={styles.filterButton}
                      onClick={() => setIsFilterModalOpen((prev) => !prev)}
                    >
                      Filters
                      <VscSettings size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <ProductList products={products} />

              <Pagination
                totalItems={products.length}
                itemsPerPageOptions={[10, 20, 30]}
                onPageChange={(page, itemsPerPage) => {
                  console.log(`Page: ${page}, Items per page: ${itemsPerPage}`);
                }}
              />
              
            </div>
          </section>
        </>
      )}

      <FilterInMobileView 
        isOpen={isFilterModalOpen} 
        setIsOpen={setIsFilterModalOpen} 
      />
    </section>
  );
};

export default ProductListing;
