import React, { Fragment } from "react";
import Scrollbar from "../../scrollbar/scrollbar";
import Footer from "../../footer/Footer";
import { Container, Row, Col,  } from "react-bootstrap";

import "../Technology.css";
import { Link } from "react-router-dom";
import MainNavbar from "../../header/MainHeader";
import PagesTitleNew from "../../pagetitle/PagesTitleNew";
import sIcon4 from "../../../images/icons-new/05.png";
import sIcon5 from "../../../images/icons-new/04.png";

const EnterprisePage = (props) => {
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
          title="Enterprise Architecture"
          subtitle="Enterprise Architecture Services Made To Be Scaled"
          description="Hit your growth goals and effortlessly scale your operation with expert technology consulting that aligns business and IT structures."
          buttonText="Let's Get Started"
          buttonLink="#"
        />

        <section className=" py-5">
          <div className="security-risk-section centered">
            <Container>
              {/* Top Content Box */}
              <div className="security-box feature-card shadow-sm p-4 mb-5 rounded">
                <h4 className="fw-bold text-primary">
                  Fewer Security Risks, More Peace of Mind
                </h4>
                <p>
                  At DataQuel, we know that peace of mind is <em>everything</em>
                  . That’s why our certified cybersecurity consultant team
                  focuses on creating fast, efficient auditing and risk
                  assessment solutions to keep your operation moving forward.
                  With our help, you can eliminate weak points in your digital
                  infrastructure and identify potential problems <em>before</em>{" "}
                  they arise.
                </p>

                <h6 className="fw-bold fst-italic">What To Expect:</h6>
                <ul>
                  <li>Faster, more efficient processes to fuel your growth.</li>
                  <li>
                    Real-time monitoring of your operation’s cybersecurity
                    needs.
                  </li>
                  <li>
                    Tech-driven cybersecurity strategies that maximize results
                    and minimize costs.
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
                    <h6 className="fw-bold">Dedicated Consultants</h6>
                    <p>
                      We take your security <em>personally</em>. You’ll work
                      with a dedicated cybersecurity consultant to develop and
                      implement robust auditing and assurance practices tailored
                      to your operation’s needs.
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="feature-card shadow-sm p-4 text-center h-100 rounded">
                    <div className="icon mb-3">
                      <i className="fa-solid fa-clock fa-2x text-orange"></i>
                    </div>
                    <h6 className="fw-bold">Customer Support</h6>
                    <p>
                      When you need help <em>fast</em>, we’ve got you covered.
                      Our team provides real-time monitoring of potential
                      cybersecurity threats, and we’re here to support your
                      operation.
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
                      Securing your business shouldn’t break the bank. Our
                      cybersecurity strategies are transparently priced and
                      tailored to your budget. Now, you can grow your business
                      the <em>cost-effective</em> way.
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
export default EnterprisePage;
