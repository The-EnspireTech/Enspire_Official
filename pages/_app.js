import "../styles/globals.scss";
import "../styles/nav.scss";
import "../styles/Landing.scss";
import "../styles/Services.scss";
import "../styles/Team.scss";
import "../styles/Testomonial.scss";
import "../styles/About.scss";
import "../styles/Footer.scss";
import "../styles/Contact.scss";
import "../styles/Portfolio.scss";
// Import Swiper styles
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import "swiper/swiper.scss";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
