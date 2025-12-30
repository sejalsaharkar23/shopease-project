import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  category,
  sortBy,
  search,
  addToCart,
}) => {
  
  let filtered = products.filter((product) => {
    const matchCategory =
      category === "all" || product.category === category;

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  
  if (sortBy === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "newest") {
    filtered.sort((a, b) =>
      String(b.id).localeCompare(String(a.id))
    );
  }

 
  if (filtered.length === 0) {
    return (
      <h3 style={{ textAlign: "center", marginTop: "30px" }}>
        No products found 😔
      </h3>
    );
  }

  return (
    <div className="product-grid">
      {filtered.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
