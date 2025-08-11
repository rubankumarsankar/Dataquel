import React from "react";
import wImg from "../../images/about/about_image_5.webp";
import { Link } from "react-router-dom";

import sIcon1 from "../../images/icons/01.png";
import sIcon2 from "../../images/icons/02.png";
import sIcon3 from "../../images/icons/03.png";
import sIcon4 from "../../images/icons/04.png";
import sIcon5 from "../../images/icons/05.png";
import sIcon6 from "../../images/icons/06.png";

const Policy = [
  {
    title: "Expertly Skilled Consultants",
    icon: sIcon1,
  },
  {
    title: "Comprehensive Tech Solutions",
    icon: sIcon2,
  },
  {
    title: "Flexible, Budget-Friendly Pricing",
    icon: sIcon3,
  },
  {
    title: "Collaborative Consulting Services",
    icon: sIcon4,
  },
  {
    title: "Scale-Ready Tech Frameworks",
    icon: sIcon5,
  },
  {
    title: "Top-Rated Technology Partnerships",
    icon: sIcon6,
  },
];

const WhyUs = (props) => {
  return (
    <section className="service_section section_space bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="image_wrap">
              <img src={wImg} alt="Techco - About" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ps-lg-5">
              <div className="heading_block">
                {/* <div className="heading_focus_text">
                                    <span className="badge bg-secondary text-white">Why Us</span>
                                    Better
                                </div> */}
                <h2 className="heading_text mb-0">
                  Discover The DataQuel Difference
                </h2>
              </div>
              <ul className="service_facilities_group unordered_list">
                {Policy.map((policy, pitem) => (
                  <li key={pitem}>
                    <strong className="iconbox_block layout_icon_left">
                      <span className="iconbox_icon-1">
                        <img src={policy.icon} alt="Dollar SVG Icon" />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">
                          {policy.title}
                        </strong>
                      </span>
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="section_space_1">
            {" "}
            <h2 className="text-center "> Ready To Get Started? </h2>
            <p className="text-center">
              Schedule your risk-free consultation to explore our technology
              solutions today.
            </p>
          </div>

          <div className="btns_group pb-0">
            <Link className="btn btn-outline-light" to="/">
              <span className="btn_label" data-text="Connect With Us">
                Connect With Us
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
