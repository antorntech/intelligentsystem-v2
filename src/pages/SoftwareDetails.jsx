import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link, useLocation } from "react-router-dom";

const SoftwareDetails = () => {
  const location = useLocation();

  // Access the id from location state
  const { id } = location.state || {};

  const software = {
    title: "University Project Management System",
    image: "/images/collections/13.jpg",
    author: "AM Antor",
    date: "September 17, 2022",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Centralized student records.",
      "Easy course creation and updates.",
      "Streamlined online admissions.",
      "Handles payments and invoicing.",
      "Digital attendance for students and staff.",
    ],
    benefits: [
      "Automates tasks, saving time and reducing errors.",
      "Easy access and management of all information.",
      "Seamless interaction between students, faculty, and admin.",
      "Anytime, anywhere access to up-to-date data.",
      "Reduces paperwork and manual processes.",
    ],
  };

  const allSoftwares = [
    {
      id: 1,
      title: "University Project Management System",
      image: "/images/collections/13.jpg",
    },
    {
      id: 2,
      title: "Hotel Project Management System",
      image: "/images/collections/14.jpg",
    },
    {
      id: 3,
      title: "Payroll Project Management System",
      image: "/images/collections/15.jpg",
    },
  ];

  const categories = [
    { id: 1, name: "Skill Development Training" },
    { id: 2, name: "Internet of Things" },
    { id: 3, name: "Artificial Intelligence" },
    { id: 4, name: "Research & Development" },
    { id: 5, name: "Blockchain Application" },
    { id: 6, name: "Software Development" },
  ];
  return (
    <>
      <PageHeader title="Software Details" />
      <section className="blog animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-single">
                <div className="blog-item">
                  {/* <!-- Post Image --> */}
                  <div className="blog-item-thumb">
                    <img src={software.image} className="img-fluid" alt="" />
                  </div>
                  {/* <!-- Post Content --> */}
                  <div className="blog-item-content">
                    <div className="post-content">
                      <span className="cat">
                        <div>{software.category}</div>
                      </span>
                      <h3 className="post-title">
                        <div>{software.title}</div>
                      </h3>
                    </div>
                    <div className="author-info d-flex align-items-center">
                      <div className="author-info-content">
                        <h4 className="author-info-name">
                          <div>{software.author}</div>
                        </h4>
                        <span className="post-date">{software.date}</span>
                      </div>
                    </div>
                    <div className="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim.
                      </p>
                    </div>
                    <div className="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim.
                      </p>
                    </div>
                    <div className="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim.
                      </p>
                    </div>
                    <div className="post-footer">
                      <div className="post-tags">
                        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                          Tags
                        </h4>
                        <ul className="tags-list list-unstyled mt-3">
                          <li>
                            <span>web development</span>
                          </li>
                          <li>
                            <span>cyber security</span>
                          </li>
                          <li>
                            <span>artificial intelligence</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget sidebar-category">
                  <h3 className="sidebar-widget-title">Development Tools</h3>
                  <div className="sidebar-widget-content">
                    <ul>
                      {software.tools.map((tool, index) => (
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
                  </div>
                </div>
                <div className="sidebar-widget sidebar-category">
                  <h3 className="sidebar-widget-title">Key Features</h3>
                  <div className="sidebar-widget-content">
                    <ul>
                      {software.features.map((feature, index) => (
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
                  </div>
                </div>
                <div className="sidebar-widget sidebar-category">
                  <h3 className="sidebar-widget-title">Software Benefits</h3>
                  <div className="sidebar-widget-content">
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
                  </div>
                </div>
                {/* <div className="sidebar-widget sidebar-recent-posts">
                  <h3 className="sidebar-widget-title">Recent Posts</h3>
                  <div className="sidebar-widget-content">
                    {allServices.slice(0, 3).map((service) => (
                      <div key={service.id} className="sidebar-post">
                        <div className="post d-flex align-items-center">
                          <div className="post-thumb">
                            <Link to={`/services/${service.id}`}>
                              <img src={service.banner} alt="" />
                            </Link>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <Link to={`/services/${service.id}`}>
                                {service.title}
                              </Link>
                            </h3>
                            <div className="post-meta">
                              <span>{service.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
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
                      style={{
                        fontSize: "25px",
                        fontWeight: "600",
                        marginBottom: "20px",
                      }}
                    >
                      For additional service information
                    </h2>
                    <Link to="tel:+1234567890" className="sidebar-help-button">
                      Call Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareDetails;
