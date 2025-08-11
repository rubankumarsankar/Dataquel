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
  BsCloud,
  BsShieldLock,
  BsCodeSlash,
  BsArrowRepeat,
  BsLaptop,
  BsRocket,
} from "react-icons/bs";
import MainNavbar from "../../components/header/MainHeader";

const features_1 = [
  {
    icon: <BsShieldCheck size={40} className="text-warning mb-3" />,
    title: "AWS Management Consoles",
    description:
      "With one of the most user-friendly application management consoles, AWS enables the DataQuel team to easily maintain applications for our clients or empower in-house teams with the skills they need to thrive.",
  },
  {
    icon: <BsShieldLock size={40} className="text-warning mb-3" />,
    title: "Diverse Application Options",
    description:
      "From existing web-based applications to new SaaS products, AWS works with countless APIs to provide diverse application hosting capabilities for businesses around the world.",
  },
  {
    icon: <BsGraphUp size={40} className="text-warning mb-3" />,
    title: "Enhanced Data Security",
    description:
      "The AWS platform uses advanced data security measures to protect sensitive information and ensure regulatory compliance, and the large-scale storage capacity supports long-term scalability.",
  },
];

const features = [
  {
    icon: <BsCloud size={40} className="text-warning" />,
    title: "Simplified Cloud Computing",
    text: "Amazon Elastic Cloud Compute (EC2) offers in-cloud computing capabilities for web developers.",
  },
  {
    icon: <BsShieldLock size={40} className="text-warning" />,
    title: "Secure Data Storage",
    text: "Secure large quantities of data in the Amazon Simple Storage Server.",
  },
  {
    icon: <BsCodeSlash size={40} className="text-warning" />,
    title: "Serverless Code Computing",
    text: "Process code for your applications without the hassle of traditional server-based platforms, thanks to AWS Lambda.",
  },
  {
    icon: <BsArrowRepeat size={40} className="text-warning" />,
    title: "Automated Scaling",
    text: "Scale your web applications with automated efficiency using Amazon’s auto-scaling features.",
  },
  {
    icon: <BsLaptop size={40} className="text-warning" />,
    title: "Remote Access Capabilities",
    text: "Easily access and manage your applications with a built-in remote access platform, AWS Command Line Interface.",
  },
  {
    icon: <BsRocket size={40} className="text-warning" />,
    title: "Streamlined Application Deployment",
    text: "Utilize rapid application deployment with AWS Elastic Beanstalk, including provisioning and load balancing measures.",
  },
];

const AWSPage = (props) => {
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
          pageTitle={"Amazon Web Services (AWS)"}
          pageSubTitle={"Your Ultimate Application Hosting Platform"}
          pageCon={`DataQuel helps our clients create and host in-house applications through the innovative Amazon Web Services (AWS) platform. With user-friendly management features and elite cybersecurity strategies, the possibilities are limitless.`}
        />

        <section className="py-5 container">
          <div className="centered">
            {/* First Section */}
            <div className="feature-card p-4 text-start h-100 shadow-sm bg-white rounded mb-5">
              <h4 className="fw-bold mb-3">Here’s What’s Included:</h4>
              <p className="text-muted mb-5">
                Whether you need to fill a few gaps in your tech stack or a
                complete digital transformation, our Microsoft-based solutions
                have you covered.
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
              <h4 className="fw-bold mb-3"> Why We Choose AWS:</h4>
              <p className="text-muted mb-5">
                For us, creating exceptional in-house applications is just the
                beginning. We leverage the advanced features and capabilities of
                AWS to ensure our clients can easily manage and scale their
                web-based applications on their terms. This creates more room
                for innovation and seamless product integration for our
                technology consulting specialists.
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
                  With DataQuel, securing your digital infrastructure has never
                  been easier. Contact a member of our team today to book a
                  risk-free consultant.
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
export default AWSPage;
