import React, { useState } from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const TrainingDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const service = {
    title: "Skill Development Training",
    image: "/images/collections/8.jpg",
    author: "AM Antor",
    date: "September 17, 2022",
    category: "Skill Development Training",
    benifits: [
      "Learn from experienced professionals with real-world expertise.",
      "Gain practical experience with interactive sessions and projects.",
      "Choose from various course timings to fit your schedule.",
      "Receive a recognized certificate upon completion to boost your resume.",
    ],
    courseOffered: [
      "Coding, data analysis, cybersecurity.",
      "Team management, project leadership, communication.",
      "Tailored programs for various industries.",
    ],
    workingProcess: [
      "Select from a wide range of topics tailored to your goals.",
      "Sign up through our easy-to-use online portal or contact our team.",
      "Attend sessions, complete assignments, and engage with instructors.",
      "Obtain your certificate upon successful completion of the course.",
    ],
    modules: [
      {
        id: 1,
        heading: "headingOne",
        title: "Introduction to Skill Development",
        description:
          "Learn the basics of React and start building modern web applications.",
        list: [
          "Introduction to React",
          "Installing React",
          "Creating a React App",
        ],
      },
      {
        id: 2,
        heading: "headingTwo",
        title: "Skill Development with JavaScript",
        description:
          "Dive deep into advanced JavaScript concepts and improve your coding skills.",
        list: [
          "Introduction to JavaScript",
          "Variables and Data Types",
          "Control Structures",
        ],
      },

      {
        id: 3,
        heading: "headingThree",
        title: "Advanced Concepts in Skill Development",
        description:
          "Understand the fundamentals of CSS and how to style web pages effectively.",
        list: ["Introduction to CSS", "CSS Selectors", "CSS Properties"],
      },
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
      <PageHeader title="Service Details" />
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
                          Key Benefits
                        </h4>
                        <ul className="mt-2">
                          {service.benifits.map((benifit) => (
                            <li>
                              <i class="fa-solid fa-check mr-2"></i>
                              <span style={{ fontSize: "14px" }}>
                                {benifit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </blockquote>
                      <blockquote>
                        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                          Course Offered
                        </h4>
                        <ul className="mt-2">
                          {service.courseOffered.map((offer) => (
                            <li>
                              <i class="fa-solid fa-check mr-2"></i>
                              <span style={{ fontSize: "14px" }}>{offer}</span>
                            </li>
                          ))}
                        </ul>
                      </blockquote>
                      <blockquote>
                        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                          How It Works
                        </h4>
                        <ul className="mt-2">
                          {service.workingProcess.map((work) => (
                            <li>
                              <i class="fa-solid fa-check mr-2"></i>
                              <span style={{ fontSize: "14px" }}>{work}</span>
                            </li>
                          ))}
                        </ul>
                      </blockquote>
                      <blockquote>
                        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                          Modules
                        </h4>
                        <div id="accordion">
                          {service?.modules.map((module, index) => (
                            <div key={module.id} className="card active mt-3">
                              <button
                                style={{
                                  color: "#000",
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "15px 10px",
                                  justifyContent: "space-between",
                                }}
                                data-toggle="collapse"
                                data-target={"#" + module.id}
                                aria-expanded={activeIndex === index}
                                aria-controls={module.id}
                              >
                                <div
                                  style={{
                                    color: "#000",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span className="moduleNumber">
                                    {module.id}
                                  </span>
                                  <span
                                    className="ml-2"
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "1000",
                                    }}
                                  >
                                    {module.title}
                                  </span>
                                </div>

                                <i className="fa fa-angle-down"></i>
                              </button>
                              <div
                                id={module.id}
                                className={`collapse ${
                                  activeIndex === index ? "show" : ""
                                }`}
                                aria-labelledby={module.heading}
                                data-parent="#accordion"
                              >
                                <div className="card-body">
                                  <p>{module.description}</p>
                                  <ul className="mt-1">
                                    {module?.list?.map((subModule) => (
                                      <li>
                                        <i class="fa-solid fa-check mr-2"></i>
                                        {subModule}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
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
                  <h3 className="sidebar-widget-title">Category</h3>
                  <div className="sidebar-widget-content">
                    <ul>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <Link to="/services">{category.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-recent-posts">
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
                </div>
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
