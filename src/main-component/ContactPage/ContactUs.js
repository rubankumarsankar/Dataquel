import React, { Fragment, useState, useEffect } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./contact.css";
import { FiArrowRight } from "react-icons/fi";
import MainNavbar from "../../components/header/MainHeader";

const ContactUsPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Captcha state
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaError, setCaptchaError] = useState("");

  // Generate captcha on load
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 99);
    const b = Math.floor(Math.random() * 10);
    setNum1(a);
    setNum2(b);
    setValue("captcha", ""); // clear captcha field
  };

  const onSubmit = (data) => {
    const correctAnswer = num1 + num2;
    if (parseInt(data.captcha, 10) !== correctAnswer) {
      setCaptchaError("Incorrect answer. Please try again.");
      generateCaptcha();
      return;
    }
    setCaptchaError("");
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

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
        <PageTitle pageTitle={"Contact US"} pageSubTitle={"."} pageCon={``} />

        <section className="container py-5">
          <div className="centered">
            <div className="container py-5">
              <div className="row g-4">
                {/* Left Column - Address & Map */}
                <div className="col-lg-6">
                  <h4>DataQuel Headquarters</h4>
                  <p>
                    2030 Main St,
                    <br />
                    Suite 1300,
                    <br />
                    Irvine, CA 92614
                  </p>
                  <p className="mb-1">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+19495466600" className="text-primary">
                      +1 (949) 546-6600
                    </a>
                  </p>
                  <p>
                    <strong>Fax:</strong>{" "}
                    <a href="fax:+19495466800" className="text-danger">
                      +1 (949) 546-6800
                    </a>
                  </p>
                  <div className="mt-3">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.157787989295!2d-117.84644712369487!3d33.68495533853953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdb35c3d7b3a1%3A0x82b34ff02a0c8cb3!2s2030%20Main%20St%20%231300%2C%20Irvine%2C%20CA%2092614%2C%20USA!5e0!3m2!1sen!2sin!4v1691776745342!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="col-lg-6">
                  <div className="card hover-card p-4">
                    <h5 className="mb-3">Discover the DataQuel Difference</h5>
                    <form
                      className="row g-3 mt-2"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* Full Name */}
                      <div className="col-md-6">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.fullName ? "is-invalid" : ""
                          }`}
                          {...register("fullName", {
                            required: "Full Name is required",
                          })}
                        />
                        {errors.fullName && (
                          <small className="text-danger">
                            {errors.fullName.message}
                          </small>
                        )}
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email",
                            },
                          })}
                        />
                        {errors.email && (
                          <small className="text-danger">
                            {errors.email.message}
                          </small>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          className={`form-control ${
                            errors.phone ? "is-invalid" : ""
                          }`}
                          {...register("phone", {
                            required: "Phone is required",
                          })}
                        />
                        {errors.phone && (
                          <small className="text-danger">
                            {errors.phone.message}
                          </small>
                        )}
                      </div>

                      {/* Company */}
                      <div className="col-md-6">
                        <label className="form-label">Company Name *</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.company ? "is-invalid" : ""
                          }`}
                          {...register("company", {
                            required: "Company name is required",
                          })}
                        />
                        {errors.company && (
                          <small className="text-danger">
                            {errors.company.message}
                          </small>
                        )}
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <label className="form-label">
                          Please add anything else you’d like DataQuel to know
                          about your inquiry: *
                        </label>
                        <textarea
                          rows="3"
                          className={`form-control ${
                            errors.message ? "is-invalid" : ""
                          }`}
                          {...register("message", {
                            required: "Message is required",
                          })}
                        ></textarea>
                        {errors.message && (
                          <small className="text-danger">
                            {errors.message.message}
                          </small>
                        )}
                      </div>

                      {/* Captcha */}
                      <div className="col-md-6">
                        <label className="form-label">
                          {num1} + {num2} =
                        </label>
                        <input
                          type="number"
                          className={`form-control ${
                            captchaError ? "is-invalid" : ""
                          }`}
                          {...register("captcha", {
                            required: "Please solve the captcha",
                          })}
                        />
                        {captchaError && (
                          <small className="text-danger">{captchaError}</small>
                        )}
                        {errors.captcha && (
                          <small className="text-danger">
                            {errors.captcha.message}
                          </small>
                        )}
                      </div>

                      {/* Button */}
                      <div className="container">
                        <div className="btns_group pb-0">
                          <button
                            type="submit"
                            className="btn btn-outline-primary"
                          >
                            <span
                              className="btn_label"
                              data-text="Let's Connect"
                            >
                              Let's Connect
                            </span>
                            <span className="btn_icon">
                              <i className="fa-solid fa-arrow-up-right"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="container py-5">
                <div className="row g-4">
                  {/* Support */}
                  <div className="col-md-6">
                    <h5 className="fw-bold text-primary mb-3">Support</h5>
                    <p className="text-muted">
                      Our expert team of US based engineers are available
                      24/7/365 to support your needs. From incident management
                      to real-time analytics on the health of your environment,
                      you can access all of this and more including ticket
                      submissions through our customer portal.
                    </p>
                    <Link
                      to="/contact-us"
                      className=" text-decoration-none d-flex hover-card justify-content-between align-items-center p-3 border rounded shadow-sm"
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        e.currentTarget.classList.add("shadow")
                      }
                      onMouseLeave={(e) =>
                        e.currentTarget.classList.remove("shadow")
                      }
                    >
                      <span className="fw-semibold">Support</span>
                      <FiArrowRight color="#ff6600" size={18} />
                    </Link>
                  </div>

                  {/* Sales */}
                  <div className="col-md-6">
                    <h5 className="fw-bold text-primary mb-3">Sales</h5>
                    <p className="text-muted">
                      Take the first step and reach out to us. We start all new
                      conversations with a thorough vetting process to ensure we
                      know exactly what you need and what you want to achieve.
                      This helps us understand your definition of success as it
                      aligns with our products and services.
                    </p>
                    <Link
                      to="/contact-us"
                      className=" text-decoration-none hover-card d-flex justify-content-between align-items-center p-3 border rounded shadow-sm"
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        e.currentTarget.classList.add("shadow")
                      }
                      onMouseLeave={(e) =>
                        e.currentTarget.classList.remove("shadow")
                      }
                    >
                      <span className="fw-semibold">Sale</span>
                      <FiArrowRight color="#ff6600" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section_space_1">
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
              
            </div>
          </div>
        </section> */}

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
export default ContactUsPage;
