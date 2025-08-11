import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import about1 from '../../images/assets/about-2.png'
import about2 from '../../images/about/about_image_11.webp'
import about3 from '../../images/about/about_image_10.webp'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const About = (props) => {

    const [isOpen, setOpen] = useState(false)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about_section section_space">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="about_image_1">
                            <img src={about1} alt="Techco - About" />
                            <img src={about2} data-parallax='{"y" : 80, "smoothness": 6}' alt="Techco - About" />
                            <img src={about3} data-parallax='{"y" : -80, "smoothness": 6}' alt="Techco - About" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about_content">
                            <div className="heading_block">
                                {/* <div className="heading_focus_text">
                                    We are 😃
                                    <span className="badge bg-secondary text-white">Techco</span>
                                </div> */}
                                <h2 className="heading_text">
                                    Why Choose Us 
                                </h2>
                                <p className="heading_description mb-0">
                                    {/* Achieve compliance without guesswork:  */}
                                </p>
                            </div>
                            <ul className="icon_list unordered_list_block mb-5">
                                
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        Client-first approach: We dive into your unique challenges, crafting practical and measurable solutions. 
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        Proven expertise: Backed by years of experience and a track record of success, we ensure results you can count on   
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                       Trusted by leaders: Companies across sectors place their confidence in our delivery and expertise   
                                    </span>
                                </li>
                            </ul>
                            <ul className="btns_group unordered_list p-0 justify-content-start">
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} /> */}
        </section>
    )
}

export default About;