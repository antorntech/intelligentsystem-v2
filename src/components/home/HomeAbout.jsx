import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <>
      <section className="home-about">
        <div>
          <img
            src="/images/about-vector-1.png"
            alt=""
            className="vector1 slide-top"
          />
          <img
            src="/images/about-vector-1.png"
            alt=""
            className="vector2 slide-top"
          />
        </div>
        <div className="container">
          <h3 className="main-title text-white">
            About
            <div className="underline-wrapper">
              <div className="underline-circle bg-white"></div>
              <div className="underline-line bg-white"></div>
            </div>
          </h3>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="row align-items-center"
          >
            <div className="col-12 col-lg-6">
              <img
                src="/images/home-about.jpg"
                alt=""
                className="img-fluid w-100 p-1 bg-white"
              />
            </div>
            <div className="col-12 col-lg-6 pt-4 pt-lg-0">
              <p className="m3-5 text-justify">
                Marcline LTD is a rapidly expanding offshore and onshore
                software development, skill development, and outsourcing company
                based in Bangladesh. We specialize in delivering global systems
                and solutions while ensuring top-notch customer service. Our
                core competencies include technology solutions, desktop
                applications, web applications, mobile applications, business
                solutions, engineering solutions, system upgrades, system
                implementation, system development, training, and other
                essential services.
              </p>
              <Link to="/about" className="main-btn">
                <i className="fa fa-rocket"></i> <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
