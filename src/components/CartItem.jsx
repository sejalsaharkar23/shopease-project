const CartItems = ({ cart, increaseQty, decreaseQty, removeItem }) => {
  return (
    <div className="cart-items">
      {cart.map((item) => (
        <div
          key={item.productId}
          className="cart-item"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "16px",
            background: "#fff",
            borderRadius: "16px",
            marginBottom: "16px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
          }}
        >
          {/* Image */}
          <img
            src={item.imageUrl}
            width="90"
            style={{ borderRadius: "12px" }}
          />

          {/* Details */}
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0 }}>{item.productName}</h4>
            <p style={{ margin: "6px 0", color: "#6b7280" }}>
              ₹{item.price}
            </p>

            {/* Quantity buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "8px",
              }}
            >
              <button
                onClick={() => decreaseQty(item.productId)}
                style={qtyBtnStyle}
              >
                −
              </button>

              <span
                style={{
                  minWidth: "28px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQty(item.productId)}
                style={qtyBtnStyle}
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeItem(item.productId)}
              style={{
                marginTop: "10px",
                padding: "6px 14px",
                borderRadius: "20px",
                border: "1px solid #ef4444",
                background: "transparent",
                color: "#ef4444",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const qtyBtnStyle = {
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  border: "none",
  background: "#7c3aed",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
};

export default CartItems;
