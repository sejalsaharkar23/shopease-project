import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("shopease-cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Cart load error", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("shopease-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (product.stock === 0) {
      alert("This product is out of stock");
      return;
    }

    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);

      if (existing) {
        if (existing.quantity >= product.stock) {
          alert("Stock limit reached");
          return prev;
        }

        return prev.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("shopease-cart");
  };

  return (
    <BrowserRouter>
      <Header
        cartCount={cart.reduce(
          (sum, item) => sum + item.quantity,
          0
        )}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              search={search}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
