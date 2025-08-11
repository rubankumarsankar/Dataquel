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
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Locations.css"; // Custom CSS
import MainNavbar from "../../components/header/MainHeader";


const locations = [
  {
    title: "Location 1",
    address: ["2030 Main St,", "Suite 1300,", "Irvine, CA 92614"],
    phone: "+1 (949) 546-6600",
    fax: "+1 (949) 546-6800",
  },
  {
    title: "Location 2",
    address: ["2030 Main St,", "Suite 1300,", "Irvine, CA 92614"],
    phone: "+1 (949) 546-6600",
    fax: "+1 (949) 546-6800",
  },
  {
    title: "Location 3",
    address: ["2030 Main St,", "Suite 1300,", "Irvine, CA 92614"],
    phone: "+1 (949) 546-6600",
    fax: "+1 (949) 546-6800",
  },
  {
    title: "Location 4",
    address: ["2030 Main St,", "Suite 1300,", "Irvine, CA 92614"],
    phone: "+1 (949) 546-6600",
    fax: "+1 (949) 546-6800",
  },
];

const LocationsPage = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      {/* <Header /> */}
      <MainNavbar />
      <main
        className=" bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('../../images/shapes/Bannerbg.webp')" }} // <-- adjust the path
      >
        <PageTitle
          pageTitle={"Locations"}
          pageSubTitle={"Find A Technology Consultant Near You"}
          pageCon={`Looking for hands-on tech support? Visit the DataQuel team at any of our locations to create a personalized plan today.`}
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
        <section className="py-5  text-center">
          <div className="container">
            <h2 className="mb-5 text-dark fw-bold">Where To Find Us</h2>
            <div className="row justify-content-center">
              {locations.map((loc, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div className="card location-card h-100 shadow-sm border-0">
                    <div className="card-body text-start">
                      <h5 className="card-title fw-bold text-dark">
                        {loc.title}
                      </h5>
                      <address className="card-text mb-2">
                        {loc.address.map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                        <div className="mt-2">
                          <strong className="text-danger">Phone:</strong>{" "}
                          <span>{loc.phone}</span>
                        </div>
                        <div>
                          <strong className="text-warning">Fax:</strong>{" "}
                          <span>{loc.fax}</span>
                        </div>
                      </address>
                    </div>
                  </div>
                </div>
              ))}
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
                <h2 className="text-dark mb-4">
                  Can’t Find A Nearby Location?
                </h2>
                <p className="text-dark text-center py-20 ">
                  Our technology consulting services were created for clients
                  both near and far. <br />
                  Schedule a risk-free virtual consultation today.
                </p>
              </div>
              <div className="container">
                <div className="btns_group pb-0">
                  <Link className="btn btn-outline-light" to="/">
                    <span className="btn_label" data-text="Lets Connect">
                      Lets Connect
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
export default LocationsPage;
