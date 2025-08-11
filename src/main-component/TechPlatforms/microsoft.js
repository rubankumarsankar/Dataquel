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
    title: "Comprehensive Solutions",
    description:
      "From communicating with your team to building your own proprietary applications, the Microsoft platform offers comprehensive technology solutions for start-ups, mid-size operations, and large corporations alike.",
  },
  {
    icon: <BsShieldLock size={40} className="text-warning mb-3" />,
    title: "Secure Platforms",
    description:
      "Microsoft’s rigorous security measures make it easier than ever to enhance your cybersecurity strategies, mitigate risks, and ensure regulatory compliance across your entire operation.",
  },
  {
    icon: <BsGraphUp size={40} className="text-warning mb-3" />,
    title: "Maximum ROI",
    description:
      "By partnering with DataQuel for your technology consulting needs, you’ll gain access to Microsoft’s industry-leading solutions in one transparently priced package. Together, we ensure you get the largest return on your investment – guaranteed.",
  },
];
const features = [
  {
    icon: <BsBriefcase size={40} className="text-warning" />,
    title: "Business Applications",
    text: "Streamline and optimize your workflow with advanced business applications like Dynamics 365 and Power Platform.",
  },
  {
    icon: <BsPeople size={40} className="text-warning" />,
    title: "Collaborative Workspaces",
    text: "Fuel faster communication and more collaboration with Teams, Viva, and Microsoft 365.",
  },
  {
    icon: <BsShieldLock size={40} className="text-warning" />,
    title: "Enhanced Security",
    text: "Secure your most sensitive data with Azure and M365 Security.",
  },
  {
    icon: <BsRobot size={40} className="text-warning" />,
    title: "AI-Driven Solutions",
    text: "Automate your data analytics with AI-driven solutions from Azure.",
  },
  {
    icon: <BsGrid size={40} className="text-warning" />,
    title: "Innovative Applications",
    text: "Create custom websites and apps guided by Azure’s self-service platform.",
  },
];

const MicrosoftPage = (props) => {
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
          pageTitle={"Microsoft"}
          pageSubTitle={"Your All-In-One Tech Platform"}
          pageCon={`As a trusted Microsoft partner, DataQuel creates all-inclusive solutions backed by an industry-leading platform. Our team is able to streamline internal processes and eliminate wasted resources, one solution at a time.`}
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
              <h4 className="fw-bold mb-3">Why We Choose Microsoft:</h4>
              <p className="text-muted mb-5">
                Microsoft has continued to innovate in the technology space
                since 1975, paving the way for better workspaces and
                unparalleled growth in business around the world.
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
                  With DataQuel, securing your digital infrastructure has never been easier.
Contact a member of our team today to book a risk-free consultant.
                </div>
              </div>
              <div className="container">
                <div className="btns_group pb-0">
                  <Link className="btn btn-outline-light" to="/">
                    <span className="btn_label" data-text="Connect With Us">
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
export default MicrosoftPage;
