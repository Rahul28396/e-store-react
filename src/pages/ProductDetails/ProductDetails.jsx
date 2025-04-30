import React, { useState } from "react";
import ProductsWidget from "../../widgets/ProductWidget/ProductsWidget";
import styles from "./ProductDetails.module.css";
import { CiMobile3 } from "react-icons/ci";
import { IoHardwareChipSharp } from "react-icons/io5";
import { PiCpuLight } from "react-icons/pi";
import { FaCamera } from "react-icons/fa6";
import { GiBattery100 } from "react-icons/gi";
import { FaMemory } from "react-icons/fa";
import ViewMorePanel from "../../components/ViewMorePanel/ViewMorePanel";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Apple Iphone 14 Pro max (256GB)",
    price: "$1000",
    discountedPrice: "$900",
    rating: 4.5,
    description: "Product Description",
    imageUrls: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
    ],
  };

  const relatedProducts = [
    { id: 1, name: "Product 1", price: "$10", image: "image1.png" },
    { id: 2, name: "Product 2", price: "$20", image: "image2.png" },
    { id: 3, name: "Product 3", price: "$30", image: "image3.png" },
    { id: 4, name: "Product 4", price: "$40", image: "image4.png" },
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <section className="container">
      <section className={styles.productDetailsSection}>
        <section className={styles.imageSection}>
          <div className={styles.imageSlider}>
            {product.imageUrls.map((url, index) => (
              <img
                key={index}
                src={`/product-images/${url}`}
                alt={`Product Image ${index + 1}`}
                className={selectedImage === index ? styles.active : ""}
                onClick={() => handleImageClick(index)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
          <img
            src={`/product-images/${product.imageUrls[selectedImage]}`}
            alt="Product"
            className={styles.selectedImage}
          />
        </section>
        <section className="shortDetailsSection">
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.price}>
            <p className={styles.specialOffer}>Special Offer</p>
            {product.discountedPrice}
            <span className={styles.priceOff}>({product.price})</span>
            <span className={styles.discount}>10 % off</span>
          </p>
          <div className={styles.specificationHighlights}>
            <div className={styles.highlights}>
              <CiMobile3 size={20} />
              <div className={styles.highlightDetails}>
                <p>Display</p>
                <p>6.7 inch</p>
              </div>
            </div>
            <div className={styles.highlights}>
              <IoHardwareChipSharp size={20} />
              <div className={styles.highlightDetails}>
                <p>Processor</p>
                <p>A16 Bionic</p>
              </div>
            </div>
            <div className={styles.highlights}>
              <PiCpuLight size={20} />
              <div className={styles.highlightDetails}>
                <p>RAM</p>
                <p>6GB</p>
              </div>
            </div>
            <div className={styles.highlights}>
              <FaCamera size={20} />
              <div className={styles.highlightDetails}>
                <p>Camera</p>
                <p>48-12-12MP</p>
              </div>
            </div>
            <div className={styles.highlights}>
              <GiBattery100 size={20} />
              <div className={styles.highlightDetails}>
                <p>Battery</p>
                <p>4323 mAh</p>
              </div>
            </div>
            <div className={styles.highlights}>
              <FaMemory size={20} />
              <div className={styles.highlightDetails}>
                <p>Storage</p>
                <p>256GB</p>
              </div>
            </div>
          </div>
          <div className={styles.shortDescription}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis veniam quas quo ipsa dolores voluptas, nesciunt nobis
              totam saepe eveniet accusamus, deserunt consequuntur iure id? Ad
              quae tempore quisquam asperiores. <span>more..</span>
            </p>
          </div>

          <div className={styles.actions}>
            <button className="btn-primary btn-tertiary">Add to Cart</button>
            <button className="btn-primary">Buy Now</button>
          </div>
        </section>
      </section>

      <section className={styles.longDetails}>
        <ViewMorePanel title={"Product Details"}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            aspernatur commodi possimus animi iusto unde eos vel magni
            voluptatum error, voluptate quam, impedit aliquam a, veniam
            molestias? Exercitationem, dolor laboriosam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sunt aspernatur commodi possimus
            animi iusto unde eos Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sunt aspernatur commodi possimus animi iusto unde
            eos vel magni voluptatum error, voluptate quam, impedit aliquam a,
            veniam molestias? Exercitationem, dolor laboriosam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sunt aspernatur commodi
            possimus animi iusto unde eos vel magni voluptatum error, voluptate
            quam, impedit aliquam a, veniam molestias? Exercitationem, dolor
            laboriosam.
          </p>
          <section className={styles.specifications}>
            <h3>Screen</h3>
            <ul>
              <li>
                <span>Screen diagonal</span>
                <span>6'7''</span>
              </li>
              <li>
                <span>Screen resolution</span>
                <span>1284 x 2778 pixels</span>
              </li>
              <li>
                <span>Screen refresh rate</span>
                <span>120 Hz</span>
              </li>
              <li>
                <span>Screen type</span>
                <span>Super Retina XDR OLED</span>
              </li>
              <li>
                <span>Screen brightness</span>
                <span>2000 nits</span>
              </li>
              <li>
                <span>Screen protection</span>
                <span>Corning Gorilla Glass Victus</span>
              </li>
            </ul>
          </section>
          <section className={styles.specifications}>
            <h3>CPU</h3>
            <ul>
              <li>
                <span>CPU cores</span>
                <span>6</span>
              </li>
              <li>
                <span>CPU frequency</span>
                <span>3.46 GHz</span>
              </li>
              <li>
                <span>CPU model</span>
                <span>Apple A16 Bionic</span>
              </li>
              <li>
                <span>CPU architecture</span>
                <span>64 bit</span>
              </li>
              <li>
                <span>CPU lithography</span>
                <span>4 nm</span>
              </li>
              <li>
                <span>CPU threads</span>
                <span>6</span>
              </li>
              <li>
                <span>CPU cache</span>
                <span>6 MB</span>
              </li>
            </ul>
          </section>
          <section className={styles.specifications}>
            <h3>Storage</h3>
            <ul>
              <li>
                <span>Internal storage</span>
                <span>256 GB</span>
              </li>
              <li>
                <span>Storage type</span>
                <span>NVMe</span>
              </li>
              <li>
                <span>Storage expansion</span>
                <span>No</span>
              </li>
              <li>
                <span>Storage speed</span>
                <span>2000 MB/s</span>
              </li>
              <li>
                <span>Storage read speed</span>
                <span>2000 MB/s</span>
              </li>
            </ul>
          </section>
          <section  className={styles.specifications}>
            <h3>Camera</h3>
            <ul>
              <li>
                <span>Camera resolution</span>
                <span>48 MP</span>
              </li>
              <li>
                <span>Camera aperture</span>
                <span>f/1.8</span>
              </li>
              <li>
                <span>Camera features</span>
                <span>Dual-LED dual-tone flash, HDR (photo/panorama)</span>
              </li>
              <li>
                <span>Camera video resolution</span>
                <span>
                  4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR
                  (up to 60fps)
                </span>
              </li>
              <li>
                <span>Camera video features</span>
                <span>Dual-LED dual-tone flash, HDR (photo/panorama)</span>
              </li>
              <li>
                <span>Camera video speed</span>
                <span>
                  4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR
                  (up to 60fps)
                </span>
              </li>
              <li>
                <span>Camera video bitrate</span>
                <span>100 Mbps</span>
              </li>
            </ul>
          </section>
        </ViewMorePanel>
      </section>
      <section className="reviewsSection">
        <h2>Customer Reviews</h2>
        <div className="review">
          <p>Review 1: Great product!</p>
          <p>Rating: 5/5</p>
        </div>
        <div className="review">
          <p>Review 2: Satisfied with the purchase.</p>
          <p>Rating: 4/5</p>
        </div>
        <div className="review">
          <p>Review 3: Worth the price.</p>
          <p>Rating: 4.5/5</p>
        </div>
        <button>View All Reviews</button>
      </section>
      <section className="relatedProductsSection">
        <ProductsWidget
          title="Related Products"
          onClickViewAll={() => console.log("View all related products")}
          products={relatedProducts}
        />
      </section>
      <section className="recentlyViewedProductsSection">
        <ProductsWidget
          title="Recently viewed Products"
          onClickViewAll={() => console.log("View all related products")}
          products={relatedProducts}
        />
      </section>
    </section>
  );
};

export default ProductDetails;
