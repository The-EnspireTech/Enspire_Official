import React from "react";
import Head from "next/head";
const Footer = () => {
  return (
    <div className="footer-Container">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>
      <div className="inner-footer wrapper">
        <div className="footer-items">
          <div className="logo">
            <img src="/images/Logo.png" alt="" />
            <span className="footer-title">EnspireTech</span>
          </div>
          <p>
            A complete digital solution to empower business with innovative
            technology.
          </p>
        </div>
        <div className="footer-items ">
          <h2>Quick Links</h2>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/">
              <li>Portfolio</li>
            </a>
            <a href="/">
              <li>Contact</li>
            </a>
          </ul>
        </div>

        <div className="footer-items">
          <h2>Contact US</h2>
          <ul>
            <li>Kalanki,Kathmandu</li>
            <li>+97798xxxxxxx</li>
            <li>support@enspiretech.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
