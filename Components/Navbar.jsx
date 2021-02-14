import Head from "next/head";
const Navbar = () => {
  return (
    <div className="nav-wrap">
      <div className="navbar">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          />
        </Head>
        <div className="nav-container">
          <div className="logo">
            <img src="/images/Logo.png" className="nav-logo" />
          </div>
          <ul className="lists">
            <li>
              <a href="#" className="items">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="items">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="items">
                Teams
              </a>
            </li>
          </ul>
        </div>
      </div>

      <a href="#" className="getstarted">
        Get Started <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default Navbar;
