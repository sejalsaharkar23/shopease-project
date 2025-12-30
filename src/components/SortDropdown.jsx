const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-box">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );
};

export default SortDropdown;
