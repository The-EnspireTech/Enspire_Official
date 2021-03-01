import React from "react";
import Head from "next/head";
import Link from "next/link";
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
          </ul>
        </div>

        <div className="footer-items">
          <h2>Contact US</h2>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> Kalanki,Kathmandu
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> +97798xxxxxxx
            </li>
            <li>
              <i class="far fa-envelope"></i> support@enspiretech.com
            </li>
          </ul>
          <div className="social-media">
            <h2>Follow Us</h2>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/enspire-tech"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
