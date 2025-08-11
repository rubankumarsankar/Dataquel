import React from "react";
import "./WhyDataQuel.css"; // Custom CSS
import sIcon4 from '../../images/icons-new/05.png'
import sIcon5 from '../../images/icons-new/04.png'

const WhyDataQuel = () => {
  return (
    <section className="why-section text-center py-5 bg-white">
      <h2 className="text-dark fw-bold mb-5 fs-2">Why DataQuel?</h2>

      <div className="container">
        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div className="col-md-5">
            <div className="card why-card h-100 p-4 position-relative border border-dark rounded-4 shadow-sm hover:border-none hover:shadow-2xl">
              <div className="icon-circle bg-white border border-2 border-dark text-warning">
                {/* <i className="bi bi-people-fill fs-4"></i> */}
                <img src={sIcon4}  style={{ height: "35px", width: "35px" }} alt="icon"/>
              </div>
              <h5 className="mt-4 text-dark-1 fw-bold">Satisfied Clients</h5>
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
                <img src={sIcon5} style={{ height: "35px", width: "30px" }} alt="icon" />

              </div>
              <h5 className="mt-4 text-dark-1 fw-bold">100% Guaranteed Results</h5>
              <p className="text-dark mt-2">
                We guarantee game-changing results for businesses of every size and scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDataQuel;
