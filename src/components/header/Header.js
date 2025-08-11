import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/icons/icon_wifi.svg";
import icon2 from "../../images/icons/icon_dollar_2.svg";
import icon3 from "../../images/icons/icon_chart.svg";
import icon4 from "../../images/icons/icon_tag_2.svg";
import icon5 from "../../images/icons/icon_user_2.svg";
import icon6 from "../../images/icons/icon_users.svg";
import icon7 from "../../images/icons/icon_pen.svg";
import icon8 from "../../images/clients/client_logo_9.webp";
import icon9 from "../../images/clients/client_logo_10.webp";
import icon10 from "../../images/avatar/avatar_7.webp";
import icon11 from "../../images/icons/icon_quote.svg";
import logo from "../../images/site_logo/logo.webp";
import cases from "../../images/case/case_image_4.webp";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Technology, Platforms, Certifications, Industries, About } from "../../api/header";

const Header = (props) => {
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <header className="site_header site_header_1">
      {/* <div className="header_top text-center">
                <div className="container">
                    <p className="m-0">Subscribe us and receive <b>20% bonus</b> discount on checkout. <Link onClick={ClickHandler} to="/pricing"><u>Learn more</u> <i className="fa-solid fa-angle-right"></i></Link></p>
                </div>
            </div> */}
      <div
        className={`header_bottom stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-5">
              <div className="site_logo">
                <Link onClick={ClickHandler} className="site_link" to="/">
                  <img
                    src={logo}
                    alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template"
                  />
                </Link>
                {/* <div className="badge bg-danger-subtle text-danger">We’re Hiring</div> */}
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    {/* <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" to="/" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Home
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="home_submenu">
                                                <li><Link onClick={ClickHandler} to="/">IT Solution</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home_software_company">Software Company</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home_business_consulting">Business Consulting</Link></li>
                                            </ul>
                                        </li> */}

                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Technology Consulting
                      </Link>

                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div
                                className="megamenu_pages_wrapper w-full mb-5 bg-dark text-white p-4 rounded"
                                style={{
                                  maxHeight: "370px",
                                  overflowY: "auto",
                                }}
                              >
                                <div className="row">
                                  {/* ✅ Map over multiple sections if needed */}
                                  {Technology.map((section, sectionIndex) => (
                                    <div
                                      key={sectionIndex}
                                      className="mb-5 w-full"
                                    >
                                      {/* ✅ Subheading */}
                                      <h4 className="text-xl text-warning font-semibold mb-4">
                                        {section.subHeading}
                                      </h4>

                                      <div className="row">
                                        {section.items.map(
                                          (item, itemIndex) => (
                                            <div
                                              className="col-lg-3 col-md-6 mb-4"
                                              key={itemIndex}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                className="iconbox_block_2"
                                                to={item.link}
                                              >
                                                <span className="icon_title_wrap">
                                                  <small className="iconbox_icon bg-light">
                                                    <img
                                                      src={item.iconImg}
                                                      alt={`${item.title} Icon`}
                                                      loading="lazy"
                                                    />
                                                  </small>
                                                  <small className="iconbox_title text-warning">
                                                    {item.title}
                                                  </small>
                                                </span>
                                                <span className="description hover:text-dark text-light mb-0">
                                                  {item.desc}
                                                </span>
                                              </Link>
                                            </div>
                                          )
                                        )}
                                      </div>

                                      {/* ✅ Horizontal line after each section */}
                                      <hr className="mt-4 border-t border-white/20" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Tech Platforms
                      </Link>

                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div
                                className="megamenu_pages_wrapper w-full mb-5 bg-dark text-white p-4 rounded"
                                style={{
                                  maxHeight: "370px",
                                  overflowY: "auto",
                                }}
                              >
                                <div className="row">
                                  {/* ✅ Map over multiple sections if needed */}
                                  {Platforms.map((section, sectionIndex) => (
                                    <div
                                      key={sectionIndex}
                                      className="mb-5 w-full"
                                    >
                                      {/* ✅ Subheading */}
                                      <h4 className="text-xl text-warning font-semibold mb-4">
                                        {section.subHeading}
                                      </h4>

                                      <div className="row">
                                        {section.items.map(
                                          (item, itemIndex) => (
                                            <div
                                              className="col-lg-3 col-md-6 mb-4"
                                              key={itemIndex}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                className="iconbox_block_2"
                                                to={item.link}
                                              >
                                                <span className="icon_title_wrap">
                                                  <small className="iconbox_icon bg-light">
                                                    <img
                                                      src={item.iconImg}
                                                      alt={`${item.title} Icon`}
                                                      loading="lazy"
                                                    />
                                                  </small>
                                                  <small className="iconbox_title text-warning">
                                                    {item.title}
                                                  </small>
                                                </span>
                                                <span className="description hover:text-dark text-light mb-0">
                                                  {item.desc}
                                                </span>
                                              </Link>
                                            </div>
                                          )
                                        )}
                                      </div>

                                      {/* ✅ Horizontal line after each section */}
                                      <hr className="mt-4 border-t border-white/20" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Certifications
                      </Link>

                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div
                                className="megamenu_pages_wrapper w-full mb-5 bg-dark text-white p-4 rounded"
                                style={{
                                  maxHeight: "370px",
                                  overflowY: "auto",
                                }}
                              >
                                <div className="row">
                                  {/* ✅ Map over multiple sections if needed */}
                                  {Certifications.map((section, sectionIndex) => (
                                    <div
                                      key={sectionIndex}
                                      className="mb-5 w-full"
                                    >
                                      {/* ✅ Subheading */}
                                      <h4 className="text-xl text-warning font-semibold mb-4">
                                        {section.subHeading}
                                      </h4>

                                      <div className="row">
                                        {section.items.map(
                                          (item, itemIndex) => (
                                            <div
                                              className="col-lg-3 col-md-6 mb-4"
                                              key={itemIndex}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                className="iconbox_block_2"
                                                to={item.link}
                                              >
                                                <span className="icon_title_wrap">
                                                  <small className="iconbox_icon bg-light">
                                                    <img
                                                      src={item.iconImg}
                                                      alt={`${item.title} Icon`}
                                                      loading="lazy"
                                                    />
                                                  </small>
                                                  <small className="iconbox_title text-warning">
                                                    {item.title}
                                                  </small>
                                                </span>
                                                <span className="description hover:text-dark text-light mb-0">
                                                  {item.desc}
                                                </span>
                                              </Link>
                                            </div>
                                          )
                                        )}
                                      </div>

                                      {/* ✅ Horizontal line after each section */}
                                      <hr className="mt-4 border-t border-white/20" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Industries
                      </Link>

                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div
                                className="megamenu_pages_wrapper w-full mb-5 bg-dark text-white p-4 rounded"
                                style={{
                                  maxHeight: "370px",
                                  overflowY: "auto",
                                }}
                              >
                                <div className="row">
                                  {/* ✅ Map over multiple sections if needed */}
                                  {Industries.map((section, sectionIndex) => (
                                    <div
                                      key={sectionIndex}
                                      className="mb-5 w-full"
                                    >
                                      {/* ✅ Subheading */}
                                      <h4 className="text-xl text-warning font-semibold mb-4">
                                        {section.subHeading}
                                      </h4>

                                      <div className="row">
                                        {section.items.map(
                                          (item, itemIndex) => (
                                            <div
                                              className="col-lg-3 col-md-6 mb-4"
                                              key={itemIndex}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                className="iconbox_block_2"
                                                to={item.link}
                                              >
                                                <span className="icon_title_wrap">
                                                  <small className="iconbox_icon bg-light">
                                                    <img
                                                      src={item.iconImg}
                                                      alt={`${item.title} Icon`}
                                                      loading="lazy"
                                                    />
                                                  </small>
                                                  <small className="iconbox_title text-warning">
                                                    {item.title}
                                                  </small>
                                                </span>
                                                <span className="description hover:text-dark text-light mb-0">
                                                  {item.desc}
                                                </span>
                                              </Link>
                                            </div>
                                          )
                                        )}
                                      </div>

                                      {/* ✅ Horizontal line after each section */}
                                      <hr className="mt-4 border-t border-white/20" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        to="/"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        About Us
                      </Link>

                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div
                                className="megamenu_pages_wrapper w-full mb-5 bg-dark text-white p-4 rounded"
                                style={{
                                  maxHeight: "370px",
                                  overflowY: "auto",
                                }}
                              >
                                <div className="row">
                                  {/* ✅ Map over multiple sections if needed */}
                                  {About.map((section, sectionIndex) => (
                                    <div
                                      key={sectionIndex}
                                      className="mb-5 w-full"
                                    >
                                      {/* ✅ Subheading */}
                                      <h4 className="text-xl text-warning font-semibold mb-4">
                                        {section.subHeading}
                                      </h4>

                                      <div className="row">
                                        {section.items.map(
                                          (item, itemIndex) => (
                                            <div
                                              className="col-lg-3 col-md-6 mb-4"
                                              key={itemIndex}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                className="iconbox_block_2"
                                                to={item.link}
                                              >
                                                <span className="icon_title_wrap">
                                                  <small className="iconbox_icon bg-light">
                                                    <img
                                                      src={item.iconImg}
                                                      alt={`${item.title} Icon`}
                                                      loading="lazy"
                                                    />
                                                  </small>
                                                  <small className="iconbox_title text-warning">
                                                    {item.title}
                                                  </small>
                                                </span>
                                                <span className="description hover:text-dark text-light mb-0">
                                                  {item.desc}
                                                </span>
                                              </Link>
                                            </div>
                                          )
                                        )}
                                      </div>

                                      {/* ✅ Horizontal line after each section */}
                                      <hr className="mt-4 border-t border-white/20" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-xl-3 col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    onClick={() => setMobailState(!mobailActive)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    className="btn btn-outline-light"
                    to="#"
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
          </div>
        </div>
        <div className="mobail-wrap">
          <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
            <div className="xb-header-menu-scroll">
              <div
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={() => setMobailState(!mobailActive)}
              ></div>
              <nav className="xb-header-nav">
                <MobileMenu />
              </nav>
            </div>
          </div>
          <div
            className="xb-header-menu-backdrop"
            onClick={() => setMobailState(false)}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
