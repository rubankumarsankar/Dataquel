import React, { Fragment, useState } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import aImg from "../../images/about/about-01.webp";
import aImg2 from "../../images/about/about-02.webp";
import Navbar from "../../components/header/navbar";
import "./financial.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import MainNavbar from "../../components/header/MainHeader";

const data = [
  {
    title: "Optimize Internal Processes",
    description:
      "Efficiency is the key to faster manufacturing speeds. We work with cloud-computing platforms like Google Cloud and AWS to optimize internal processes and eliminate redundant tasks for your team. From supply chain coordination to on-site engineers, we keep your operation running seamlessly.",
    image: "/assets/circle1.png",
  },
  {
    title: "Enhanced Inventory Management",
    description:
      "As supply chains fluctuate, DataQuel keeps your operation ahead of the trends with AI-driven data analytics that take the guesswork out of managing your inventory. With these tools, you can quickly avoid production setbacks and provide better service to your clients.",
    image: "/assets/circle2.png",
  },
  {
    title: "Expert Technology Consulting",
    description:
      "We know that manufacturing operations contain many moving parts, and our goal is create streamlined IT strategies that facilitate smoother productions and minimize disruptions. So, your operation can continue thriving, even in times of uncertainty.",
    image: "/assets/circle3.png",
  },
];

const solutions = [
  { title: "IT Consulting", link: "/it-consulting" },
  { title: "Cybersecurity Consulting", link: "/contuct" },
  { title: "Modern Software Delivery", link: "/contuct" },
  { title: "Workplace Modernization", link: "/contuct" },
];

const ManufacturingPage = (props) => {
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
          pageTitle={"Manufacturing"}
          pageSubTitle={"Technology Consulting Services For Manufacturing"}
          pageCon={`Manufacturing operations are the backbone of today’s global economy. At DataQuel, we’re committed to serving modern manufacturers with cost-effective technology solutions designed to streamline processes and expedite results. No matter what you’re producing, our team has an advanced solution for you.`}
        />

        <section className="container py-5">
          <div className="centered">
            <h5 className="fw-bold mb-4">How We Can Help:</h5>
            <div className="row g-4">
              {data.map((item, idx) => (
                <div className="col-12" key={idx}>
                  <div
                    className={`card custom-card h-100 p-4 d-flex flex-md-row align-items-center ${
                      idx % 2 !== 0 ? "flex-md-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-grow-1">
                      <h6 className="fw-bold">{item.title}</h6>
                      <p className="mb-0">{item.description}</p>
                    </div>
                    <div className="ms-md-4 mt-3 mt-md-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid circle-img"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="centered">
            {/* Heading */}
            <h5 className="fw-bold mb-4">How We Can Help:</h5>

            {/* Solutions Grid */}
            <div className="container mt-4">
              <div className="row g-3">
                {solutions.map((item, idx) => (
                  <div className="col-12 col-md-6" key={idx}>
                    <Link
                      to={item.link}
                      className="text-decoration-none solution-card d-flex justify-content-between align-items-center p-3"
                    >
                      <span className="fw-semibold text-dark">
                        {item.title}
                      </span>
                      <FiArrowRight className="arrow-icon " />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section_space_1">
          <div className="container">
            <div className="section_space pt-0">
              <div className=" text-center">
                <h2 className="text-dark ">Ready To Get Started?</h2>
                <div className="heading_focus_text mb-0">
                  Schedule your risk-free consultation to explore our technology
                  solutions today.
                </div>
              </div>
              <div className="container">
                <div className="btns_group pb-0">
                  <Link className="btn btn-outline-light" to="/">
                    <span className="btn_label" data-text="Let's Connect">
                      Let's Connect
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
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      /> */}
    </Fragment>
  );
};
export default ManufacturingPage;
