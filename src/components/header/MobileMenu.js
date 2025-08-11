import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import logo from "../../images/site_logo/logo.webp";

import {
  Technology,
  Platforms,
  Certifications,
  Industries,
  About,
} from "../../api/header";

const menuItems = [
  { label: "Technology Consulting", data: Technology, path: "/technology" },
  { label: "Tech Platforms", data: Platforms, path: "/platforms" },
  { label: "Certifications", data: Certifications, path: "/certifications" },
  { label: "Industries", data: Industries, path: "/industries" },
  { label: "About Us", data: About, path: "/about" },
];

export default function MobileMenu({ onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mobile-menu-overlay">
        <div className={`mobile-menu-body p-3 ${true ? "open" : ""}`}>
            <div className="mobile-menu-header d-flex justify-content-between align-items-center p-3 border-bottom">
        <img src={logo} alt="Logo" className="logo-icon" />
        <button onClick={onClose} className="btn-close">
          {/* <X /> */}
        </button>
      </div>
</div>
      

      <div className="mobile-menu-body p-3">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-3">
            <button
              onClick={() => toggleDropdown(index)}
              className="d-flex justify-content-between align-items-center w-100 menu-toggle-btn"
            >
              <span className={openIndex === index ? "text-primary fw-bold" : ""}>
                {item.label}
              </span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>

            {openIndex === index && (
              <div className="mt-3 megamenu_pages_wrapper">
                {item.data.map((section, i) => (
                  <div key={i} className="mb-4">
                    <h4 className="text-warning mb-2">{section.subHeading}</h4>
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

        <Link to="/contact" onClick={onClose} className="btn btn-outline-dark w-100 mt-4">
          Contact Us →
        </Link>
      </div>
    </div>
  );
}
