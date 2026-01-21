import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div
        className="product-image-box"
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      </div>

      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="product-price">₹{product.price}</p>

        <button
          className={`add-btn ${product.stock === 0 ? "out-stock-btn" : ""}`}
          disabled={product.stock === 0}
          onClick={() => addToCart(product)}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
