import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div data-aos="fade-up" data-aos-duration="1000" className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12 footer-menu">
                <div className="footer-logo">
                  <Link to="/" className="my-logo">
                    <img className="img-fluid" src="/images/logo.png" alt="" />
                  </Link>
                </div>
                <p>
                  Dolor repellendus temporibus autem quibus dam et aut officiis
                  debitis aut rerum necessita tibus saepe tempo incidunt
                  labore...
                </p>
              </div>
              <div className="col-lg-2 col-sm-6 col-12 footer-menu">
                <div className="footer-item">
                  <h4>Site map</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/our-team">Our Team</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-12 footer-menu p-lg-0">
                <div className="footer-item">
                  <h4>Company</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/help-support">Help & Support</Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions">Terms Canditions</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 footer-menu">
                <div className="footer-item">
                  <h4>Subscribe Newsletter</h4>
                  <div className="footer-newsletter">
                    <input
                      type="text"
                      name="text"
                      placeholder="Email address"
                      required=""
                    />
                    <a className="submit" href="#0">
                      <i className="fa fa-send"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <div className="container">
            <div className="copyright d-flex align-items-center justify-content-md-between flex-sm-wrap justify-content-sm-center">
              <p>
                Copyright &copy; {year},{" "}
                <span>Intelligent Systems & Solutions Limited</span> - All
                Rights Reserved.
              </p>
              <ul className="list-unstyled social-media d-flex align-items-center">
                <li>
                  <Link to="https://www.facebook.com" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
