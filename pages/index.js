import Head from "next/head";
import styles from "../styles/Home.module.scss";
import SwiperCore, { Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper components
SwiperCore.use([Navigation, Pagination]);
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
              <h4>Revolutionizing Technology</h4>
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
      <div className="wrapper">
        <section className={styles.solutioncont}>
          <div className={styles.soltion}>
            <h5>
              <span>The best solution</span> for your problems
            </h5>
            <p>
              We offer Web Design , Web Development, Mobile App Development,
              Digital marketing for any kind of product or company that conveys
              the intended message.
            </p>
          </div>
          <div className={styles.solimg}>
            <img src="/images/polygon.svg" alt="" />
          </div>
        </section>
      </div>
      <section className={styles.servicescont}>
        <div className="wrapper">
          <div className={styles.serviceswrapper}></div>
          <Servicesleft
            title="Web"
            subtitle="Development"
            description="We Convert Any thing "
            images="lappoo 1.png"
          />
          <Servicesright
            title="Mobile"
            subtitle="Development"
            description="Any Mobile Apps"
            images="image 2.png"
          />
          <Servicesleft
            title="Digital"
            subtitle="Marketing"
            description="Fb"
            images="digital.png"
          />
          <Servicesright
            title="Artificial"
            subtitle="Intelligence"
            description="AI"
            images="robot.png"
          />
          <Servicesleft
            title="Graphics"
            subtitle="Design"
            description="Figma.AI"
            images="graphics.png"
          />
        </div>
      </section>
      <section className={styles.teamsmain}>
        <div className="wrapper"></div>
      </section>
      <section className={styles.aboutmain}>
        <h3>
          <span>About </span>Our Compnay
        </h3>
        <div className="wrapper">
          <div className={styles.aboutcontainer}>
            <img src="/images/about.png" alt="" />

            <div className={styles.abouttext}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, rem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className={styles.testomonailcont}>
          <div className="wrapper">
            <ClientSection />
          </div>
        </section>
        <Footer />
      </section>
    </div>
  );
}

const Servicesleft = ({ title, subtitle, description, images }) => {
  return (
    <div className={styles.servicessec}>
      <img src={`/images/${images}`} alt="" />
      <div className={styles.servicestext}>
        <h3>
          <span>{title} </span>
          {subtitle}
        </h3>
        <p>{description}</p>
        <a href="#">Book Now</a>
      </div>
    </div>
  );
};

const Servicesright = ({ title, subtitle, description, images }) => {
  return (
    <div className={styles.servicessec}>
      <div className={styles.servicestext}>
        <h3>
          <span>{title} </span>
          {subtitle}
        </h3>
        <p>{description}</p>
        <a href="#">Book Now</a>
      </div>
      <div className={styles.servimg}>
        <img src={`/images/${images}`} alt="" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <section className={styles.footercontainer}>
      <div className="wrapper">
        <div className={styles.footernav}>
          <div className={styles.footlogo}>
            <img src="/images/profile_logo.png" alt="" />
          </div>
          <div className={styles.logosolo}>
            <h3>EnspireTech</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel enim
              optio atque pariatur consequuntur.
            </p>
          </div>
          <div className={styles.socialcont}>
            <h3>Follow Us</h3>
            <div className={styles.socialicons}>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
          <div className={styles.contactcont}>
            <h3>Contact Us</h3>
            <div className={styles.contactinfo}>
              <p>
                <i className="fas fa-phone-alt"></i> 9867433325
              </p>
              <p>
                <i className="far fa-envelope"></i> support@enspiretech.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientSection = () => {
  return (
    <section className={styles.clientover}>
      <div className={styles.clientconter}>
        <span>
          <i className="fas fa-quote-left"></i>
        </span>
        <p className={styles.clienttext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea sint
          tenetur voluptatibus dicta, sit expedita quidem possimus doloribus?
          Quisquam.
        </p>

        <div className={styles.clinetnamer}>
          <img src="/images/Group 42.png" alt="" />
          <div className={styles.clientfulld}>
            <h5>Newsun</h5>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};
