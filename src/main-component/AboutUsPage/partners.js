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
import FeaturesNew from "../../components/FeaturesSection/featuresnew";
import MainNavbar from "../../components/header/MainHeader";

const PartnersPage = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      {/* <Header /> */}
      <MainNavbar />
      <main
        className=" bg-cover bg-center bg-no-repeat main-rounded"
        style={{
          backgroundImage: "url('../../images/shapes/Bannerbg.webp')",
          borderRadius: "20px",
        }}
      >
        <PageTitle
          pageTitle={"Partners"}
          pageSubTitle={"Join The DataQuel Network"}
          pageCon={`We proudly partner with best-in-class software companies, technology platforms, SEO, and marketing firms to ensure high-quality results for our clients. Explore our current partnerships and learn how to join the DataQuel network today.`}
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
        </section>
        {/* <PolicySection /> */}
        <FeaturesNew />
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
export default PartnersPage;
