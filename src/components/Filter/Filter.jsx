import React from "react";
import { AccordianProvider } from "../../components/UI/Accordian/AccordianContext";

const Filter = ({classes}) => {
  return (
    <section className={classes}>
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
    </section>
  );
};

export default Filter;
