import React from "react";

const Landing = () => {
  return (
    <div className="Landing-Container">
      <div className="wrapper">
        <div className="Landing-content">
          <div className="text-area">
            <h1>EnspireTech</h1>
            <h4>Revolutionizing Technology</h4>
            <p>
              A complete digital solution to empower business with innovative
              technology.
            </p>
            <a className="btn" href="#">
              View More
            </a>
          </div>
          <div className="imagecontainer">
            <img src="/images/laptop.svg" alt="" className="laptop1" />
            <img src="/images/laptop-2.svg" alt="" className="laptop2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
