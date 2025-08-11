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
    title: "Faster Payment Processing",
    description:
      "With cloud-based processing solutions, you can securely process more payments in a fraction of the time. Most importantly, you can safeguard customer data and boost brand trust amongst your frequent buyers.",
    image: "/assets/circle1.png",
  },
  {
    title: "Attract & Serve More Customers",
    description:
      "DataQuel partners with expert SEO and digital marketing specialists to organically attract new customers to your business. Combined with our workflow optimization strategies, we give you the freedom to expand your operation and drive more sales.",
    image: "/assets/circle2.png",
  },
  {
    title: "Expert Technology Consulting",
    description:
      "No matter where you choose to host your retail shop, DataQuel’s technology consulting services can help you minimize redundant tasks and maximize your growth potential. Leveraging support from platforms like Microsoft, Google Cloud, and AWS, we make it easy to modernize your retail business.",
    image: "/assets/circle3.png",
  },
];

const solutions = [
  { title: "IT Consulting", link: "/it-consulting" },
  { title: "Cybersecurity Consulting", link: "/contuct" },
  { title: "Modern Software Delivery", link: "/contuct" },
  { title: "Workplace Modernization", link: "/contuct" },
];

const RetailPage = (props) => {
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
          pageTitle={"Retail"}
          pageSubTitle={"Technology Consulting Services For Retail Brands"}
          pageCon={`The eCommerce space is thriving. Now, DataQuel is here to help modern retail brands create a competitive edge with advanced technology solutions. Whether you run a brick-and-mortar store or a fully online shop, our team of technology consultants is here to help you serve more customers with fewer costs.`}
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
export default RetailPage;
