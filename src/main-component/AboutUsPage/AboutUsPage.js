import React, { Fragment, useState } from "react";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import aImg from "../../images/about/about-01.webp";
import aImg2 from "../../images/about/about-02.webp";
import ModalVideo from "react-modal-video";
import PolicySection from "./Policy";
import WhyUs from "./WhyUs";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import Navbar from "../../components/header/navbar";
import FeaturesSectionnew from "../../components/FeaturesSection/features";
import WhyDataQuel from "./WhyDataQuel";
import MainNavbar from "../../components/header/MainHeader";

const AboutUsPage = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <MainNavbar />
      <main
        className=" bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('../../images/shapes/Bannerbg.webp')" }} // <-- adjust the path
      >
        <PageTitle
          pageTitle={"About Us"}
          pageSubTitle={"We Make Technology Consulting Personal"}
          pageCon={`DataQuel knows that no two operations are exactly alike. That’s why our IT and cybersecurity consulting services blend expert insights and collaborative solutions, giving our clients the power to enhance their tech strategies on their own terms. Simply put, we’re to bring your tech vision to life.`}
        />

        <section className="intro_about_section section_space bg-light">
          <div className="intro_about_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="image_wrap">
                    <img src={aImg} alt="Techco - About " />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="image_wrap position-relative">
                    <img src={aImg2} alt="Techco - About" />
                    <button
                      className="video_btn ripple_effect"
                      onClick={() => setOpen(true)}
                    >
                      <span className="btn_icon">
                        <i className="fa-solid fa-play"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container">
                        <div className="heading_block mb-0">
                            <div className="row justify-content-lg-between">
                                <div className="col-lg-4">
                                    <div className="heading_focus_text">
                                        About
                                        <span className="badge bg-secondary text-white">Techco 🙂</span>
                                    </div>
                                    <h2 className="heading_text mb-0">
                                        We Provide You Flexible Services
                                    </h2>
                                </div>
                                <div className="col-lg-6">
                                    <p className="heading_description mb-0">
                                        At Techco, we pride ourselves on offering dynamic and  IT  to suit your specific requirements. Our flexible approach means we can  adjust our offerings to accommodate your evolving needs, whether you require comprehensive IT infrastructure support, strategic consultancy, software development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </section>
        <PolicySection />
        <FeaturesSectionnew />
        <WhyDataQuel />
        <TeamSection />
        <WhyUs />
      </main>
      <Footer />
      <Scrollbar />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};
export default AboutUsPage;
