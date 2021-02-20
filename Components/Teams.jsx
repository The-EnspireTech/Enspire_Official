import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import SwiperCore from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Teams = () => {
  return (
    <div className="Team-Container">
      <div className="wrapper">
        <div className="team-head">
          <div className="Team-title">
            <h3>
              <span>Our</span>Team
            </h3>
          </div>
          <div className="swiper-section">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Person />
              </SwiperSlide>
              <SwiperSlide>
                <Person />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const Person = () => {
  return (
    <div className="card">
      <div className="cardimg">
        <img src="/images/image 1.png" alt="" />
      </div>
      <div className="cardinfo">
        <h3>Newsun</h3>
        <p>Full Stack Developer</p>
      </div>
    </div>
  );
};
export default Teams;
