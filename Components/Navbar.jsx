import Head from "next/head";
import { useState } from "react";
const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="nav-wrap">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
      </Head>

      <nav className="wrapper flexnav">
        <a href="#" className="logo">
          <img src="/images/Logo.png" alt="" />
        </a>
        <ul className={`items flexnav ${open ? "menu" : ""}`}>
          <li>
            <a href="#" className="item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="item">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="item">
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`lines ${open ? "active" : ""}`}
          onClick={() => setopen(!open)}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
