import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#1e293b", // slate-800
    color: "#f1f5f9", // slate-100
  };

  const linkStyle = {
    color: "#f1f5f9",
    textDecoration: "none",
    margin: "0 12px",
    fontWeight: "500",
  };

  const buttonStyle = {
    background: "#ef4444", // red-500
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "12px",
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        {user ? (
          <>
            <Link to="/projects" style={linkStyle}>
              Projects
            </Link>
            <Link to="/bugs" style={linkStyle}>
              Bugs
            </Link>
            <Link to="/report" style={linkStyle}>
              Report Bug
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
            <Link to="/register" style={linkStyle}>
              Register
            </Link>
          </>
        )}
      </div>
      {user && (
        <button onClick={logout} style={buttonStyle}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
