import React from "react";

const Services = () => {
  return (
    <div className="Service-Container">
      <div className="wrapper">
        <div className="services">
          <Servicesleft />
        </div>
      </div>
    </div>
  );
};

const Servicesleft = ({ title, subtitle, description, images }) => {
  return (
    <div className="Serviceleft-Container">
      <div className="service-img">
        <img src="/images/lappoo 1.png" alt="" />
      </div>
      <div className="Service-text">
        <h3>
          <span>Web </span>
          Development
        </h3>
        <p>
          A trusted market leader in developing high performing websites with
          React, Python, Php and more for every business.From a single page
          portfolio website to a large e-commerce website , we have served it
          all.
        </p>
        <a href="#" className="btn">
          Book Now
        </a>
      </div>
    </div>
  );
};
export default Services;
