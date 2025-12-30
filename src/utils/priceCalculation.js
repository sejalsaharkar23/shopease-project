export const getSubtotal = (cart) => {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
};

export const getTax = (subtotal) => {
  return Math.round(subtotal * 0.05);
};

export const getDiscount = (subtotal, coupon) => {
  if (!coupon) return 0;

  const code = coupon.toUpperCase();

  if (code === "SAVE100" && subtotal >= 1000) {
    return 100;
  }

  if (code === "SAVE10" && subtotal >= 2000) {
    return Math.min(Math.round(subtotal * 0.1), 500);
  }

  return 0;
};

export const getFinalTotal = (subtotal, tax, discount) => {
  return subtotal + tax - discount;
};
