import React from "react";

const Services = () => {
  return (
    <div className="Service-Container">
      <div className="wrapper">
        <div className="services">
          <Servicesleft
            title="Web"
            subtitle="Development"
            description="A trusted market leader in developing high performing websites with
          React, Python, Php and more for every business.From a single page
          portfolio website to a large e-commerce website , we have served it
          all."
            images="lappoo 1.png"
          />
          <Servicesleft
            title="Mobile"
            subtitle="Development"
            description="We build Native, Web and hybrid apps for multiple platforms(Android and iOS) with an eye-catching UI and UX designs using various programming languages and Artifical Intelligence techniques."
            images="lappoo 1.png"
            classes="order"
          />
          <Servicesleft
            title="Digital"
            subtitle="Marketing"
            description="We provide a social media management,Search Engine Optimization(SEO) and Google ads services with guranteed result. If we can't satisfy you we don't charge for a service commission."
            images="digital.png"
          />
          <Servicesleft
            title="Artificial"
            subtitle="Intelligence"
            description="We use the AI/ML techniques for predictive analytics that includes customer churn, Segmentation, Recommendation system, fraud detection and more to help you automate your business and accomplish your business objectives."
            images="robot.png"
            classes="order"
          />
          <Servicesleft
            title="Graphics"
            subtitle="Design"
            description="We not only sketch your ideas into an art that looks stunning but also focuses on solving the core of the problem. Our domain experts create designs based on Market analysis and customers expectations to ensure delightful user experience and help you achieving your business goal."
            images="graphics.png"
          />
        </div>
      </div>
    </div>
  );
};

const Servicesleft = ({ title, subtitle, description, images, classes }) => {
  return (
    <div className="Serviceleft-Container">
      <div className="service-img">
        <img src={`/images/${images}`} alt="" />
      </div>
      <div className={`Service-text ${classes}`}>
        <h3>
          <span>{title} </span>
          {subtitle}
        </h3>
        <p>{description}</p>
        <a href="#" className="btn">
          Book Now
        </a>
      </div>
    </div>
  );
};
export default Services;
