import React from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiArrowRight } from "react-icons/fi";
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
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  const navItems = [
    { name: "Technology Consulting", link: "/technology", data: Technology },
    { name: "Tech Platforms", link: "/tech-platforms", data: Platforms },
    { name: "Certifications", link: "/certifications", data: Certifications },
    { name: "Industries", link: "/industries", data: Industries },
    { name: "About Us", link: "/about-us", data: About },
  ];

  const renderMenu = (data) => (
    <div className="dropdown-menu about-dropdown shadow-lg border-0 p-4 mega-grid">
      <div className="d-flex flex-wrap gap-4 w-100">
        {data.map((category, catIdx) => (
          <div className="category-block w-100" key={catIdx}>
            <h6 className="fw-bold text-warning mb-3">{category.subHeading}</h6>
            <div className="row g-3">
              {category.items.map((item, idx) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                  <Link
                    to={item.link}
                    className={`text-decoration-none text-white ${
                      isActive(item.link) ? "active-nav" : ""
                    }`}
                  >
                    <div
                      className={`p-4 rounded highlight-box h-100 d-flex align-items-stretch gap-2 ${
                        isActive(item.link) ? "active-card-bg" : ""
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={item.iconImg}
                          alt={item.title}
                          className="nav-icon"
                          style={{ width: 40, height: 40 }}
                        />
                      </div>
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

  const DesktopNav = () => (
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto align-items-lg-center">
        {navItems.map((nav, idx) => (
          <li className="nav-item dropdown position-static" key={idx}>
            <Link
              className={`nav-link dropdown-toggle ${
                isActive(nav.link) ? "active-nav" : ""
              }`}
              to={nav.link}
              data-bs-toggle="dropdown"
            >
              {nav.name}
            </Link>
            {renderMenu(nav.data)}
          </li>
        ))}
        <li className="nav-item ms-lg-3">
          <Link
            className={`btn btn-outline-light ${
              isActive("/contact-us") ? "active-nav" : ""
            }`}
            to="/contact-us"
          >
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
  );

  const MobileNav = () => (
    <div
      className="collapse navbar-collapse mobile-slide-nav"
      id="navbarNavDropdown"
    >
      <div className="mobile-nav-header d-flex justify-content-between align-items-center">
        <Link className="site_link" to="/">
          <img src={logo} alt="Site Logo" />
        </Link>
        <button
          className="btn-close-mobile"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          ✕
        </button>
      </div>
      <ul className="navbar-nav mt-3">
        {navItems.map((nav, idx) => (
          <li className="nav-item dropdown" key={idx}>
            <Link
              className={`nav-link dropdown-toggle ${
                isActive(nav.link) ? "active-nav" : ""
              }`}
              to={nav.link}
              data-bs-toggle="dropdown"
            >
              {nav.name}
            </Link>
            {renderMenu(nav.data)}
          </li>
        ))}
      </ul>
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

        {/* Desktop Nav */}
        <div className="d-none d-lg-block">
          <DesktopNav />
        </div>

        {/* Mobile Nav */}
        <div className="d-lg-none w-100">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
