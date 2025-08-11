import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./customNav.css";

import logo from "../../images/site_logo/logo.webp";
import {
  Technology,
  Platforms,
  Certifications,
  Industries,
  About,
} from "../../api/header";

export default function MainNavbar() {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const renderMenu = (data) => (
    <div className="dropdown-menu about-dropdown shadow-lg border-0 p-4 mega-grid">
      <div className="d-flex flex-wrap gap-4 w-100">
        {data.map((category, catIdx) => (
          <div className="category-block w-100" key={catIdx}>
            <h6 className="fw-bold text-warning mb-3">{category.subHeading}</h6>

            {/* Bootstrap row for 4 cards per row */}
            <div className="row g-3">
              {category.items.map((item, idx) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                  <Link
                    to={item.link}
                    className="text-decoration-none text-white"
                  >
                    <div className="p-4 rounded highlight-box h-100 d-flex align-items-stretch gap-2">
                      {/* Left Column - Icon */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.iconImg}
                          alt={item.title}
                          className="nav-icon"
                          style={{ width: 40, height: 40 }}
                        />
                      </div>

                      {/* Right Column - Text */}
                      <div className="flex-grow-1">
                        <h6 className="text-warning mb-1">{item.title}</h6>
                        <p className="mb-0 small">{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container">
        <Link className="site_link" to="/">
          <img src={logo} alt="Site Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item dropdown position-static">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
              >
                Technology
              </Link>
              {renderMenu(Technology)}
            </li>

            <li className="nav-item dropdown position-static">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
              >
                Platforms
              </Link>
              {renderMenu(Platforms)}
            </li>

            <li className="nav-item dropdown position-static">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
              >
                Certifications
              </Link>
              {renderMenu(Certifications)}
            </li>

            <li className="nav-item dropdown position-static">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
              >
                Industries
              </Link>
              {renderMenu(Industries)}
            </li>

            <li className="nav-item dropdown position-static">
              <Link
                className="nav-link dropdown-toggle"
                to="/about-us"
                data-bs-toggle="dropdown"
              >
                About
              </Link>
              {renderMenu(About)}
            </li>

            <li className="nav-item ms-lg-3">
              <Link className="btn btn-outline-light" to="/contact-us">
                <span className="btn_label" data-text="Contact Us">
                  Contact Us
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
