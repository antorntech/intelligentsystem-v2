import React from "react";
import { Link } from "react-router-dom";

const HomeNewAbout = () => {
  return (
    <section className="home-new-about">
      <div className="container">
        <div className="home-new-about-top">
          <div className="top-content-left">
            <p>Our company</p>
            <h2>ISSL is your trusted source in IT services and support</h2>
          </div>
          <div className="top-content-right">
            <p>
              Intelligent Systems & Solutions LTD is a privately owned IT
              Support and IT Services business formed in 2024. Today we’re proud
              to boast a strong team of IT engineers who thrive on rolling up
              their sleeves and solving your IT problems and meeting your
              business needs.
            </p>
          </div>
        </div>
      </div>
      <div className="home-new-about-bottom">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-item">
              <div className="banner">
                <img
                  src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/05/working-day-in-office-PQPMBS4-800x450.jpg"
                  alt=""
                />
              </div>
              <div className="content-text">
                <h3>How We Can Help ?</h3>
                <Link to="/">Read More</Link>
              </div>
            </div>
            <div className="content-item">
              <div className="banner">
                <img
                  src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/05/285-jir-60871-nam-eye-id-392451-jpeg1-800x450.jpg"
                  alt=""
                />
              </div>
              <div className="content-text">
                <h3>How We Can Help ?</h3>
                <Link to="/">Read More</Link>
              </div>
            </div>
            <div className="content-item">
              <div className="banner">
                <img
                  src="https://live.21lab.co/nanosoft/wp-content/uploads/2018/05/working-day-in-office-PQPMBS4-800x450.jpg"
                  alt=""
                />
              </div>
              <div className="content-text">
                <h3>How We Can Help ?</h3>
                <Link to="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewAbout;
