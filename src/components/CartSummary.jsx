import {
  getTax,
  getFinalTotal,
} from "../utils/priceCalculation";

const CartSummary = ({
  subtotal,
  discount,
  clearCart,
}) => {
  const tax = getTax(subtotal);
  const total = getFinalTotal(subtotal, tax, discount);

  return (
    <div className="cart-summary">
      <h3>Price Details</h3>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="summary-row">
        <span>Tax (5%)</span>
        <span>₹{tax}</span>
      </div>

      <div className="summary-row discount">
        <span>Discount</span>
        <span>-₹{discount}</span>
      </div>

      <hr />

      <div className="summary-row total">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button className="clear-cart" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default CartSummary;
