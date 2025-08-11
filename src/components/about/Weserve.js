import React from "react";
import sIcon1 from "../../images/icons/home-1.png";
import sIcon2 from "../../images/icons/home-2.png";
import sIcon3 from "../../images/icons/home-3.png";
import sIcon4 from "../../images/icons/home-4.png";
import "./style.css"


const Policy = [
  {
    title: "Manufacturing",
    subTitle:
      "Optimize plant operations, reduce downtime, and improve productivity with hands-on process and technology consultation.",
    icon: sIcon1,
  },
  {
    title: "Healthcare & Life Sciences",
    subTitle:
      "Streamline compliance, enhance patient data security, and implement scalable digital systems for better clinical outcomes.",
    icon: sIcon2,
  },
  {
    title: "E-Commerce & Retail",
    subTitle:
      "Deliver seamless customer experiences, optimize backend operations, and gain real-time insights with data-driven retail tech solutions.",
    icon: sIcon3,
  },
  {
    title: "Logistics & Supply Chain",
    subTitle:
      "Digitize workflows, track assets in real time, and minimize operational bottlenecks with intelligent automation and analytics.",
    icon: sIcon4,
  },
];

const WeServe = () => {
  return (
    <section className="policy_section section_space">
      <div className="container">
        <div className="heading_block">
          <div className="row justify-content-lg-between">
            <div className="col-lg-6">
              <h2 className="heading_text mb-0">Industries We Serve</h2>
            </div>
            <div className="col-lg-5">
              <p className="heading_description mb-0">
                {/* From manufacturing to e-commerce, our digital strategies and tech innovations solve real industry challenges and deliver measurable outcomes. */}
              </p>
            </div>
          </div>
        </div>
        <div className="row pricing_policy_wrap">
          {Policy.map((policy, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="iconbox_block h-100 hover-shadow">
                <div className="iconbox_icon">
                  <img src={policy.icon} alt={`${policy.title} Icon`} />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{policy.title}</h3>
                  <p className="mb-0">{policy.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeServe;
