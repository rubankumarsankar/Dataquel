import React from "react";
import PartnerSection from "../PartnerSection";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

import sIcon1 from "../../images/icons/icon_head.svg";
import sIcon2 from "../../images/icons/icon_check.svg";
import sIcon3 from "../../images/icons/icon_like.svg";
import sIcon4 from "../../images/icons/icon_dart_board.svg";
import Bg from "../../images/shapes/bg_pattern_1.svg";
import fimg from "../../images/about/about_image_1.webp";

const FunFact = [
  {
    title: "25",
    subTitle: "Years of experience",
    symbol: "+",
    icon: sIcon1,
  },
  {
    title: "280",
    subTitle: "Success Stories",
    symbol: "+",
    icon: sIcon2,
  },
  {
    title: "5.6",
    subTitle: "Companies Trust Us",
    symbol: "K+",
    icon: sIcon3,
  },
  {
    title: "100",
    subTitle: "Results Guaranteed",
    symbol: "%",
    icon: sIcon4,
  },
];

const FeaturesNew = (props) => {
  return (
    <>
      <section
        className="client_logo_section "
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="container">
          <div className="section_space pt-0">
            <div className="text-center">
              {/* <div className="heading_focus_text mb-0">
                            Our Best-In-Class Partners
                        </div> */}
              <h2 className="text-dark mb-4">Our Tech Partners</h2>
            </div>
            <PartnerSection />
          </div>
        </div>
      </section>
      <section className="section_space_1">
        <div className="container">
          <div className="section_space pt-0">
            <div className=" text-center">
              {/* <div className="heading_focus_text mb-0">
                            Our Best-In-Class Partners
                        </div> */}
              <h2 className="text-dark ">Become A Partner</h2>
            </div>
            <div className="container">
              <div className="btns_group pb-0">
                <Link className="btn btn-outline-light" to="/">
                  <span className="btn_label" data-text="Connect With US">
                    Connect With US
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            {/* <PartnerSection /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesNew;
