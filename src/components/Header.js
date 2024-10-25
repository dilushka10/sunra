import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import image1 from "../assets/images/logo.png";
import userImage from "../assets/images/defaultProfile.png"; // Import your user image

const Header = () => {
  const location = useLocation(); // Get the current URL path
  const [activeTab, setActiveTab] = useState(location.pathname); // Initialize active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update active tab state
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning" to="/">
          <strong>
            <em>
              <img
                className="image"
                width="100%"
                height="90%"
                src={image1}
                alt="Dream carousel image"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </em>
          </strong>
        </Link>
        <button
          className="navbar-toggler btn btn-primary bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-3">
              <Link
                to="/"
                className={`nav-link ${
                  activeTab === "/" ? "text-warning" : "text-white"
                }`}
                onClick={() => handleTabClick("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="/products"
                className={`nav-link ${
                  activeTab === "/products" ? "text-warning" : "text-white"
                }`}
                onClick={() => handleTabClick("/products")}
              >
                Products
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="/store"
                className={`nav-link ${
                  activeTab === "/store" ? "text-warning" : "text-white"
                }`}
                onClick={() => handleTabClick("/store")}
              >
                Store
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="/about-us"
                className={`nav-link ${
                  activeTab === "/about-us" ? "text-warning" : "text-white"
                }`}
                onClick={() => handleTabClick("/about-us")}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item px-3 d-lg-none d=block">
              <Link
                to="/"
                className={'nav-link text-white'}
              >
                Profile
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <form role="search" className="d-flex d-none d-lg-block me-3">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <img
              src={userImage}
              alt="User"
              className="rounded-circle bg-light padding-1 d-none d-lg-block "
              width="40" // Adjust the size as needed
              height="40" // Adjust the size as needed
              style={{ marginRight: "10px" }} // Add some space between image and input
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
