import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const SoftwareDetails = () => {
  const software = {
    title: "It’s the Great Chance to Invest in NFTs",
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
    benifits: [
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
                    <div className="more-details">
                      <blockquote>
                        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                          Development Tools
                        </h4>
                        <ul className="mt-2">
                          {software.tools.map((tool) => (
                            <li key={tool.id}>
                              <i class="fa-solid fa-check"></i>
                              <span
                                className="ml-2"
                                style={{ fontSize: "14px" }}
                              >
                                {tool}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </blockquote>
                      <blockquote>
                        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                          Key Features
                        </h4>
                        <ul className="mt-2">
                          {software.features.map((feature) => (
                            <li key={feature.id}>
                              <i class="fa-solid fa-check"></i>
                              <span
                                className="ml-2"
                                style={{ fontSize: "14px" }}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </blockquote>
                      <blockquote>
                        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                          Benefits of University Management System
                        </h4>
                        <ul className="mt-2">
                          {software.benifits.map((benifit) => (
                            <li>
                              <i class="fa-solid fa-check mr-2"></i>
                              <span style={{ fontSize: "14px" }}>
                                {benifit}
                              </span>
                            </li>
                          ))}
                        </ul>
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
                  <h3 className="sidebar-widget-title">Categories</h3>
                  <div className="sidebar-widget-content">
                    <ul>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <Link to={`/software/${category.id}`}>
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-recent-posts">
                  <h3 className="sidebar-widget-title">Popular Software</h3>
                  <div className="sidebar-widget-content mt-2">
                    {allSoftwares.slice(0, 3).map((software) => (
                      <div key={software.id} className="sidebar-post">
                        <div className="post d-flex align-items-center">
                          <div className="post-thumb">
                            <Link to={`/software/${software.id}`}>
                              <img src={software.image} alt="" />
                            </Link>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <Link to={`/software/${software.id}`}>
                                {software.title}
                              </Link>
                            </h3>
                            <div className="post-meta">
                              <span>{software.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
