import Head from "next/head";
import Landing from "../Components/Landing";
import Services from "../Components/Services";
import Teams from "../Components/Teams";
import Testomonial from "../Components/Testomonial";

// install Swiper components

export default function Home() {
  return (
    <div>
      <Head>
        <title>EnspireTech - Revolutionizing Technology</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      {/* <Landing /> */}
      {/* <Services /> */}
      {/* <Teams /> */}
      <Testomonial />
      {/* <div className="wrapper">
        <section className={styles.solutioncont}>
          <div className={styles.soltion}>
            <h5>
              <span>The best solution</span> for your problems
            </h5>
            <p>
              We are here standing with you to prioritize a quality service to
              be delivered in time for your satisfaction and long term growth of
              your business.
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
            description="A trusted market leader in developing high performing websites with React, Python, Php and more for every business.From a single page portfolio website to a large e-commerce website , we have served it all. "
            images="lappoo 1.png"
          />
          <Servicesright
            title="Mobile"
            subtitle="Development"
            description="We build Native, Web and hybrid apps for multiple platforms(Android and iOS) with an eye-catching UI and UX designs using various programming languages and Artifical Intelligence techniques."
            images="image 2.png"
          />
          <Servicesleft
            title="Digital"
            subtitle="Marketing"
            description="We provide a social media management,Search Engine Optimization(SEO) and Google ads services with guranteed result. If we can't satisfy you we don't charge for a service commission."
            images="digital.png"
          />
          <Servicesright
            title="Artificial"
            subtitle="Intelligence"
            description="We use the AI/ML techniques for predictive analytics that includes customer churn, Segmentation, Recommendation system, fraud detection and more to help you automate your business and accomplish your business objectives."
            images="robot.png"
          />
          <Servicesleft
            title="Graphics"
            subtitle="Design"
            description="We not only sketch your ideas into an art that looks stunning but also focuses on solving the core of the problem. Our domain experts create designs based on Market analysis and customers expectations to ensure delightful user experience and help you achieving your business goal."
            images="graphics.png"
          />
        </div>
      </section>
      <section className={styles.teamsmain}>
        <div className="wrapper">
          <div className={styles.teamshead}>
            <div className="services-head">
              <h2 className="services_title">
                <span>Our Team</span>
              </h2>
              <p className="services-desc">
                Best professionals for best result
              </p>
            </div>
          </div>
        </div>
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
                Enspiretech is and Information Technology company for digital
                Marketing, Graphic designing ,Mobile and web development and
                Artificial Intelligence that mainly focuses on timeliness,
                security , scale and performance. <br /> <br /> We are the team
                of professional designers , developers ,analysts and engineers
                with diverse functional and technical proficiencies. we use the
                cutting edge technologies to find the solution for your problems
                and provide you a quality service at affordable price.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className={styles.testomonailcont}>
          <div className="wrapper">
            <div className="">
              <div className="title"></div>
            </div>
          </div>
        </section>
        <Footer />
      </section> */}
    </div>
  );
}

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
