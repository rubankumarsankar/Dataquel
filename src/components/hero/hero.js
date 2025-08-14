import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Add Framer Motion
import Bg1 from "../../images/shapes/it_solution_hero_bg_1.svg";
import Bg2 from "../../images/assets/img-2.webp";
import heroImg from "../../images/assets/img-1.webp";
import icon from "../../images/icons/icon_stars_trustpilot.svg";
import avatar1 from "../../images/profile/Profile-1.png";
import avatar2 from "../../images/profile/Profile-2.png";
import avatar3 from "../../images/profile/Profile-3.png";
import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section className="it_solution_hero_section">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-7">
            <motion.div
              className="it_solution_hero_content"
              style={{ backgroundImage: `url(${Bg1})` }}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <motion.h1 variants={fadeUp} custom={0.2}>
                Transform Your Business with DataQuel
              </motion.h1>
              <motion.p variants={fadeUp} custom={0.4}>
                Unlock streamlined operations, secure compliance, and assured IT
                outcomes tailored to your needs. Whether you're scaling systems
                or tightening data protection, we deliver trusted results that
                drive growth.
              </motion.p>

              <motion.ul
                className="btns_group unordered_list p-0 justify-content-start"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0.6}
              >
                <li>
                  <Link className="btn" to="/">
                    <span className="btn_label" data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <div className="review_short_info">
                    <div className="d-flex">
                      <img src={icon} alt="Techco - Trustpilot Review" />
                      <span>4.8</span>
                    </div>
                    <div className="review_counter">
                      From <b>200+</b> reviews
                    </div>
                  </div>
                </li>
              </motion.ul>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="col-lg-5">
            <ul className="it_solution_hero_images unordered_list">
              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.img
                  src={heroImg}
                  alt="Techco - IT Solution - Hero"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.li>

              <motion.li
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.8}
              >
                <div className="worldwide_clients">
                  <div className="counter_value">
                    {/*
        Animate only when in view
      */}
                    <CountUp
                      start={0}
                      end={150}
                      duration={2}
                      suffix="+"
                      enableScrollSpy
                      scrollSpyDelay={0}
                    />
                  </div>
                  <p>Clients Worldwide</p>
                  <ul className="avatar_group unordered_list">
                    <li>
                      <img src={avatar1} alt="Techco - Avatar" />
                    </li>
                    <li>
                      <img src={avatar2} alt="Techco - Avatar" />
                    </li>
                    <li>
                      <img src={avatar3} alt="Techco - Avatar" />
                    </li>
                    <li>5k+</li>
                  </ul>
                </div>
              </motion.li>

              {/* Categories */}
              <motion.li
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <ul className="categories unordered_list_block">
                  <li>
                    <Link to="/">
                      <span>IT Solutions </span>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>Data Security</span>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa-solid fa-plus"></i>
                      <span>Web Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>Analytics & Optimization</span>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                </ul>
              </motion.li>

              {/* Business Growth */}
              <motion.li
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              >
                <div
                  className="business_growth_content"
                  style={{ backgroundImage: `url(${Bg2})` }}
                >
                  <div className="business_growth">
                    <div className="progress_content">
                      <motion.svg
                        role="progressbar"
                        width="260"
                        height="260"
                        viewBox="0 0 100 100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="88"
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <circle
                          cx="50%"
                          cy="50%"
                          r="42"
                          fill="none"
                          stroke="#f1f1f1"
                          strokeWidth="5"
                        ></circle>
                        <motion.circle
                          cx="50%"
                          cy="50%"
                          r="42"
                          fill="none"
                          strokeWidth="10"
                          strokeDashoffset="15.68"
                          strokeDasharray="264"
                          strokeLinecap="round"
                          style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%",
                          }}
                          stroke="#fff"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 0.95 }} // ✅ 97% fill
                          transition={{
                            duration: 2,
                            ease: "easeOut",
                            delay: 1.5,
                          }}
                        />

                        <text
                          x="50%"
                          y="40%"
                          fill="#fff"
                          textAnchor="middle"
                          dy="0.35em"
                          fontSize="1.6rem"
                          fontWeight="400"
                        >
                          <tspan>97</tspan>
                          <tspan>%</tspan>
                        </text>
                      </motion.svg>
                      <p>
                        Customer-Centric, Solving Real Problems, Driving Real
                        Business Growth
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
