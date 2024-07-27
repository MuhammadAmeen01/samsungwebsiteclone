import React from "react";
import { Link, useNavigate } from "react-router-dom";
import samsungLogo from "../images/samsung-logo1.png"; // Adjust the path as per your project structure
import "../style/Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-black"
      style={{ height: "100px" }}
    >
      <Link className="navbar-brand" style={{ width: "150px" }} to="/home">
        <img src={samsungLogo} alt="Samsung Logo" className="navbar-logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link nav-button" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-button" to="/campaigns">
              Campaigns
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-button" to="/events">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-button" to="/apps">
              Apps
            </Link>
          </li>
        </ul>
        <button className="btn btn-search" onClick={handleSearchClick}>
          {/* <FaSearch /> */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
