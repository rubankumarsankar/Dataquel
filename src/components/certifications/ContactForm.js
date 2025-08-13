import React from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaPhoneAlt, FaGlobe, FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import './certifications.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact-form-wrapper py-5">
      <div className="text-center mb-4">
        <h4 className="fw-bold text-primary">Get Certified With Us</h4>
        <p className="text-muted">
          With DataQuel, securing your digital infrastructure has <em>never</em> been easier. <br />
          Contact a member of our team today to book a risk-free consultant.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form-box p-5 rounded-4 bg-white">
        <div className="row g-3">
          {/* Name */}
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name && <small className="text-danger">Name is required</small>}
          </div>

          {/* Email */}
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && <small className="text-danger">Email is required</small>}
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text">
                <FaPhoneAlt />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Your Phone No."
                {...register("phone", { required: true })}
              />
            </div>
            {errors.phone && <small className="text-danger">Phone is required</small>}
          </div>

          {/* Company Name */}
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text">
                <FaGlobe />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Your Company Name"
                {...register("company", { required: true })}
              />
            </div>
            {errors.company && <small className="text-danger">Company name is required</small>}
          </div>

          {/* Message */}
          <div className="col-12">
            <div className="input-group">
              <span className="input-group-text">
                <FaRegCommentDots />
              </span>
              <textarea
                rows="3"
                className="form-control"
                placeholder="How can we help you?"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            {errors.message && <small className="text-danger">Message is required</small>}
          </div>

          {/* Submit Button */}
          <div className="btns_group-1">
            <button className="btn btn-outline-light custom-btn-orange rounded-5"  type="submit">
              <span className="btn_label" data-text="SEND REQUEST">
                SEND REQUEST
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
