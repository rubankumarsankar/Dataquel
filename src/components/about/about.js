import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // ✅ For animations
import about1 from '../../images/assets/about-2.png';
import about2 from '../../images/about/about_image_11.webp';
import about3 from '../../images/about/about_image_10.webp';
// import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' }
  })
};

const About = () => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="about_section section_space">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          
          {/* Left Images */}
          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="about_image_1">
              <motion.img
                src={about1}
                alt="Techco - About"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.img
                src={about2}
                data-parallax='{"y" : 80, "smoothness": 6}'
                alt="Techco - About"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.img
                src={about3}
                data-parallax='{"y" : -80, "smoothness": 6}'
                alt="Techco - About"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="about_content">
              <div className="heading_block">
                <h2 className="heading_text">Why Choose Us</h2>
              </div>

              {/* List Items with stagger */}
              <motion.ul
                className="icon_list unordered_list_block mb-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Client-first approach: We dive into your unique challenges, crafting practical and measurable solutions.",
                  "Proven expertise: Backed by years of experience and a track record of success, we ensure results you can count on.",
                  "Trusted by leaders: Companies across sectors place their confidence in our delivery and expertise."
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="d-flex align-items-start"
                  >
                    <span className="icon_list_icon">
                      <i className="fa-solid fa-circle fa-fw"></i>
                    </span>
                    <span className="icon_list_text">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Buttons */}
              <motion.ul
                className="btns_group unordered_list p-0 justify-content-start"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <li>
                  <Link onClick={ClickHandler} to="/" className="btn">
                    <span className="btn_label" data-text="Get Started">Get Started</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <button className="video_btn" onClick={() => setOpen(true)}>
                    <span className="btn_icon">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    <span className="btn_label">How We Works</span>
                  </button>
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal Video */}
      {/* <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      /> */}
    </section>
  );
};

export default About;
