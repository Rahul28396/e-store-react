import React, { useContext, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import BrowseByCategory from "../../widgets/BrowseByCategory/BrowseByCategory";
import ProductsSection from "../../widgets/ProductsSection/ProductsSection";
import ProductsWidget from "../../widgets/ProductWidget/ProductsWidget";
import Footer from "../../components/Footer/Footer";
import { TitleContext } from "../../context/TitleConetxt";

const Home = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("E-Store - Home");
  }, [setTitle]);

  return (
    <>
      <Banner
        title="Welcome to E-Store"
        subtitle="Your one-stop shop for everything!"
        imageUrl="banner1.jpg" // Replace with your image URL
        isImageClickable={true}
        onImageClick={() => console.log("Banner image clicked!")}
        showButton={true}
        buttonText="Shop Now"
        onButtonClick={() => console.log("Shop Now button clicked!")}
      />
      <BrowseByCategory />
      <ProductsSection />
      <ProductsWidget
        title="Discount upto 50%" 
        onClickViewAll={() => console.log("View all")}
        products={[
          { id: 1, name: "Product 1", price: "$10", image: "image1.png" },
          { id: 2, name: "Product 2", price: "$20", image: "image2.png" },
          { id: 3, name: "Product 3", price: "$30", image: "image3.png" },
          { id: 4, name: "Product 4", price: "$40", image: "image4.png" },
        ]}
      />
      <Banner
        imageUrl="banner2.jpg" // Replace with your image URL
        isImageClickable={true}
        onImageClick={() => console.log("Banner image clicked!")}
        showButton={false}
      />
      <Footer />
    </>
  );
};

export default Home;
