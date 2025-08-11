import React, { Fragment, useState } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import aImg from "../../images/about/about-01.webp";
import aImg2 from "../../images/about/about-02.webp";
import Navbar from "../../components/header/navbar";
import "./teck.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { BsShieldCheck, BsGraphUp } from "react-icons/bs";
import {
  BsBriefcase,
  BsPeople,
  BsShieldLock,
  BsRobot,
  BsGrid,
} from "react-icons/bs";
import MainNavbar from "../../components/header/MainHeader";

const features_1 = [
  {
    icon: <BsShieldCheck size={40} className="text-warning mb-3" />,
    title: "Scale-Friendly Solutions",
    description:
      "As one of the world’s largest cloud-based networks, Google Cloud makes it easy to scale your operations and quickly integrate new tools into your tech stack.",
  },
  {
    icon: <BsShieldLock size={40} className="text-warning mb-3" />,
    title: "Advanced Data Security",
    description:
      "Google’s data centers provide top-notch data security for growing operations, allowing you to enhance regulatory compliance and confidently serve more customers.",
  },
  {
    icon: <BsGraphUp size={40} className="text-warning mb-3" />,
    title: "Cost-Effective Platform",
    description:
      "Google is committed to offering cost-effective solutions for businesses of every budget, and we proudly provide their technology to our clients with transparent, flexible pricing.",
  },
];
const features = [
  {
    icon: <BsBriefcase size={40} className="text-warning" />,
    title: "Collaborative Tools",
    text: "Team-driven tools like Google Docs, Calendar, and Google Meet enable cross-company collaboration in one convenient place.",
  },
  {
    icon: <BsPeople size={40} className="text-warning" />,
    title: "Enhanced Data Security",
    text: "Google’s proprietary Identity Access Management and Security Health Assessments enhance data security across your operations.",
  },
  {
    icon: <BsShieldLock size={40} className="text-warning" />,
    title: "Machine Learning Capabilities",
    text: "Advanced machine learning features allow teams to work faster and more efficiently.",
  },
  {
    icon: <BsRobot size={40} className="text-warning" />,
    title: "AI-Driven Insights",
    text: "Holistic, AI-driven data analytics make it easy to optimize business processes.",
  },
  {
    icon: <BsGrid size={40} className="text-warning" />,
    title: "User-Friend Resources",
    text: "Google’s platforms are simple and effective for team members of all skill levels.",
  },
  {
    icon: <BsGrid size={40} className="text-warning" />,
    title: "Built-In Media Services",
    text: "Access modernized video streaming and monetization tools to generate more revenue.",
  },
];

const GooglePage = (props) => {
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
          pageTitle={"Google Cloud"}
          pageSubTitle={"Our Most Trusted Cloud Computing Platform"}
          pageCon={`DataQuel partners with the world’s most extensive cloud-based platform to create enhanced cybersecurity strategies and more efficient workflows for our clients. Using Google Cloud’s expansive network, we help our clients scale their operations with ease.`}
        />

        <section className="py-5 container">
          <div className="centered">
            {/* First Section */}
            <div className="feature-card p-4 text-start h-100 shadow-sm bg-white rounded mb-5">
              <h4 className="fw-bold mb-3">Here’s What’s Included:</h4>
              <p className="text-muted mb-5">
                Google’s ingenious approach to cloud computing utilizes a global network of hardware and digital infrastructure, allowing our clients to access secure data centers from anywhere in the world.
              </p>
            </div>

            <div className="row g-4 mb-5">
              {features.map((feature, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <div className="feature-card p-4 text-start h-100 shadow-sm bg-white rounded">
                    {/* <i className={`${feature.icon} text-primary fs-3 mb-3`}></i> */}
                    <div className="mb-3">{feature.icon}</div>
                    <h6 className="fw-bold">{feature.title}</h6>
                    <p className="text-muted small">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Section */}
            <div className="feature-card p-4 text-start h-100 shadow-sm bg-white rounded mb-5">
              <h4 className="fw-bold mb-3">Why We Choose Google Cloud:</h4>
              <p className="text-muted mb-5">
                Since its inception in 2008, Google Cloud Platform has helped countless businesses eliminate data threats and foster more collaborative workspaces. Along with DataQuel’s flexible approach to technology consulting, our Google Cloud partnership allows us to deliver powerful results for our clients at scale.
              </p>
            </div>

            <Container className="mt-5">
              <Row>
                {features_1.map((feature, idx) => (
                  <Col md={4} sm={12} key={idx} className="mb-4">
                    <div className="p-4 h-100 border rounded shadow-sm text-center bg-white">
                      {feature.icon}
                      <h6 className="fw-bold mb-2">{feature.title}</h6>
                      <p className="text-muted small">{feature.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </section>

        <section className="section_space_1">
          <div className="container">
            <div className="section_space pt-0">
              <div className=" text-center">
                <h2 className="text-dark ">Ready To Get Started?</h2>
                <div className="heading_focus_text mb-0">
                  Schedule your risk-free consultation to explore our technology solutions today.
                </div>
              </div>
              <div className="container">
                <div className="btns_group pb-0">
                  <Link className="btn btn-outline-light" to="/">
                    <span className="btn_label" data-text="Connect With US">
                      Connect With US
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
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
export default GooglePage;
