import React from "react";
import { Link } from "react-router-dom";

import sIcon1 from "../../images/icons/icon_clock.svg";
import sIcon2 from "../../images/icons/icon_dart_board_2.svg";
import sIcon3 from "../../images/icons/icon_target.svg";

const Policy = [
  {
    title: "Client-first approach",
    subTitle:
      "We dive into your unique challenges, crafting practical and measurable solutions.",
    icon: sIcon1,
  },
  {
    title: "Proven expertise",
    subTitle:
      "Backed by years of experience and a track record of success, we ensure results you can count on.",
    icon: sIcon2,
  },
  {
    title: "Trusted by leaders",
    subTitle:
      "Companies across sectors place their confidence in our delivery and expertise.",
    icon: sIcon3,
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="intro_about_section section_space bg-light">
        <div className="container">
          <div className="heading_block mb-0">
            <div className="row justify-content-lg-between align-items-center">
              <div className="col-lg-4">
                <div className="heading_focus_text">
                  About
                  <span className="badge bg-secondary text-white ms-2">
                    Techco 🙂
                  </span>
                </div>
                <h2 className="heading_text mb-0">Why Choose Us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="policy_section bg-light py-5">
        <div className="container">
          <div className="row">
            {Policy.map((policy, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="iconbox_block p-4 bg-white shadow-sm rounded h-100">
                  <div className="iconbox_icon mb-3">
                    <img src={policy.icon} alt={`${policy.title} Icon`} />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">{policy.title}</h3>
                    <p className="mb-0">{policy.subTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btns_group pb-0">
            <Link className="btn btn-outline-light" to="/">
              <span className="btn_label" data-text="Read More">
                Read More
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
