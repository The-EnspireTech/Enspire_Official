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
          <Ports
            images="hospital.png"
            name="Sagarmatha Hospital"
            site="https://sagarmathahospital.com"
          />

          <Ports
            images="Capture.png"
            name="Aqua Water Filter"
            site="https://aquastarnepal.com"
          />
          <Ports
            images="universal.JPG"
            name="Universal Gym"
            site="https://universalmultigym.com"
          />
          <Ports
            images="rsinfintytravels.JPG"
            name="RSinfinityTravels"
            site="https://rsinfinitytravels.com"
          />
        </div>
      </div>
    </div>
  );
};

const Ports = ({ images, name, site }) => {
  return (
    <div className="sitecontainer">
      <div className="site-image">
        <img src={`/images/${images}`} alt="" />
      </div>
      <h4>{name}</h4>
      <a href={site} className="visit-btn" target="_blank">
        Visit Website
      </a>
    </div>
  );
};
export default Portfolio;
