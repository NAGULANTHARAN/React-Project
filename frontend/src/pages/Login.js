import React, { useState } from "react";
import api from "../api.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      login(res.data.user, res.data.token); // Save user & token
      alert("Login successful");
      navigate("/"); // Redirect to dashboard
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  // Inline styles
  const containerStyle = {
    maxWidth: "350px",
    margin: "70px auto",
    padding: "32px",
    borderRadius: "10px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "12px 0",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
    outline: "none",
    transition: "border 0.2s",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "18px",
    transition: "background 0.2s",
  };

  const headingStyle = {
    marginBottom: "24px",
    color: "#1976d2",
    fontWeight: "bold",
    letterSpacing: "1px",
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  );
}

export default Login;
