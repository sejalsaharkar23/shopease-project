import { useState } from "react";
import products from "../data/products";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import Banners from "../components/Banners";
import SortDropdown from "../components/SortDropdown";

const Home = ({ addToCart, search }) => {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const heading =
    category === "all"
      ? "🔥 Trending Products"
      : category.toUpperCase();

  return (
    <div className="page">
     
      <div className="category-row">
        <ProductFilter
          selected={category}
          setSelected={setCategory}
        />
      </div>

     
      <Banners />

      {/* HEADING + SORT */}
      <div className="section-header">
        <h2>{heading}</h2>

        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

 
      <ProductList
        products={products}
        category={category}
        sortBy={sortBy}
        search={search}       // ✅ NOW DEFINED
        addToCart={addToCart}
      />
    </div>
  );
};

export default Home;
