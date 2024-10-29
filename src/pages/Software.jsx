import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const Software = () => {
  return (
    <>
      <PageHeader title="Software" />
      <section className="services animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
            {portfolios.map((portfolio) => (
              <div className="col-lg-4 col-md-6 item">
                <div className="nft-box">
                  <div className="nft-box-thumb">
                    <img className="img-fluid" src={portfolio.banner} alt="" />
                    <div className="nft-box-btn-content">
                      <Link
                        to={{
                          pathname: `/software/${portfolio.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`,
                        }}
                        state={{
                          id: portfolio.id,
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
                            pathname: `/software/${portfolio.title
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`,
                          }}
                          state={{
                            id: portfolio.id,
                          }}
                        >
                          {portfolio.title}
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

export default Software;
