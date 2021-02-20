import "../styles/globals.scss";
import "../styles/nav.scss";
import "../styles/Landing.scss";
import "../styles/Services.scss";
import "../styles/Team.scss";
import "../styles/Testomonial.scss";
// Import Swiper styles
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import "swiper/swiper.scss";
import Navbar from "../Components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
