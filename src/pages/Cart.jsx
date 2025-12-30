import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CartItems from "../components/CartItem";
import CouponInput from "../components/CouponInput";
import CartSummary from "../components/CartSummary";

const Cart = ({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
}) => {
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(0);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
     <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "16px 24px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "none",
            background: "#7C3AED",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ←
        </button>

       
      </div>

    
      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          🛒 Cart is Empty
        </h2>
      ) : (
        
        <div className="cart-page">
         
          <CartItems
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeItem={removeItem}
          />

          
          <div>
            <CartSummary
              subtotal={subtotal}
              discount={discount}
              clearCart={clearCart}
            />

            <CouponInput
              subtotal={subtotal}
              setDiscount={setDiscount}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
