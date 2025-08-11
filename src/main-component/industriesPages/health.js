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
    title: "Protect Patient Data",
    description:
      "Maintaining regulatory compliance and avoiding costly data breaches doesn’t have to be complicated. We proudly partner with industry-leading cloud-based platforms that allow you to grow your patient base without compromising your data security.",
    image: "/assets/circle1.png",
  },
  {
    title: "More Efficient Workflows",
    description:
      "Happier patients lead to lasting growth. Our systems allow your administration staff and providers to work together as a unified force, creating more efficient workflows and eliminating redundant tasks with automated, AI-driven solutions you can count on.",
    image: "/assets/circle2.png",
  },
  {
    title: "Expert Technology Consulting",
    description:
      "We’re not here to disrupt your operations. Instead, we work hand-in-hand with our clients to improve decision-making procedures and maximize performance across their operations. From selecting the right tech tools for your business to providing hands-on training for your teams, our consultants make upgrading your IT strategy effortless.",
    image: "/assets/circle3.png",
  },
];

const solutions = [
  { title: "IT Consulting", link: "/it-consulting" },
  { title: "Cybersecurity Consulting", link: "/contuct" },
  { title: "Modern Software Delivery", link: "/contuct" },
  { title: "Workplace Modernization", link: "/contuct" },
];

const HealthPage = (props) => {
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
          pageTitle={"Health Care"}
          pageSubTitle={
            "Technology Consulting Services For Health Care Providers"
          }
          pageCon={`At DataQuel, we understand that exceptional patient care comes first. As an IT consulting firm in the healthcare industry, we strive to create seamless workflows and cost-effective solutions that empower providers to serve more patients and create better outcomes. Let us handle your IT strategies so you can focus on providing great care.`}
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
export default HealthPage;
