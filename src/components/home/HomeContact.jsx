import React from "react";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <>
      <section className="home-contact">
        <div className="home-contact-content">
          <p className="sub-title">Let’s get started</p>{" "}
          <h2 className="contact-main-title">
            Are you ready for a better, more productive business?
          </h2>
          <p className="description">
            Stop worrying about technology problems. Focus on your business. Let
            us provide the support you deserve.
          </p>
          <Link to="/contact" className="main-btn">
            <i className="fa fa-rocket"></i> <span>Contact Now</span>
          </Link>
        </div>
        <div className="home-contact-img">
          <img src="/images/home-contact.jpg" alt="" />
        </div>
      </section>
    </>
  );
};

export default HomeContact;
