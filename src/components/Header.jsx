import { useNavigate, Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = ({ cartCount, search, setSearch }) => {
  const navigate = useNavigate();

  
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate("/"); // login page
    }
  };

  return (
    <header className="header-wrapper">
      <div className="header-top">
        {/* LOGO */}
        <Link to="/home" className="logo">
          🛒 ShopEase <span>Explore Plus+</span>
        </Link>

        {/* SEARCH */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* ACTIONS */}
        <div className="header-actions">
          {/* 🔐 LOGIN / LOGOUT */}
          {!token ? (
            <div className="login" onClick={() => navigate("/")}>
              Login
            </div>
          ) : (
            <div className="login" onClick={handleLogout}>
              Logout
            </div>
          )}

          {/* CART */}
          <Link to="/cart" className="cart">
            🛒 Cart
            <span className="cart-badge">{cartCount || 0}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
