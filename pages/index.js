import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.land}>
        <Head>
          <title>EnspireTech - Revolutionizing Technology</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
            crossorigin="anonymous"
          />
        </Head>
        <div className="wrapper">
          <navbar className={styles.navbar}>
            <div className="logo">
              <img src="/images/Logo.png" alt="" />
            </div>
            <ul className="lists">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <a href="#" className="">
              Get Started <i className="fas fa-arrow-right"></i>
            </a>
          </navbar>

          <div className="text-area">
            <h1>EnspireTech</h1>
            <h5>Revolutionizing Technology</h5>
            <p>
              We provide every serivce that your company would ever need.
              <br /> Take your company to better path.
            </p>
            <a href="#">View More</a>
          </div>
          <div className="image-container">
            <img src="/images/laptop.svg" alt="" className="laptop1" />
            <img src="/images/laptop-2.svg" alt="" className="laptop2" />
          </div>
        </div>
      </header>
      <div>
        <div className="wrappper">
          <div className="soltion">
            <div className="line"></div>
            <h5>The best solution for your problems</h5>
            <p>
              We offer Web Design , Web Development, Mobile App Development,
              Digital marketing for any kind of product or company that conveys
              the intended message.
            </p>
          </div>
          <div>
            <img src="/images/polygon.svg" alt="" />
          </div>
        </div>
      </div>
      /* services */
    </>
  );
}
