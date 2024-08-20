import React from "react";

const HomeDiscover = () => {
  return (
    <>
      {" "}
      {/* <!-- ========== Start Discover NFTs ========== --> */}
      <section className="discover-nfts">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <h3 className="main-title">Discover NTFs</h3>
            </div>
            <div className="col-lg-9 col-12">
              <div className="nfts-filter-content text-lg-right">
                <div className="nfts-filter">
                  <div className="filter-wrap d-flex align-items-center justify-content-lg-end">
                    <div className="filter">
                      <button type="button" data-filter="*" className="active">
                        All
                      </button>
                      <button type="button" data-filter=".art">
                        Art
                      </button>
                      <button type="button" data-filter=".music">
                        Music
                      </button>
                      <button type="button" data-filter=".video">
                        Video
                      </button>
                      <button type="button" data-filter=".sport">
                        Sport
                      </button>
                      <button type="button" data-filter=".game">
                        Game
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row grid">
            <div className="col-lg-4 col-md-6 item grid__item video">
              <div className="nft-box">
                <div className="nft-box-thumb">
                  <a href="#0">
                    <img className="img-fluid" src="images/bid/1.jpg" alt="" />
                  </a>
                  <div className="nft-box-popularity">
                    <a href="#0">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div className="nft-box-btn-content">
                    <a href="#0" className="nft-box-btn">
                      Place a bid <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="nft-box-content">
                  <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                    <h3 className="nft-box-title">
                      <a href="#0">3D Illustration</a>
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
                  <div className="nft-box-collection d-flex align-items-center justify-content-between">
                    <div className="nft-box-user d-flex align-items-center">
                      <div className="nft-box-user-thumb">
                        <img
                          className="img-fluid"
                          src="images/avatars/2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="nft-box-user-name">
                        <span>Creator</span>
                        <h4>@Sinanart</h4>
                      </div>
                    </div>
                    <div className="nft-box-price">
                      <span>Current Bid</span>
                      <h4>4.07 ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item grid__item art">
              <div className="nft-box">
                <div className="nft-box-thumb">
                  <a href="#0">
                    <img className="img-fluid" src="images/bid/2.jpg" alt="" />
                  </a>
                  <div className="nft-box-popularity">
                    <a href="#0">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div className="nft-box-btn-content">
                    <a href="#0" className="nft-box-btn">
                      Place a bid <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="nft-box-content">
                  <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                    <h3 className="nft-box-title">
                      <a href="#0">Purple Leaf</a>
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
                  <div className="nft-box-collection d-flex align-items-center justify-content-between">
                    <div className="nft-box-user d-flex align-items-center">
                      <div className="nft-box-user-thumb">
                        <img
                          className="img-fluid"
                          src="images/avatars/3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="nft-box-user-name">
                        <span>Creator</span>
                        <h4>@Yassirart</h4>
                      </div>
                    </div>
                    <div className="nft-box-price">
                      <span>Current Bid</span>
                      <h4>1.00 ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item grid__item art">
              <div className="nft-box">
                <div className="nft-box-thumb">
                  <a href="#0">
                    <img className="img-fluid" src="images/bid/3.jpg" alt="" />
                  </a>
                  <div className="nft-box-popularity">
                    <a href="#0">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div className="nft-box-btn-content">
                    <a href="#0" className="nft-box-btn">
                      Place a bid <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="nft-box-content">
                  <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                    <h3 className="nft-box-title">
                      <a href="#0">Women Portrait</a>
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
                  <div className="nft-box-collection d-flex align-items-center justify-content-between">
                    <div className="nft-box-user d-flex align-items-center">
                      <div className="nft-box-user-thumb">
                        <img
                          className="img-fluid"
                          src="images/avatars/4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="nft-box-user-name">
                        <span>Creator</span>
                        <h4>@studioart</h4>
                      </div>
                    </div>
                    <div className="nft-box-price">
                      <span>Current Bid</span>
                      <h4>3.09 ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item grid__item sport">
              <div className="nft-box">
                <div className="nft-box-thumb">
                  <a href="#0">
                    <img className="img-fluid" src="images/bid/4.jpg" alt="" />
                  </a>
                  <div className="nft-box-popularity">
                    <a href="#0">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div className="nft-box-btn-content">
                    <a href="#0" className="nft-box-btn">
                      Place a bid <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="nft-box-content">
                  <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                    <h3 className="nft-box-title">
                      <a href="#0">Berries Art</a>
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
                  <div className="nft-box-collection d-flex align-items-center justify-content-between">
                    <div className="nft-box-user d-flex align-items-center">
                      <div className="nft-box-user-thumb">
                        <img
                          className="img-fluid"
                          src="images/avatars/1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="nft-box-user-name">
                        <span>Creator</span>
                        <h4>@Yomnaart</h4>
                      </div>
                    </div>
                    <div className="nft-box-price">
                      <span>Current Bid</span>
                      <h4>2.04 ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item grid__item game">
              <div className="nft-box">
                <div className="nft-box-thumb">
                  <a href="#0">
                    <img className="img-fluid" src="images/bid/5.jpg" alt="" />
                  </a>
                  <div className="nft-box-popularity">
                    <a href="#0">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div className="nft-box-btn-content">
                    <a href="#0" className="nft-box-btn">
                      Place a bid <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="nft-box-content">
                  <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                    <h3 className="nft-box-title">
                      <a href="#0">3D Model</a>
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
                  <div className="nft-box-collection d-flex align-items-center justify-content-between">
                    <div className="nft-box-user d-flex align-items-center">
                      <div className="nft-box-user-thumb">
                        <img
                          className="img-fluid"
                          src="images/avatars/6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="nft-box-user-name">
                        <span>Creator</span>
                        <h4>@Yaraartist</h4>
                      </div>
                    </div>
                    <div className="nft-box-price">
                      <span>Current Bid</span>
                      <h4>7.12 ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item grid__item music">
              <div className="nft-box">
                <div className="nft-box-thumb">
                  <a href="#0">
                    <img className="img-fluid" src="images/bid/6.jpg" alt="" />
                  </a>
                  <div className="nft-box-popularity">
                    <a href="#0">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div className="nft-box-btn-content">
                    <a href="#0" className="nft-box-btn">
                      Place a bid <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="nft-box-content">
                  <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                    <h3 className="nft-box-title">
                      <a href="#0">Colorful Leaf</a>
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
                  <div className="nft-box-collection d-flex align-items-center justify-content-between">
                    <div className="nft-box-user d-flex align-items-center">
                      <div className="nft-box-user-thumb">
                        <img
                          className="img-fluid"
                          src="images/avatars/7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="nft-box-user-name">
                        <span>Creator</span>
                        <h4>@dreamart</h4>
                      </div>
                    </div>
                    <div className="nft-box-price">
                      <span>Current Bid</span>
                      <h4>5.07 ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item grid__item video">
              <div className="nft-box">
                <div className="nft-box-thumb">
                  <a href="#0">
                    <img className="img-fluid" src="images/bid/7.jpg" alt="" />
                  </a>
                  <div className="nft-box-popularity">
                    <a href="#0">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div className="nft-box-btn-content">
                    <a href="#0" className="nft-box-btn">
                      Place a bid <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="nft-box-content">
                  <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                    <h3 className="nft-box-title">
                      <a href="#0">Colorful Paint</a>
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
                  <div className="nft-box-collection d-flex align-items-center justify-content-between">
                    <div className="nft-box-user d-flex align-items-center">
                      <div className="nft-box-user-thumb">
                        <img
                          className="img-fluid"
                          src="images/avatars/14.jpg"
                          alt=""
                        />
                      </div>
                      <div className="nft-box-user-name">
                        <span>Creator</span>
                        <h4>@Leilaart</h4>
                      </div>
                    </div>
                    <div className="nft-box-price">
                      <span>Current Bid</span>
                      <h4>4.07 ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item grid__item music">
              <div className="nft-box">
                <div className="nft-box-thumb">
                  <a href="#0">
                    <img className="img-fluid" src="images/bid/11.jpg" alt="" />
                  </a>
                  <div className="nft-box-popularity">
                    <a href="#0">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div className="nft-box-btn-content">
                    <a href="#0" className="nft-box-btn">
                      Place a bid <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="nft-box-content">
                  <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                    <h3 className="nft-box-title">
                      <a href="#0">Multicolor Illustration</a>
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
                  <div className="nft-box-collection d-flex align-items-center justify-content-between">
                    <div className="nft-box-user d-flex align-items-center">
                      <div className="nft-box-user-thumb">
                        <img
                          className="img-fluid"
                          src="images/avatars/8.jpg"
                          alt=""
                        />
                      </div>
                      <div className="nft-box-user-name">
                        <span>Creator</span>
                        <h4>@Simayart</h4>
                      </div>
                    </div>
                    <div className="nft-box-price">
                      <span>Current Bid</span>
                      <h4>2.47 ETH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========== End Discover NFTs ========== --> */}
    </>
  );
};

export default HomeDiscover;
