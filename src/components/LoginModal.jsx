import { useState } from "react";

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 
  const VALID_EMAIL = "sejal@gmail.com";
  const VALID_PASSWORD = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
      setError("Invalid email or password");
      return;
    }

    
    onLogin({ email });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login to ShopEase</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>
        </form>

        <span className="close" onClick={onClose}>
          ✕
        </span>
      </div>
    </div>
  );
};

export default LoginModal;
