import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Loading product...
      </h2>
    );
  }

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
          src={product.imageUrl}
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
            className={`add-btn ${
              product.stock === 0 ? "out-stock-btn" : ""
            }`}
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
