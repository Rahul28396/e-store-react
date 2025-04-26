import { TabProvider } from "../../components/UI/Tab/TabContext";
import Tab from "../../components/UI/Tab/Tab";
import styles from "./ProductsSection.module.css";
import ProductList from "../../components/ProductList/ProductList";

export default function ProductsSection() {
  const newArrivals = [
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
  const bestSellers = [
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
  ];
  const featuredProducts = [
    {
      id: 1,
      name: "Sony PlayStation 5",
      price: "₹49,990",
      image: "image2.png",
    },
    {
      id: 2,
      name: "Microsoft Xbox Series X",
      price: "₹52,990",
      image: "image3.png",
    },
    {
      id: 3,
      name: "Bose SoundLink Revolve+",
      price: "₹24,500",
      image: "image4.png",
    },
    {
      id: 4,
      name: "Canon EOS R10 Camera",
      price: "₹80,995",
      image: "image5.png",
    },
    {
      id: 5,
      name: "DJI Mini 3 Pro Drone",
      price: "₹85,500",
      image: "image6.png",
    },
    {
      id: 6,
      name: "Kindle Paperwhite (11th Gen)",
      price: "₹13,999",
      image: "image7.png",
    },
    {
      id: 7,
      name: "Logitech MX Master 3S Mouse",
      price: "₹8,995",
      image: "image1.png",
    },
    {
      id: 8,
      name: "Samsung 32-inch Smart Monitor M8",
      price: "₹59,999",
      image: "image2.png",
    },
  ];

  return (
    <section className={styles["productsSection"]}>
      <TabProvider value={1}>
        <TabProvider.TabList>
          <Tab index={1}>New Arrivals</Tab>
          <Tab index={2}>Best Seller</Tab>
          <Tab index={3}>Featured Products</Tab>
        </TabProvider.TabList>
        <TabProvider.TabPanel value={1}>
          <ProductList products={newArrivals} />
        </TabProvider.TabPanel>
        <TabProvider.TabPanel value={2}>
          <ProductList products={bestSellers} />
        </TabProvider.TabPanel>
        <TabProvider.TabPanel value={3}>
          <ProductList products={featuredProducts} />
        </TabProvider.TabPanel>
      </TabProvider>
    </section>
  );
}
