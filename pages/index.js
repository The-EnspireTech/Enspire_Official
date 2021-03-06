import Head from "next/head";
import About from "../Components/About";
import Landing from "../Components/Landing";
import Services from "../Components/Services";
import Teams from "../Components/Teams";
import Testomonial from "../Components/Testomonial";
import styles from "../styles/Home.module.scss";
// install Swiper components

export default function Home() {
  return (
    <div>
      <Head>
        <title>EnspireTech - Revolutionizing Technology</title>

        <meta
          name="description"
          content="A complete digital solution to empower business with innovative technology."
        />
      </Head>
      <Landing />
      <div className="wrapper">
        <section className={styles.solutioncont}>
          <div className={styles.soltion}>
            <h5>
              <span>The Best Solution</span> For Your Problems
            </h5>
            <p>
              We are here standing with you to prioritize a quality service to
              be delivered in time for your satisfaction and long term growth of
              your business.
            </p>
          </div>
          <div className={styles.sou}>
            <img src="/images/polygon.svg" alt="" />
          </div>
        </section>
      </div>
      <Services />
      <Teams />
      <About />
      <Testomonial />
    </div>
  );
}

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
            <p></p>
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

const Teamcard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <img src="/images/image 1.png" alt="" />
      </div>
      <div className={styles.cardinfo}>
        <h3>Newsun</h3>
        <p>Full Stack Developer</p>
      </div>
    </div>
  );
};
