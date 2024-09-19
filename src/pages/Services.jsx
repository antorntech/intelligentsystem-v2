import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const Services = () => {
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
      <PageHeader title="Services" />
      <section className="services section-animation">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 item">
                <div className="nft-box">
                  <div className="nft-box-thumb">
                    <img className="img-fluid" src={service.banner} alt="" />
                    <div className="nft-box-btn-content">
                      <Link
                        to={{
                          pathname: `/services/${service.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`,
                        }}
                        state={{
                          id: service.id,
                        }}
                        className="nft-box-btn"
                      >
                        Read More <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="nft-box-content">
                    <div className="nft-box-title-wrap">
                      <h3 className="nft-box-title">
                        <Link
                          to={{
                            pathname: `/services/${service.title
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`,
                          }}
                          state={{
                            id: service.id,
                          }}
                        >
                          {service.title}
                        </Link>
                      </h3>
                      <p className="nft-box-text mt-3">{service.description}</p>
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

export default Services;
