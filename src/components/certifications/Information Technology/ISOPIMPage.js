import React, { Fragment } from "react";
import Scrollbar from "../../scrollbar/scrollbar";
import Footer from "../../footer/Footer";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import MainNavbar from "../../header/MainHeader";
import PagesTitleNew from "../../pagetitle/PagesTitleNew";
import ContactForm from "../ContactForm";

const ISOPIMPage = (props) => {
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
          title="ISO 27701:2019 – Privacy Information Management"
          subtitle="."
          description="Protecting the privacy of your consumers is of the utmost importance. Without a solid Privacy Information Management System (PIMS), technology providers risk hefty fines and litigation associated with data breaches. At DataQuel, we help our clients defend this vital information with ISO 27701 PIMS certification support."
          buttonText="Let's Get Started"
          buttonLink="#"
        />

        <section className="">
          <div className="security-risk-section centered">
            <Container>
              {/* Top Content Box */}
              <div className="security-box feature-card shadow-sm p-4 mb-5 rounded">
                <h4 className="fw-bold text-dark">What Is It?</h4>
                <p>
                  ISO 9001 is a robust set of practices that ensure high-quality
                  products and services for customers around the world. By
                  achieving this QMS certification, you can enhance your
                  operations and create a legacy of excellence.
                </p>

                <h6 className="fw-bold fst-italic">
                  <em>How Can It Help Your Organization?</em>
                </h6>
                <p>
                  Ultimately, ISO 9001 is more than just a certification. It’s a
                  signal to customers and regulatory entities that your business
                  delivers high-quality products in an overly saturated
                  marketplace. With the guidance of DataQuel and our
                  certification partners, you can obtain this gold star of
                  excellence more efficiently than ever before.
                </p>

                {/* <h6 className="fw-bold fst-italic">How Can It Help Your Organization?</h6>
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
                      </ul> */}

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
            </Container>
          </div>
        </section>
        <section className=" py-5">
          <div className="security-risk-section centered">
            <Container>
              {/* Top Content Box */}
              <div className="security-box feature-card shadow-sm p-4 mb-5 rounded">
                <h4 className="fw-bold text-dark">Economic Advantages</h4>
                <ul>
                  <li>Fewer returns and refunds for low-quality products.</li>
                  <li>
                    Increase the likelihood of participating in public tenders.
                  </li>
                  <li>
                    Cost-effective quality assurance and training practices.
                  </li>
                  <li>
                    Significant decrease in costs related to quality and
                    non-quality issues.
                  </li>
                  <li>Reduction in customer complaints.</li>
                </ul>

                <h4 className="fw-bold text-dark">Operational Advantages</h4>
                <ul>
                  <li>
                    Enhanced quality assurance procedures that are faster and
                    more efficient.
                  </li>
                  <li>
                    Improved workplace safety and a stronger corporate culture.
                  </li>
                  <li>
                    A clear framework for developing and sustaining high-quality
                    products.
                  </li>
                  <li>
                    Established well-defined processes, including clear
                    responsibilities and accountability in roles.
                  </li>
                  <li>Maintains order within the company.</li>
                  <li>
                    Contributes to a robust corporate culture, fostering unity
                    and a positive work environment.
                  </li>
                </ul>

                <h4 className="fw-bold text-dark">Legacy Advantages</h4>
                <ul>
                  <li>Enhanced customer and client satisfaction.</li>
                  <li>Acknowledgment from government and industry leaders.</li>
                  <li>Superior public image for your operation.</li>
                  <li>
                    Emphasizes the organization’s respectability while
                    reinforcing trust and credibility.
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </section>
        <ContactForm />
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
export default ISOPIMPage;
