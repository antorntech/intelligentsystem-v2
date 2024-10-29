import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link, useLocation } from "react-router-dom";
import useGetDetails from "../customhooks/useGetDetails";
import Loader from "../loader/Loader";

const SoftwareDetails = () => {
  // Access the id from location state
  const location = useLocation();
  const { id } = location.state || {};

  const { data: software, isLoading, error } = useGetDetails(`softwares/${id}`);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!software) return <div>No software details available.</div>;

  return (
    <>
      <PageHeader title="Software Details" />
      <section className="blog animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <SoftwareContent software={software} />
            </div>
            <div className="col-lg-4">
              <SidebarSection software={software} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Component for displaying software content
const SoftwareContent = ({ software }) => {
  return (
    <div className="blog-single">
      <div className="blog-item">
        <div className="blog-item-thumb">
          <img
            src={`https://apiserver.intelligentsystems.com.bd${software.banner}`}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="blog-item-content">
          <div className="post-content">
            <h3 className="post-title">{software.title}</h3>
          </div>
          <div className="author-info d-flex align-items-center">
            <div className="author-info-content">
              <h4 className="author-info-name">{software.author}</h4>
              <span className="post-date">{software.date}</span>
            </div>
          </div>
          <div className="post-text">
            <p>{software.details}</p>
          </div>
          <div className="post-footer">
            <div className="post-tags">
              <h4 style={{ fontSize: "18px", fontWeight: "600" }}>Tags</h4>
              <ul className="tags-list list-unstyled mt-3">
                {software?.tags?.map((tag, index) => (
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
  );
};

// Sidebar section to display tools, features, and benefits
const SidebarSection = ({ software }) => {
  return (
    <div className="sidebar">
      <SidebarWidget title="Development Tools">
        <ul>
          {software?.devTools?.map((tool, index) => (
            <li key={index}>
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#f2b021"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
              </div>
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </SidebarWidget>

      <SidebarWidget title="Key Features">
        <ul>
          {software?.keyFeatures?.map((feature, index) => (
            <li key={index}>
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#f2b021"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </SidebarWidget>

      <SidebarWidget title="Software Benefits">
        <ul>
          {software.benefits.map((benefit, index) => (
            <li key={index}>
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="loop"
                  colors="primary:#f2b021"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
              </div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </SidebarWidget>

      <HelpCard />
    </div>
  );
};

// Reusable component for sidebar widgets
const SidebarWidget = ({ title, children }) => {
  return (
    <div className="sidebar-widget sidebar-category">
      <h3 className="sidebar-widget-title">{title}</h3>
      <div className="sidebar-widget-content">{children}</div>
    </div>
  );
};

// Help card at the bottom of the sidebar
const HelpCard = () => {
  return (
    <div className="sidebar-widget text-center">
      <div className="help-card-body">
        <lord-icon
          src="https://cdn.lordicon.com/rsvfayfn.json"
          trigger="loop"
          delay="2000"
          colors="primary:#fff"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
        <h2
          style={{ fontSize: "25px", fontWeight: "600", marginBottom: "20px" }}
        >
          For additional service information
        </h2>
        <Link to="tel:+1234567890" className="sidebar-help-button">
          Call Us
        </Link>
      </div>
    </div>
  );
};

export default SoftwareDetails;
