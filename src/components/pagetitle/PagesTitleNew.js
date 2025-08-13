import React from "react";
import "./PagesTitle.css";
import { Link } from "react-router-dom";

export default function PagesTitleNew({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <section className="p-4">
      <div className="pages-title-wrapper">
        <div className="container text-center py-5">
          <h2 className="pages-title">{title}</h2>
          <h4 className="pages-subtitle">{subtitle}</h4>
          <p className="pages-description">{description}</p>
          {buttonText && (
          <div className="btns_group pb-0 mt-3">
            <Link className="btn btn-outline-light custom-btn-orange" to={buttonLink}>
              <span className="btn_label" data-text={buttonText}>
                {buttonText}
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
