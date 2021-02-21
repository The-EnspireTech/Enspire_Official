import React from "react";

const About = () => {
  return (
    <div className="About-Container">
      <div className="wrapper">
        <div className="about-head">
          <h3>
            <span className="underline">About</span>Us
          </h3>
        </div>
        <div className="About-wrap">
          <div className="aboute-img">
            <img src="/images/about.png" alt="" className="about-img" />
          </div>
          <div className="about-text">
            <p>
              Enspiretech is an Information Technology company for digital
              Marketing, Graphic designing ,Mobile and web development and
              Artificial Intelligence that mainly focuses on timeliness,
              security , scale and performance. <br /> <br /> We are the team of
              professional designers , developers ,analysts and engineers with
              diverse functional and technical proficiencies. we use the cutting
              edge technologies to find the solution for your problems and
              provide you a quality service at affordable price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
