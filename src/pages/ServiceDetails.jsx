import React, { useEffect, useState } from "react";
import PageHeader from "../shared/PageHeader";
import { Link, useLocation } from "react-router-dom";
import useGetDetails from "../customhooks/useGetDetails";
import Loader from "../loader/Loader";

const ServiceDetails = () => {
  // Access the id from location state
  const location = useLocation();
  const { id } = location.state || {};

  const { data: service, isLoading, error } = useGetDetails(`services/${id}`);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleCollapse = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
  if (error) return <div>Error: {error}</div>;
  if (!service) return <div>No service details available.</div>;

  return (
    <>
      <PageHeader title="Service Details" />
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-single">
                <div className="blog-item">
                  {/* Post Image */}
                  <div className="blog-item-thumb">
                    <img
                      src={`https://apiserver.intelligentsystems.com.bd${service.banner}`}
                      alt=""
                      width="100%"
                      height="500px"
                    />
                  </div>
                  {/* Post Content */}
                  <div className="blog-item-content">
                    <div className="post-content">
                      <h3 className="post-title">{service.title}</h3>
                    </div>
                    <div className="author-info d-flex align-items-center">
                      <div className="author-info-content">
                        <h4 className="author-info-name">{service.author}</h4>
                        <span className="post-date">{service.date}</span>
                      </div>
                    </div>
                    <div className="post-text">
                      <p>{service.details}</p>
                    </div>
                    {/* Additional Content */}
                    <div className="post-footer">
                      <h5>Tags</h5>
                      <ul className="tags-list list-unstyled d-flex">
                        {service.tags.map((tag, index) => (
                          <li key={index}>
                            <span>{tag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar">
                <SidebarWidget title="Key Benefits" items={service.benefits} />
                <SidebarWidget title="Service Offers" items={service.offers} />
                <SidebarWidget title="How It Works" items={service.works} />
                <ContactHelpCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const SidebarWidget = ({ title, items }) => (
  <div className="sidebar-widget sidebar-category">
    <h3 className="sidebar-widget-title">{title}</h3>
    <div className="sidebar-widget-content">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/oqdmuxru.json"
                trigger="loop"
                colors="primary:#f2b021"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ContactHelpCard = () => (
  <div className="sidebar-widget text-center">
    <div className="help-card-body">
      <lord-icon
        src="https://cdn.lordicon.com/rsvfayfn.json"
        trigger="loop"
        delay="2000"
        colors="primary:#fff"
        style={{ width: "50px", height: "50px" }}
      ></lord-icon>
      <h2 style={{ fontSize: "25px", fontWeight: "600", marginBottom: "20px" }}>
        For additional service information
      </h2>
      <Link to="tel:+1234567890" className="sidebar-help-button">
        Call Us
      </Link>
    </div>
  </div>
);

export default ServiceDetails;
