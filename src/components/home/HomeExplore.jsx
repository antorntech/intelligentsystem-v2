import React from "react";
import { Link } from "react-router-dom";

const HomeExplore = () => {
  return (
    <>
      {/* <!-- ========== Start Explore ========== --> */}

      <section className="about animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
            <div
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="col-lg-6 d-flex align-items-center"
            >
              <div className="about-info animate__animated animate__fadeInLeft">
                <h4 className="sub-title">Discover More</h4>
                <h3 className="main-title">
                  Explore & Sell Your Awesome Product
                </h3>
                <p>
                  Dolor repellendus temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus sae eveniet ut et voluptates
                  repudiandae sint et moles tiae non recusandae.
                </p>
                <p>
                  Ac vulputate ornare donec orci sed gravida senectus. Felis
                  quis morbi vivamus est eget sapien magnis quis.
                </p>
                <Link className="main-btn" to="/services">
                  Read More <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                className="about-image"
              >
                <img
                  className="img-fluid slide-top"
                  src="images/explore.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========== End Explore ========== --> */}
    </>
  );
};

export default HomeExplore;
