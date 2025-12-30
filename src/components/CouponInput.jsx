import { useState } from "react";

const CouponInput = ({ subtotal, setDiscount }) => {
  const [coupon, setCoupon] = useState("");
  const [msg, setMsg] = useState("");

  const applyCoupon = () => {
    if (coupon === "SAVE10" && subtotal >= 1000) {
      setDiscount(100);
      setMsg("₹100 discount applied");
    } else if (coupon === "SAVE20" && subtotal >= 3000) {
      setDiscount(300);
      setMsg("₹300 discount applied");
    } else {
      setDiscount(0);
      setMsg("Invalid coupon");
    }
  };

  return (
    <div className="coupon-box">
      <input
        type="text"
        placeholder="Enter coupon code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <button onClick={applyCoupon}>Apply</button>
      <p className="coupon-msg">{msg}</p>
    </div>
  );
};

export default CouponInput;
