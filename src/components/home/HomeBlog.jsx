import React from "react";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <>
      {/* <!-- ========== Start Blog ========== --> */}

      <section className="blog">
        <div data-aos="fade-up" data-aos-duration="1000" className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="main-title">
                Latest Blog
                <div className="underline-wrapper">
                  <div className="underline-circle"></div>
                  <div className="underline-line"></div>
                </div>
              </h3>
            </div>
            <div className="col-6">
              <div className="posts-more discover-more text-right">
                <Link to="/blogs" style={{ color: "#000", fontWeight: "bold" }}>
                  Discover more <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 item">
              <div className="blog-item">
                <div
                  className="blog-item-wrap"
                  style={{ backgroundImage: "url('images/blog/1.jpg')" }}
                >
                  <div className="blog-info">
                    <div className="post-content">
                      <span className="cat">
                        <a href="#0">Nftartwork</a>
                      </span>
                      <h3 className="post-title">
                        <Link
                          to="/blogs/how-to-create-your-1st-crypto-nfts"
                          className="text-white"
                        >
                          How to Create Your 1st Crypto NFTs
                        </Link>
                      </h3>
                    </div>
                    <div className="author-info d-flex align-items-center">
                      <div className="author-info-content">
                        <h4 className="author-info-name">
                          <a href="#0">Yassir Yates</a>
                        </h4>
                        <span className="post-date">September 17, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 item">
              <div className="blog-item">
                <div
                  className="blog-item-wrap"
                  style={{ backgroundImage: "url('images/blog/2.jpg')" }}
                >
                  <div className="blog-info">
                    <div className="post-content">
                      <span className="cat">
                        <a href="#0">Digitalart</a>
                      </span>
                      <h3 className="post-title">
                        <Link
                          to="/blogs/its-the-great-chance-to-invest-in-nfts"
                          className="text-white"
                        >
                          It’s the Great Chance to Invest in NFTs
                        </Link>
                      </h3>
                    </div>
                    <div className="author-info d-flex align-items-center">
                      <div className="author-info-content">
                        <h4 className="author-info-name">
                          <a href="#0">Yomna Doe</a>
                        </h4>
                        <span className="post-date">September 17, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========== End Blog ========== --> */}
    </>
  );
};

export default HomeBlog;
