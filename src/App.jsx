import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  getCartApi,
  addToCartApi,
  decreaseQtyApi,
  removeItemApi,
} from "./services/cartApi";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  
  const refreshCart = async () => {
    try {
      const data = await getCartApi();
      setCart(data);
    } catch (err) {
      console.error("Cart load failed", err);
      setCart([]);
    }
  };

  useEffect(() => {
    refreshCart();
  }, []);

 
  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  
  const addToCart = async (product) => {
    await addToCartApi(product.id);  
    refreshCart();
  };

  
  const increaseQty = async (productId) => {
    await addToCartApi(productId);    
    refreshCart();
  };

  
  const decreaseQty = async (productId) => {
    await decreaseQtyApi(productId); 
    refreshCart();
  };

  
  const removeItem = async (productId) => {
    await removeItemApi(productId);   
    refreshCart();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Header
                cartCount={cartCount}
                search={search}
                setSearch={setSearch}
              />
              <Home addToCart={addToCart} search={search} />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <PrivateRoute>
              <Header
                cartCount={cartCount}
                search={search}
                setSearch={setSearch}
              />
              <ProductDetail addToCart={addToCart} />
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Header
                cartCount={cartCount}
                search={search}
                setSearch={setSearch}
              />
              <Cart
                cart={cart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
              />
              <Footer />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
