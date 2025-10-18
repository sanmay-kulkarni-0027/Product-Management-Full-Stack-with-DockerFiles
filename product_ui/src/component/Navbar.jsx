import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation(); // to highlight active route

  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: "#1e3d59" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold text-white fs-4">
          Product Management System
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link px-3 ${
                  location.pathname === "/" ? "text-warning fw-bold" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/addProduct"
                className={`nav-link px-3 ${
                  location.pathname === "/addProduct" ? "text-warning fw-bold" : "text-white"
                }`}
              >
                Add Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
