import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Product not found
      </h2>
    );
  }

  return (
    <div className="product-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="product-detail-card">
        <img
          src={product.image}
          alt={product.name}
          className="detail-img"
        />

        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="detail-price">₹{product.price}</p>

          <p>
            Category: <b>{product.category}</b>
          </p>

          
          {product.stock > 0 ? (
            <p style={{ color: "green", fontWeight: "600" }}>
              In Stock ({product.stock} left)
            </p>
          ) : (
            <p style={{ color: "red", fontWeight: "600" }}>
              Out of Stock
            </p>
          )}

          <button
         className={`add-btn ${product.stock === 0 ? "out-stock-btn" : ""}`}
          disabled={product.stock === 0}
          onClick={() => addToCart(product)}
>
  {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
</button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
