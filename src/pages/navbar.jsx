import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import samsungLogo from "../images/file.png"; // Adjust the path as per your project structure
import menuicon from "../images/1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={samsungLogo}
          alt="Samsung Logo"
          style={{ width: "120px", height: "auto" }}
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/sliderscreen">
              <img
                src={menuicon}
                alt="Samsung Logo"
                style={{ width: "60px", height: "auto" }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
