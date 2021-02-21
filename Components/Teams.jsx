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
              className=".swiper-container"
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                850: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                450: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
              }}
            >
              <SwiperSlide>
                <Person
                  name="Bishal Bhusal"
                  pose="Manager"
                  image="Bishal.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Person name="Niraj Poudel" pose="AI/ML" image="Niraj.png" />
              </SwiperSlide>
              <SwiperSlide>
                <Person
                  name="Newsun Banjade"
                  pose="FullStack"
                  image="image 1.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Person
                  name="Pidus Bhusal"
                  pose="Graphic Designer"
                  image="Puds.png"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const Person = ({ name, pose, image }) => {
  return (
    <div className="card">
      <div className="cardimg">
        <img src={`/images/${image}`} alt="" />
      </div>
      <div className="cardinfo">
        <h3>{name}</h3>
        <p>{pose}</p>
      </div>
    </div>
  );
};
export default Teams;
