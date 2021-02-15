import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
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
            <div className={styles.logo}>
              <img src="/images/Logo.png" alt="" />
            </div>
            <ul className={styles.lists}>
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
            <div className={styles.getbtn}>
              <a href="#" className={styles.getstarted}>
                Get Started <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </navbar>
          {/* Text area  */}
          <section className={styles.landeing}>
            <div className={styles.textarea}>
              <h1>EnspireTech</h1>
              <h5>Revolutionizing Technology</h5>
              <p>
                We provide every serivce that your company would ever need. Take
                your company to better path.
              </p>
              <a href="#">View More</a>
            </div>
            <div className={styles.imagecontainer}>
              <img src="/images/laptop.svg" alt="" className={styles.laptop1} />
              <img
                src="/images/laptop-2.svg"
                alt=""
                className={styles.laptop2}
              />
            </div>
          </section>
        </div>
      </header>
      {/* <div>
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
      </div> */}
    </div>
  );
}

const services = () => {};
