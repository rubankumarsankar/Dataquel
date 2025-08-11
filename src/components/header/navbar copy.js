import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import logo from "../../images/site_logo/logo.webp";
import {
  Technology,
  Platforms,
  Certifications,
  Industries,
  About,
} from "../../api/header";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const ClickHandler = () => window.scrollTo(0, 0);

  const isActive = (pathArray) =>
    pathArray.some((path) => location.pathname.startsWith(path));

  const renderMegaMenu = (dataArray) => (
    <div className="dropdown-menu mega_menu_wrapper">
      <div className="container">
        <div className="megamenu_pages_wrapper">
          <div className="row">
            {dataArray.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-5 w-full">
                <h4 className="text-white font-semibold mb-4">
                  {section.subHeading}
                </h4>
                <div className="row">
                  {section.items.map((item, itemIndex) => (
                    <div className="col-lg-3 col-md-12 mb-4" key={itemIndex}>
                      <Link
                        onClick={ClickHandler}
                        to={item.link}
                        className="d-flex align-items-center p-3 h-100 text-decoration-none menu-item-link"
                      >
                        <div className="me-3 flex-shrink-0 icon-wrapper">
                          <img
                            src={item.iconImg}
                            alt={`${item.title} Icon`}
                            loading="lazy"
                            className="menu-icon"
                          />
                        </div>
                        <div className="text-start">
                          <small className="d-block fw-bold text-warning mb-1">
                            {item.title}
                          </small>
                          <span className="small">{item.desc}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <hr className="mt-4 border-t border-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

 const menuItems = [
  { label: "Technology Consulting", data: Technology, link: "/technology" },
  { label: "Tech Platforms", data: Platforms, link: "/platforms" },
  { label: "Certifications", data: Certifications, link: "/certifications" },
  { label: "Industries", data: Industries, link: "/industries" },
  { label: "About Us", data: About, link: "/about" },
];


  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar sticky-top py-3">
        <div className="container-fluid px-lg-5">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" className="logo-icon" />
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end ${
              isMenuOpen ? "hide-when-mobile-menu-open" : ""
            }`}
            id="navbarMenu"
          >
            <ul className="navbar-nav align-items-center gap-lg-4">
              {menuItems.map((item, index) => (
  <li
    key={index}
    className={`nav-item dropdown ${
      isActive([item.link]) ? "active-link" : ""
    }`}
  >
    {item.data && item.data.length > 0 ? (
      <Link
        to={item.link}
        className="nav-link dropdown-toggle d-flex align-items-center"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {item.label}
      </Link>
    ) : (
      <Link
        to={item.link}
        className="nav-link d-flex align-items-center"
        role="button"
      >
        {item.label}
      </Link>
    )}

    {item.data && item.data.length > 0 && renderMegaMenu(item.data)}
  </li>
))}


              <li className="nav-item">
                <Link to="#" className="contact-btn" onClick={ClickHandler}>
                  <span>Contact Us</span>
                  <span className="arrow">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <MobileMenu
          onClose={() => setIsMenuOpen(false)}
          menuItems={menuItems}
        />
      )}
    </>
  );
}

function MobileMenu({ onClose, menuItems }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu-body open">
        {/* Header */}
        <div className="mobile-menu-header d-flex justify-content-between align-items-center">
          <img src={logo} alt="Logo" className="logo-icon" />
          <button onClick={onClose} className="btn-close">
            <X />
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-3">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-3">
              <button
                onClick={() => toggleDropdown(index)}
                className="d-flex justify-content-between align-items-center w-100 menu-toggle-btn"
              >
                <span
                  className={openIndex === index ? "text-primary fw-bold" : ""}
                >
                  {item.label}
                </span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>

              {openIndex === index && (
                <div className="mt-3 megamenu_pages_wrapper">
                  {item.data.map((section, i) => (
                    <div key={i} className="mb-4">
                      <h4 className="text-warning mb-2">
                        {section.subHeading}
                      </h4>
                      {section.items.map((sub, j) => (
                        <Link
                          to={sub.link}
                          key={j}
                          onClick={onClose}
                          className="d-flex align-items-start p-2 text-decoration-none menu-item-link"
                        >
                          <img
                            src={sub.iconImg}
                            alt={`${sub.title} Icon`}
                            className="menu-icon me-2"
                            loading="lazy"
                          />
                          <div>
                            <small className="fw-bold text-warning d-block">
                              {sub.title}
                            </small>
                            <span className="small text-white">{sub.desc}</span>
                          </div>
                        </Link>
                      ))}
                      <hr className="border-white opacity-25 mt-3" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="#" className="contact-btn">
            <span>Contact Us</span>
            <span className="arrow">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
