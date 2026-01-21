const BASE_URL = "http://localhost:5001/api/cart";

const authHeader = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// GET CART
export const getCartApi = async () => {
  const res = await fetch(BASE_URL, {
    headers: authHeader(),
  });
  return res.json();
};

// ADD / INCREASE
export const addToCartApi = async (productId) => {
  const res = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ productId }),
  });
  return res.json();
};

// DECREASE
export const decreaseQtyApi = async (productId) => {
  const res = await fetch(`${BASE_URL}/decrease`, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ productId }),
  });
  return res.json();
};

// REMOVE ITEM
export const removeItemApi = async (productId) => {
  const res = await fetch(`${BASE_URL}/remove`, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ productId }),
  });
  return res.json();
};

// CLEAR CART
export const clearCartApi = async () => {
  const res = await fetch(`${BASE_URL}/clear`, {
    method: "DELETE",
    headers: authHeader(),
  });
  return res.json();
};
