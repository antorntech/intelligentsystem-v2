import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import useGet from "../customhooks/useGet";

const Services = () => {
  const { data: services, isLoading, error } = useGet("services");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <PageHeader title="Services" />
      <section className="services section-animation">
        <div className="container">
          <div className="row">
            {services?.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 item">
                <div className="nft-box">
                  <div className="nft-box-thumb">
                    <img
                      className="img-fluid"
                      src={`https://apiserver.intelligentsystems.com.bd/${service.banner}`}
                      alt=""
                    />
                    <div className="nft-box-btn-content">
                      <Link
                        to={{
                          pathname: `/services/${service.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`,
                        }}
                        state={{
                          id: service._id,
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
                            id: service._id,
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
