import React from "react";
import { Link } from "react-router-dom";

const HomeService = () => {
  const services = [
    {
      id: 1,
      title: "Skill Development Training",
      banner: "/images/collections/7.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 2,
      title: "Internet of Things",
      banner: "/images/collections/8.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      banner: "/images/collections/9.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 4,
      title: "Research & Development",
      banner: "/images/collections/10.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 5,
      title: "Blockchain Application",
      banner: "/images/collections/11.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 6,
      title: "Software Development",
      banner: "/images/collections/12.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
  ];
  return (
    <>
      <section data-aos="fade-up" data-aos-duration="1000" className="services">
        <div className="container">
          <h3 className="main-title">
            Services
            <div className="underline-wrapper">
              <div className="underline-circle"></div>
              <div className="underline-line"></div>
            </div>
          </h3>
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 item mb-lg-4">
                <div className="nft-box">
                  <div className="nft-box-thumb">
                    <img className="img-fluid" src={service.banner} alt="" />
                    <div className="nft-box-btn-content">
                      <Link
                        to={`/services/${service.id}`}
                        className="nft-box-btn"
                      >
                        Read More <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="nft-box-content">
                    <div className="nft-box-title-wrap">
                      <h3 className="nft-box-title">
                        <Link to={`/services/${service.id}`}>
                          {service.title}
                        </Link>
                      </h3>
                      <p className="nft-box-text mt-2">{service.description}</p>
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

export default HomeService;
