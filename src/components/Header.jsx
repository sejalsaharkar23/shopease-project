import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import LoginModal from "./LoginModal";

const Header = ({ cartCount, search, setSearch }) => {
  
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("shopease-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [showLogin, setShowLogin] = useState(false);
 
  useEffect(() => {
    if (user) {
      localStorage.setItem("shopease-user", JSON.stringify(user));
    }
  }, [user]);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );
    if (confirmLogout) {
      setUser(null);
      localStorage.removeItem("shopease-user");
    }
  };

  return (
    <>
      <header className="header-wrapper">
        <div className="header-top">
         
          <Link to="/" className="logo">
            🛒ShopEase <span>Explore Plus+</span>
          </Link>

          
          <SearchBar search={search} setSearch={setSearch} />

          <div className="header-actions">
          
            {user ? (
              <div className="login" onClick={handleLogout}>
                Logout
              </div>
            ) : (
              <div
                className="login"
                onClick={() => setShowLogin(true)}
              >
                Login
              </div>
            )}

            
            <Link to="/cart" className="cart">
              🛒 Cart
              <span className="cart-badge">{cartCount}</span>
            </Link>
          </div>
        </div>
      </header>

     
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </>
  );
};

export default Header;
