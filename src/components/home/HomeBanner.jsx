import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <>
      {/* <!-- ========== Start Home ========== --> */}

      <section className="home" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-0 order-2">
              <div className="home-content">
                <h1 className="banner-span">Intelligence.</h1>
                <h1 className="banner-span">Innovation. Future.</h1>
                <h1 className="banner-span">
                  {" "}
                  <span>Now.</span>
                </h1>
                <p>
                  Create a beautiful software product. Explore the best
                  collection from popular creative & digital Artists.
                </p>
                <div className="my-btn">
                  <Link to="/services" className="main-btn">
                    <i className="fa fa-rocket"></i> <span>Explore Items</span>
                  </Link>
                  <Link to="/software" className="main-btn custom-btn">
                    <span>Learn More</span>{" "}
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="home-facts">
                  <ul className="facts-list list-unstyled">
                    <li>
                      <span className="number">40K +</span>
                      <span>Art Works</span>
                    </li>
                    <li>
                      <span className="number">175K +</span>
                      <span>Auctions</span>
                    </li>
                    <li>
                      <span className="number">16K +</span>
                      <span>Artists</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-0 order-1">
              <div className="right-box">
                <div className="home-image">
                  <img
                    className="img-fluid slide-top"
                    src="images/home.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========== End Home ========== --> */}
    </>
  );
};

export default HomeBanner;
