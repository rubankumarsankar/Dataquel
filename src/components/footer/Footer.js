import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTumblr,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/* Top Footer */}
        <Row className="footer-top py-5">
          <Col md={3}>
            <h5 className="footer-title">Get In Touch</h5>
            <address>
              2030 Main St,
              <br />
              Suite 1300,
              <br />
              Irvine, CA 92614
            </address>
            <p>
              <span className="text-orange">Phone:</span>{" "}
              <a href="tel:+19495466600">+1 (949) 546-6600</a>
            </p>
            <p>
              <span className="text-orange">Fax:</span> +1 (949) 546-6800
            </p>
          </Col>

          <Col md={2}>
            <h5 className="footer-title">Company</h5>
            <ul className="footer-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Our Blog</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="footer-title">Expertise</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Cloud Build & Migration</a>
              </li>
              <li>
                <a href="#">Cloud & DevOps</a>
              </li>
              <li>
                <a href="#">Cloud Native Consulting</a>
              </li>
              <li>
                <a href="#">AWS Managed Services</a>
              </li>
              <li>
                <a href="#">Prometheus Support</a>
              </li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="footer-title">Industries</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Insurance</a>
              </li>
              <li>
                <a href="#">Banking</a>
              </li>
              <li>
                <a href="#">Fintech</a>
              </li>
              <li>
                <a href="#">Logistics</a>
              </li>
              <li>
                <a href="#">Retail</a>
              </li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="footer-title">Legal</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Client Data Safeguards</a>
              </li>
              <li>
                <a href="#">Information Security</a>
              </li>
              <li>
                <a href="#">Supplier Requirements</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* <hr /> */}

        {/* Subscribe Section */}
        <Row className="footer-subscribe py-4 align-items-center">
          <Col md={6}>
            <h6 className="subscribe-title">
              Subscribe to The Official DataQuel Blog
            </h6>
            <p className="subscribe-text">
              Get the latest DataQuel blogs, news, tips, and more...
            </p>
          </Col>
          <Col md={6}>
            <Form className="subscribe-form d-flex align-items-center">
              <Form.Control
                type="email"
                placeholder="✉ Enter your email"
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-btn">
                SEND
              </button>
            </Form>
          </Col>
        </Row>

        {/* <hr /> */}

        {/* Bottom Footer */}
        <Row className="footer-bottom py-3">
          <Col md={6}>
            <p className="copyright">
              Copyright © <span className="text-orange">DataQuel</span> 2025,
              All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-social">
              <span className="follow-text">Follow Us</span>
              <span className="footer-line"></span>
              <FaFacebookF />
              <FaTumblr />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
