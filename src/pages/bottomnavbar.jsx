import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import samsunglogo from "../images/file.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function BottomNavbar() {
  return (
    <div className="container-fluid">
      <div className="row border-top pt-3 mt-3">
        <div className="col d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="me-3">Share</span>
            <a
              href="https://www.facebook.com"
              className="me-3 text-decoration-none"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              className="me-3 text-decoration-none"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              className="me-3 text-decoration-none"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div>
            <img
              src={samsunglogo}
              alt="Samsung Logo"
              style={{ width: "120px", height: "auto" }}
            />
          </div>
          <div className="d-flex align-items-center">
            <a
              href="https://www.samsung.com/"
              className="me-3 text-decoration-none"
            >
              SAMSUNG.COM
            </a>
            <a
              href="https://www.samsungmobilepress.com/"
              className="me-3 text-decoration-none"
            >
              SAMSUNGMOBILEPRESS.COM
            </a>
            <a
              href="https://news.samsung.com/"
              className="me-3 text-decoration-none"
            >
              SAMSUNG NEWSROOM
            </a>
            <a
              href="https://developer.samsung.com/"
              className="me-3 text-decoration-none"
            >
              SAMSUNG DEVELOPERS
            </a>
            <a
              href="https://www.design.samsung.com/"
              className="me-3 text-decoration-none"
            >
              DESIGN SAMSUNG
            </a>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="me-3 text-decoration-none btn btn-link"
              onClick={() => {
                /* Handle action here */
              }}
            >
              More
            </button>
            <button
              className="me-3 text-decoration-none btn btn-link"
              onClick={() => {
                /* Handle action here */
              }}
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
