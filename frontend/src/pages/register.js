import React, { useState } from "react";
import api from "../api.js";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "tester",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed.");
    }
  };

  // Inline styles
  const containerStyle = {
    maxWidth: "380px",
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

  const selectStyle = {
    ...inputStyle,
    background: "#fafafa",
    cursor: "pointer",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#388e3c",
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
    color: "#388e3c",
    fontWeight: "bold",
    letterSpacing: "1px",
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <h2 style={headingStyle}>Register</h2>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        required
        style={inputStyle}
      />
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
      <select
        name="role"
        onChange={handleChange}
        style={selectStyle}
        value={form.role}
      >
        <option value="tester">Tester</option>
        <option value="developer">Developer</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" style={buttonStyle}>
        Register
      </button>
    </form>
  );
}

export default Register;
