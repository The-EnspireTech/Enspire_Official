import React from "react";

const Testomonial = () => {
  return (
    <div className="Testomonial-container">
      <div className="wrapper">
        <div className="Testo-title">
          <h3>
            <span>What Our </span>Client Say?
          </h3>
          <Clienter />
        </div>
      </div>
    </div>
  );
};

const Clienter = () => {
  return (
    <div className="client-wrapper">
      <div className="client-section">
        <div>
          <i className="fas fa-quote-left"></i>
        </div>
        <p className="client-says">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas
          perferendis perspiciatis praesentium corporis quidem distinctio ab
          mollitia neque fugiat unde modi at, voluptatem nemo sint doloribus sed
          assumenda tempora?
        </p>
        <div className="client-info">
          <img src="/images/Newsun.png" alt="" className="client-image" />
          <div className="client-text">
            <h3>Newsun Banjade</h3>
            <p>CEO at Microsoft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
