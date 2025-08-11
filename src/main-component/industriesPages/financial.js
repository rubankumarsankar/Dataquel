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
    title: "Advanced Data Protection",
    description:
      "Protecting user data is critical for financial services. We work with leading cloud-based platforms like Google Cloud and AWS, providing superior data security for mid-size and large-scale organizations alike.",
    image: "/assets/circle1.png",
  },
  {
    title: "Scale-Ready Solutions",
    description:
      "Our goal is to help you grow. That’s why our technology consulting practice focuses on flexible, scale-ready solutions delivered in one convenient place. Whether your operation requires more in-house applications or faster workflows, our team is here to deliver results at scale.",
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

const FinancialPage = (props) => {
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
          pageTitle={"Financial Services"}
          pageSubTitle={
            "Technology Consulting Services For Financial Institutions"
          }
          pageCon={`The financial services industry is evolving at a lightning pace, and DataQuel is here to help our clients stay one step ahead of the competition. Using best-in-class technology partners and a collaborative approach to IT and cybersecurity consulting, we help financial institutions grow their operations and enhance regulatory compliance with modern efficiency.`}
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
export default FinancialPage;
