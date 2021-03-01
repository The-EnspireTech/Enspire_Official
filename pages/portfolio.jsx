import React from "react";
import Head from "next/head";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - EnspireTech</title>
      </Head>
      <div className="port-images">
        <img src="/images/portcover.png" alt="" />
      </div>
      <div className="wrapper margin-toper ">
        <h3>
          <span className="underline">Our </span>Work
        </h3>
        <div className="portfolio-containers">
          <Ports />
          <Ports />
          <Ports />
          <Ports />
        </div>
      </div>
    </div>
  );
};

const Ports = () => {
  return (
    <div className="sitecontainer">
      <div className="site-image">
        <img src="/images/hospital.png" alt="" />
      </div>
      <h4>Sagarmatha Hospital</h4>
      <a href="#" className="visit-btn">
        Visit Website
      </a>
    </div>
  );
};
export default Portfolio;
