import React from "react";
import { Link } from "react-router-dom";
import useGet from "../../customhooks/useGet";

const HomeService = () => {
  const { data: services, isLoading, error } = useGet("services");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
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
            {services?.map((service) => (
              <div key={service._id} className="col-lg-4 col-md-6 item mb-lg-4">
                <div className="nft-box">
                  <div className="nft-box-thumb">
                    <img
                      className="img-fluid"
                      src={`https://apiserver.intelligentsystems.com.bd${service.banner}`}
                      alt=""
                    />
                    <div className="nft-box-btn-content">
                      <Link
                        className="nft-box-btn"
                        to={{
                          pathname: `/services/${service.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`,
                        }}
                        state={{
                          id: service._id,
                        }}
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
