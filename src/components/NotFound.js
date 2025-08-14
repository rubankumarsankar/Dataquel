import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./header/MainHeader";
import Footer from "./footer/Footer";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
    <MainNavbar />
    <div className="d-flex align-items-center justify-content-center bg-light" style={{height: "400px"}}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <h2 className="mb-3 fw-semibold">Oops! Page Not Found</h2>
            <p className="text-muted mb-4">
              The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/")}
              className="shadow-sm hover-shadow"
            >
              Go Back Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
    </>
    
  );
}
