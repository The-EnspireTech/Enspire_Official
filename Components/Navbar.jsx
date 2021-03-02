import Head from "next/head";
import Link from "next/link";
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
          <img src="/images/profile_logo.png.png" alt="" />
        </a>
        <ul className={`items flexnav ${open ? "menu" : ""}`}>
          <li>
            <Link href="/" className="item">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="item">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="item">
              Contact
            </Link>
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
