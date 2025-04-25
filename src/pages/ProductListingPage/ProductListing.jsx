import React from "react";
import { useParams } from "react-router";
import Breadcrumb from "../../components/Breadcumb/Breadcumb";
import { AccordianProvider } from "../../components/Accordian/AccordianContext";
import styles from "./ProductListing.module.css";
import ProductList from "../../components/ProductList/ProductList";
import { VscSettings } from "react-icons/vsc";

const ProductListing = () => {
  const { category } = useParams();
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

  return (
    <section className="container">
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
        <div className={styles.filters}>
          <AccordianProvider value={"Brands"}>
            <AccordianProvider.Container>
              <AccordianProvider.Item title="Brands">
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="brand1"
                    name="brand1"
                    value="Brand 1"
                  />
                  <label htmlFor="brand1">Brand 1</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="brand2"
                    name="brand2"
                    value="Brand 2"
                  />
                  <label htmlFor="brand2">Brand 2</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="brand3"
                    name="brand3"
                    value="Brand 3"
                  />
                  <label htmlFor="brand3">Brand 3</label>
                </div>
              </AccordianProvider.Item>
              <AccordianProvider.Item title="Price Range">
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="price1"
                    name="price1"
                    value="$0 - $50"
                  />
                  <label htmlFor="price1">$0 - $50</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="price2"
                    name="price2"
                    value="$50 - $100"
                  />
                  <label htmlFor="price2">$50 - $100</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="price3"
                    name="price3"
                    value="$100 - $200"
                  />
                  <label htmlFor="price3">$100 - $200</label>
                </div>
              </AccordianProvider.Item>
              <AccordianProvider.Item title="Ratings">
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="rating1"
                    name="rating1"
                    value="1 Star & Up"
                  />
                  <label htmlFor="rating1">1 Star & Up</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="rating2"
                    name="rating2"
                    value="2 Stars & Up"
                  />
                  <label htmlFor="rating2">2 Stars & Up</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="rating3"
                    name="rating3"
                    value="3 Stars & Up"
                  />
                  <label htmlFor="rating3">3 Stars & Up</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="rating4"
                    name="rating4"
                    value="4 Stars & Up"
                  />
                  <label htmlFor="rating4">4 Stars & Up</label>
                </div>
              </AccordianProvider.Item>
              <AccordianProvider.Item title="Availability">
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="available"
                    name="available"
                    value="In Stock"
                  />
                  <label htmlFor="available">In Stock</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="outOfStock"
                    name="outOfStock"
                    value="Out of Stock"
                  />
                  <label htmlFor="outOfStock">Out of Stock</label>
                </div>
              </AccordianProvider.Item>
              <AccordianProvider.Item title="Discount">
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="discount1"
                    name="discount1"
                    value="10% & Up"
                  />
                  <label htmlFor="discount1">10% & Up</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="discount2"
                    name="discount2"
                    value="20% & Up"
                  />
                  <label htmlFor="discount2">20% & Up</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="discount3"
                    name="discount3"
                    value="30% & Up"
                  />
                  <label htmlFor="discount3">30% & Up</label>
                </div>
                <div className="filterItem">
                  <input
                    type="checkbox"
                    id="discount4"
                    name="discount4"
                    value="40% & Up"
                  />
                  <label htmlFor="discount4">40% & Up</label>
                </div>
              </AccordianProvider.Item>
            </AccordianProvider.Container>
          </AccordianProvider>
        </div>
        <div className={styles.productList}>
          <div className={styles.productListHeader}>
            <span className={styles.productCount}>
              {products.length} Products
            </span>
            <div className={styles.sortfileterContainer}>
              <div className={styles.sortOptions}>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" name="sort">
                  <option value="popularity">Popularity</option>
                  <option value="priceLowToHigh">Price: Low to High</option>
                  <option value="priceHighToLow">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
              <div className={styles.filtersInMobileView}>
                <button className={styles.filterButton}>
                  Filters
                  <VscSettings size={20}/>
                </button>
              </div>
            </div>
          </div>

          <ProductList products={products} />
        </div>
      </section>
    </section>
  );
};

export default ProductListing;
