import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../loader/Loader";
import useGet from "../../customhooks/useGet";

const HomePortfolio = () => {
  const { data: softwares, isLoading, error } = useGet("softwares");

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <section className="portfolio">
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
        <div data-aos="fade-up" data-aos-duration="1000" className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="main-title text-white">
                Software{" "}
                <div className="underline-wrapper">
                  <div className="underline-circle bg-white"></div>
                  <div className="underline-line bg-white"></div>
                </div>
              </h3>
            </div>
            <div className="col-6">
              <div className="nft-more discover-more text-right">
                <Link to="/software">
                  Discover more <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {softwares?.map((software) => (
              <div key={software._id} className="col-lg-4 col-md-6 item">
                <div className="nft-box">
                  <div className="nft-box-thumb">
                    <img
                      className="img-fluid"
                      src={`https://apiserver.intelligentsystems.com.bd${software.banner}`}
                      alt=""
                    />
                    <div className="nft-box-btn-content">
                      <Link
                        to={{
                          pathname: `/software/${software.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`,
                        }}
                        state={{
                          id: software._id,
                        }}
                        className="nft-box-btn"
                      >
                        Explore <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="nft-box-content">
                    <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                      <h3 className="nft-box-title">
                        <Link
                          to={{
                            pathname: `/software/${software.title
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`,
                          }}
                          state={{
                            id: software._id,
                          }}
                          className="text-white"
                        >
                          {software.title}
                        </Link>
                      </h3>
                      <div className="nft-box-trending-icon">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePortfolio;
