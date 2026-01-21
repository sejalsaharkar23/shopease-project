import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5001/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      
      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (err) {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.brand}>ShopEase</h1>
        <p style={styles.tagline}>Login to continue shopping</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button
          style={{
            ...styles.button,
            opacity: loading ? 0.7 : 1,
          }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={styles.footer}>
          Don’t have an account?{" "}
          <span style={styles.signup}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    background: "linear-gradient(135deg, #ede9fe, #f5f3ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "360px",
    background: "#fff",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  brand: {
    color: "#7c3aed",
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "6px",
  },
  tagline: {
    color: "#6b7280",
    fontSize: "14px",
    marginBottom: "24px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#7c3aed",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
  },
  footer: {
    marginTop: "18px",
    fontSize: "13px",
    color: "#6b7280",
  },
  signup: {
    color: "#7c3aed",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Login;
