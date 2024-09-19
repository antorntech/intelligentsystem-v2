import React, { useState } from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const Training = () => {
  const alltrainings = [
    {
      id: 1,
      title: "Responsive Website Development",
      banner: "/images/trainings/training1.jpg",
      price: "20,000",
    },
    {
      id: 2,
      title: "Mobile App Development with Flutter",
      banner: "/images/trainings/training2.jpg",
      price: "20,000",
    },
    {
      id: 3,
      title: "Cloud Computing Consultancy",
      banner: "/images/trainings/training3.jpg",
      price: "20,000",
    },
  ];
  const categories = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "App Development" },
    { id: 3, name: "Graphics Design" },
    { id: 4, name: "Digital Marketing" },
    { id: 5, name: "Cyber Security" },
    { id: 6, name: "Data Science" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredTrainings = alltrainings.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTrainings = filteredTrainings.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const totalPages = Math.ceil(filteredTrainings.length / postsPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <PageHeader title="Training" />
      <section className="blog animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-items">
                <div className="row">
                  {currentTrainings.length > 0 ? (
                    currentTrainings.map((currentTraining) => (
                      <div className="col-lg-6 col-md-12 item">
                        <div className="nft-box mb-4">
                          <div className="nft-box-thumb">
                            <img
                              className="img-fluid"
                              src={currentTraining.banner}
                              alt=""
                            />
                            <div className="nft-box-btn-content">
                              <Link
                                to={{
                                  pathname: `/training/${currentTraining.title
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()}`,
                                }}
                                state={{
                                  id: currentTraining.id,
                                }}
                                className="nft-box-btn"
                              >
                                Explore <i className="fa fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="nft-box-content">
                            <div className="nft-box-title-wrap d-flex align-items-center justify-content-between">
                              <h3 className="nft-box-title">
                                <Link
                                  to={{
                                    pathname: `/training/${currentTraining.title
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}`,
                                  }}
                                  state={{
                                    id: currentTraining.id,
                                  }}
                                >
                                  {currentTraining.title}
                                </Link>
                              </h3>
                              <div className="nft-box-trending-icon">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                  >
                                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center">
                      <div className="notfound-loader"></div>
                      <p
                        className="text-black text-focus-in"
                        style={{ marginTop: "10px", fontSize: "20px" }}
                      >
                        No Training Found
                      </p>
                    </div>
                  )}
                </div>
                {filteredTrainings.length > 0 && (
                  <div className="pagination">
                    <ul>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent the default anchor behavior
                            if (currentPage > 1) {
                              handlePageChange(currentPage - 1);
                            }
                          }}
                          className={currentPage <= 1 ? "disabled" : ""}
                        >
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>

                      {[...Array(totalPages)].map((_, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            onClick={() => handlePageChange(index + 1)}
                            className={
                              currentPage === index + 1 ? "current" : ""
                            }
                          >
                            {index + 1}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent the default anchor behavior
                            if (currentPage < totalPages) {
                              handlePageChange(currentPage + 1);
                            }
                          }}
                          className={
                            currentPage >= totalPages ? "disabled" : ""
                          }
                        >
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget sidebar-search">
                  <h3 className="sidebar-widget-title">Search</h3>
                  <div className="sidebar-widget-content">
                    <div className="sidebar-search-wrap">
                      <form action="#">
                        <div className="sidebar-search-input">
                          <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-category">
                  <h3 className="sidebar-widget-title">Category</h3>
                  <div className="sidebar-widget-content">
                    <ul>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <a href="/training">{category.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-recent-posts">
                  <h3 className="sidebar-widget-title">Popular Training</h3>
                  <div className="sidebar-widget-content">
                    {alltrainings.slice(0, 3).map((training) => (
                      <div key={training.id} className="sidebar-post">
                        <div className="post d-flex align-items-center">
                          <div className="post-thumb">
                            <a href="/#">
                              <img src={training.banner} alt="" />
                            </a>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <a href="/#">{training.title}</a>
                            </h3>
                            <div className="post-meta">
                              <span>৳ {training.price}</span>
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

export default Training;
