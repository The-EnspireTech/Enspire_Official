import React from "react";
import Head from "next/head";
const Footer = () => {
  return (
    <div className="Footer-Container">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />
      </Head>
      <div className="wrapper">
        <div className="footernav">
          <div className="logo">
            <img src="/images/Logo.png" alt="" />
            <div className="footer-site">
              <h3>
                <span>enspire</span>tech
              </h3>
              <h6>Revolutionizing Technology</h6>
            </div>
          </div>
          <ul className="foot-links">
            <h3>Quick Links</h3>
            <li>
              <a href="#" className="foot-items">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="foot-items">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="foot-items">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="foot-items">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="foot-items">
                Privacy Policy
              </a>
            </li>
          </ul>
          <div className="contacts-info">
            <div className="social-links">
              <h3>Follow Us</h3>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>

            <div className="contact-links">
              <h3>Contact Us</h3>
              <p>
                <i className="fas fa-phone-alt"></i>9867433325
              </p>
              <p>
                <i className="far fa-envelope"></i>support@enspiretech.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
