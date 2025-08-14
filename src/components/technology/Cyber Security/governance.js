import React, { Fragment } from "react";
import Scrollbar from "../../scrollbar/scrollbar";
import Footer from "../../footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

import "../Technology.css";
import { Link } from "react-router-dom";
import MainNavbar from "../../header/MainHeader";
import PagesTitleNew from "../../pagetitle/PagesTitleNew";
import sIcon4 from "../../../images/icons-new/05.png";
import sIcon5 from "../../../images/icons-new/04.png";

const GovernancePage = (props) => {
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
        <PagesTitleNew
          title="Governance & Compliance"
          subtitle="Governance Risk & Compliance Solutions"
          description="Combat risks and maintain top-notch regulatory compliance with data-driven solutions tailored to your operation."
          buttonText="Let's Get Started"
          buttonLink="#"
        />

        <section className=" py-5">
          <div className="security-risk-section centered">
            <Container>
              {/* Top Content Box */}
              <div className="security-box feature-card shadow-sm p-4 mb-5 rounded">
                <h4 className="fw-bold text-primary">
                  We Make Regulatory Compliance Simple
                </h4>
                <p>
                  Regulatory compliance is critical to growing your operation
                  but navigating ever-changing frameworks can be complicated.
                  DataQuel is here to simplify governance risk and compliance
                  processes by building optimized systems that leverage advanced
                  technology to minimize risks and maintain industry standards.
                </p>

                <h6 className="fw-bold fst-italic">What To Expect:</h6>
                <ul>
                  <li>
                    Modernized systems for assessing risks and maintaining
                    compliance.
                  </li>
                  <li>
                    Expertly curated technology that reduces human error and
                    enhances results.
                  </li>
                </ul>

                <div className="btns_group-1">
                  <Link
                    className="btn btn-outline-light custom-btn-orange"
                    to="#"
                  >
                    <span className="btn_label" data-text="Work With Us">
                      Work With Us
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom Features */}
              <Row className="g-4">
                <Col md={4}>
                  <div className="feature-card shadow-sm p-4 text-center h-100 rounded">
                    <div className="icon mb-3">
                      <i className="fa-solid fa-shield-halved fa-2x text-orange"></i>
                    </div>
                    <h6 className="fw-bold">Tech-Driven Strategies</h6>
                    <p>
                      Our cybersecurity consulting team leverages best-in-class
                      technologies to streamline your compliance strategies and
                      deliver consistent results you can trust. That means less
                      work for your team and more room for growth.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="feature-card shadow-sm p-4 text-center h-100 rounded">
                    <div className="icon mb-3">
                      <i className="fa-solid fa-clock fa-2x text-orange"></i>
                    </div>
                    <h6 className="fw-bold">Cybersecurity Experts</h6>
                    <p>
                      DataQuel is backed by a team of expert cybersecurity
                      consultants dedicated to getting you the results you
                      deserve. We work hand-in-hand with our clients to create
                      compliance and governance risk strategies tailored to the
                      needs of their operations.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="feature-card shadow-sm p-4 text-center h-100 rounded">
                    <div className="icon mb-3">
                      <i className="fa-solid fa-fingerprint fa-2x text-orange"></i>
                    </div>
                    <h6 className="fw-bold">Cost-Effective Solutions</h6>
                    <p>
                      All of our cybersecurity consulting services are
                      transparently priced and customized based on your needs
                      and budget. Simply put, we help you enhance your
                      compliance practices, all while keeping your costs low.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="why-section text-center py-5 bg-white">
          <h2 className="text-dark fw-bold mb-5 fs-2">Why DataQuel?</h2>

          <div className="container">
            <div className="row justify-content-center ">
              {/* Card 1 */}
              <div className="col-md-5">
                <div className="card why-card h-100 p-4 position-relative border border-dark rounded-4 shadow-sm hover:border-none hover:shadow-2xl">
                  <div className="icon-circle bg-white border border-2 border-dark text-warning">
                    {/* <i className="bi bi-people-fill fs-4"></i> */}
                    <img
                      src={sIcon4}
                      style={{ height: "35px", width: "35px" }}
                      alt="icon"
                    />
                  </div>
                  <h5 className="mt-4 text-dark-1 fw-bold">
                    Satisfied Clients
                  </h5>
                  <p className="text-dark mt-2">
                    We’ve served multiple satisfied clients
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-5">
                <div className="card why-card h-100 p-4 position-relative border border-dark rounded-4 shadow-sm">
                  <div className="icon-circle bg-white border border-2 border-dark text-primary">
                    {/* <i className="bi bi-hand-thumbs-up-fill fs-4"></i> */}
                    <img
                      src={sIcon5}
                      style={{ height: "35px", width: "30px" }}
                      alt="icon"
                    />
                  </div>
                  <h5 className="mt-4 text-dark-1 fw-bold">
                    100% Guaranteed Results
                  </h5>
                  <p className="text-dark mt-2">
                    We guarantee game-changing results for businesses of every
                    size and scale.
                  </p>
                </div>
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
                  With DataQuel, securing your digital infrastructure has never
                  been easier. Contact a member of our team today to book a
                  risk-free consultant.
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
export default GovernancePage;
