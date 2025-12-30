const ProductFilter = ({ selected, setSelected }) => {
  const categories = [
    "all",
    "phones",
    "electronics",
    "fashion",
    "furniture",
    "makeup",
    "grocery",
  ];

  return (
    <div className="filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? "active" : ""}
          onClick={() => setSelected(cat)}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;

