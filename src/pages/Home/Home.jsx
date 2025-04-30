import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import BrowseByCategory from "../../widgets/BrowseByCategory/BrowseByCategory";
import ProductsSection from "../../widgets/ProductsSection/ProductsSection";
import ProductsWidget from "../../widgets/ProductWidget/ProductsWidget";
import Footer from "../../components/Footer/Footer";
import { TitleContext, useTitle } from "../../context/TitleConetxt";
import { CiMobile3 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { ImHeadphones } from "react-icons/im";
import { IoGameControllerSharp } from "react-icons/io5";

const Home = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);

  const categories = [
    { id: 1, slug: "mobiles", icon: CiMobile3, title: "Mobiles" },
    { id: 2, slug: "smart-watches", icon: BsSmartwatch, title: "Smart Watches" },
    { id: 3, slug: "cameras", icon: BsCamera, title: "Cameras" },
    { id: 4, slug: "computers", icon: RiComputerLine, title: "Computers" },
    { id: 5, slug: "headphones", icon: ImHeadphones, title: "Headphones" },
    { id: 6, slug: "games", icon: IoGameControllerSharp, title: "Games" },
  ];

  const productsWithDiscount = [
    { id: 1, name: "Product 1", price: "$10", image: "image1.png" },
    { id: 2, name: "Product 2", price: "$20", image: "image2.png" },
    { id: 3, name: "Product 3", price: "$30", image: "image3.png" },
    { id: 4, name: "Product 4", price: "$40", image: "image4.png" }
  ]

  return (
    <>
      <Banner
        title="Welcome to GadgetZone"
        subtitle="Your one-stop shop for everything!"
        imageUrl="banner1.jpg" // Replace with your image URL
        isImageClickable={true}
        onImageClick={() => console.log("Banner image clicked!")}
        showButton={true}
        buttonText="Shop Now"
        onButtonClick={() => console.log("Shop Now button clicked!")}
      />
      <BrowseByCategory categories={categories}/>
      <ProductsSection />
      <ProductsWidget
        title="Discount upto 50%" 
        onClickViewAll={() => console.log("View all")}
        products={productsWithDiscount}
      />
      <Banner
        imageUrl="banner2.jpg" // Replace with your image URL
        isImageClickable={true}
        onImageClick={() => console.log("Banner image clicked!")}
        showButton={false}
      />
    </>
  );
};

export default Home;
