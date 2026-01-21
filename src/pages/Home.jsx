import { useState } from "react";
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

      
      <div className="section-header">
        <h2>{heading}</h2>
        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

     
      <ProductList
        category={category}
        sortBy={sortBy}
        search={search}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Home;
