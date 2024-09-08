import React from "react";
import { Link } from "react-router-dom";

const HomeNewAbout = () => {
  return (
    <section className="home-new-about">
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
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
      <div
        className="home-new-about-bottom"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="content-wrapper">
            <div className="content-item">
              <div className="banner">
                <img src="/images/help.jpg" alt="" />
              </div>
              <div className="content-text">
                <h3>How We Can Help ?</h3>
                <Link to="/help-support">
                  <button className="readmore-btn">
                    <div class="text">
                      <span>Read</span>
                      <span></span>
                      <span>more</span>
                    </div>
                    <div class="clone">
                      <span>Read</span>
                      <span></span>
                      <span>more</span>
                    </div>
                    <svg
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className="content-item">
              <div className="banner">
                <img src="/images/aboutus.jpg" alt="" />
              </div>
              <div className="content-text">
                <h3>Who We Are ?</h3>
                <Link to="/about">
                  <button className="readmore-btn">
                    <div class="text">
                      <span>Read</span>
                      <span></span>
                      <span>more</span>
                    </div>
                    <div class="clone">
                      <span>Read</span>
                      <span></span>
                      <span>more</span>
                    </div>
                    <svg
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className="content-item">
              <div className="banner">
                <img src="/images/terms-condition.jpg" alt="" />
              </div>
              <div className="content-text">
                <h3>What Is Our Term ?</h3>
                <Link to="/terms-and-conditions">
                  <button className="readmore-btn">
                    <div class="text">
                      <span>Read</span>
                      <span></span>
                      <span>more</span>
                    </div>
                    <div class="clone">
                      <span>Read</span>
                      <span></span>
                      <span>more</span>
                    </div>
                    <svg
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                    >
                      <path
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewAbout;
