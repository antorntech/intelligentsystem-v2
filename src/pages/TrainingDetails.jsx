import React, { useState } from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";
import TrainingModules from "../trainingmodules/TrainingModules";

const TrainingDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const service = {
    title: "Skill Development Training",
    image: "/images/collections/8.jpg",
    author: "AM Antor",
    date: "September 17, 2022",
    category: "Skill Development Training",
    benefits: [
      "Learn from experienced professionals with real-world expertise.",
      "Gain practical experience with interactive sessions and projects.",
      "Choose from various course timings to fit your schedule.",
      "Receive a recognized certificate upon completion to boost your resume.",
    ],
    offers: [
      "Coding, data analysis, cybersecurity.",
      "Team management, project leadership, communication.",
      "Tailored programs for various industries.",
    ],
    works: [
      "Select from a wide range of topics tailored to your goals.",
      "Sign up through our easy-to-use online portal or contact our team.",
      "Attend sessions, complete assignments, and engage with instructors.",
      "Obtain your certificate upon successful completion of the course.",
    ],
  };

  const allServices = [
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
      <PageHeader title="Training Details" />
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-single">
                <div className="blog-item">
                  {/* <!-- Post Image --> */}
                  <div className="blog-item-thumb">
                    <img
                      src={service.image}
                      alt=""
                      width="100%"
                      height="500px"
                    />
                  </div>
                  {/* <!-- Post Content --> */}
                  <div className="blog-item-content">
                    <div className="post-content">
                      <h3 className="post-title">
                        <div>{service.title}</div>
                      </h3>
                    </div>
                    <div className="author-info d-flex align-items-center">
                      <div className="author-info-content">
                        <h4 className="author-info-name">
                          <div>{service.author}</div>
                        </h4>
                        <span className="post-date">{service.date}</span>
                      </div>
                    </div>
                    <div className="post-text">
                      <p>
                        Our Skill Development Training offers targeted programs
                        to help you enhance your skills and advance your career.
                        Whether you're looking to improve your technical
                        abilities, leadership skills, or industry-specific
                        knowledge, our courses are designed to meet your needs.
                      </p>
                    </div>
                    <div className="more-details">
                      <blockquote>
                        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                          Modules
                        </h4>
                        <TrainingModules />
                      </blockquote>
                    </div>
                    <div className="post-footer">
                      <div className="post-tags">
                        <h5>Tags</h5>
                        <ul className="tags-list list-unstyled">
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
                  <h3 className="sidebar-widget-title">Key Benefits</h3>
                  <div className="sidebar-widget-content">
                    <ul>
                      {service.benefits.map((benefit, index) => (
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
                <div className="sidebar-widget sidebar-category">
                  <h3 className="sidebar-widget-title">Service Offers</h3>
                  <div className="sidebar-widget-content">
                    <ul>
                      {service.offers.map((offer, index) => (
                        <li key={index}>
                          <div>
                            <lord-icon
                              src="https://cdn.lordicon.com/oqdmuxru.json"
                              trigger="loop"
                              colors="primary:#f2b021"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </div>
                          <span>{offer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-category">
                  <h3 className="sidebar-widget-title">How It Works</h3>
                  <div className="sidebar-widget-content">
                    <ul>
                      {service.works.map((work, index) => (
                        <li key={index}>
                          <div>
                            <lord-icon
                              src="https://cdn.lordicon.com/oqdmuxru.json"
                              trigger="loop"
                              colors="primary:#f2b021"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </div>
                          <span>{work}</span>
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

export default TrainingDetails;
