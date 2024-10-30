import React, { useState } from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";
import useGet from "../customhooks/useGet";
import Loader from "../loader/Loader";

const BASE_URL = "https://apiserver.intelligentsystems.com.bd";

const Blogs = () => {
  const { data: allBlogs, isLoading, error } = useGet("blogs");

  // State Hooks
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Helper functions
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Data Filtering & Pagination
  const filteredBlogs = allBlogs?.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogs?.length / postsPerPage);

  // Handle loading and error states first to avoid conditional hooks
  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

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
      <PageHeader title="Blogs" />

      <section className="blog animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-items">
                <div className="row">
                  {currentPosts?.length > 0 ? (
                    currentPosts.map((blog) => (
                      <div key={blog._id} className="col-xl-6 item">
                        <div className="blog-item">
                          <div
                            className="blog-item-wrap"
                            style={{
                              backgroundImage: `url(${BASE_URL}${blog.banner})`,
                            }}
                          >
                            <div className="blog-info">
                              <div className="post-content">
                                <span className="cat">{blog.category}</span>
                                <h3 className="post-title">
                                  <Link
                                    to={{
                                      pathname: `/blogs/${blog.title
                                        .replace(/\s+/g, "-")
                                        .toLowerCase()}`,
                                    }}
                                    state={{ id: blog._id }}
                                    className="text-white"
                                  >
                                    {blog.title}
                                  </Link>
                                </h3>
                              </div>
                              <div className="author-info">
                                <div className="author-info-content">
                                  <div className="d-flex align-items-center">
                                    <i className="fa fa-at text-white"></i>
                                    <h4 className="author-info-name ml-1">
                                      {blog.author}
                                    </h4>
                                  </div>
                                  <div>
                                    <i className="fa fa-calendar text-white"></i>
                                    <span className="post-date ml-1">
                                      {blog.date}
                                    </span>
                                  </div>
                                </div>
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
                        No Blogs Found
                      </p>
                    </div>
                  )}
                </div>

                {filteredBlogs?.length > 0 && (
                  <div className="pagination">
                    <ul>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1)
                              handlePageChange(currentPage - 1);
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
                            e.preventDefault();
                            if (currentPage < totalPages)
                              handlePageChange(currentPage + 1);
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
                    <form>
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

                <div className="sidebar-widget sidebar-category">
                  <h3 className="sidebar-widget-title">Category</h3>
                  <ul>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <a href="/blogs">{category.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-widget sidebar-recent-posts">
                  <h3 className="sidebar-widget-title">Recent Posts</h3>
                  {allBlogs?.slice(0, 3)?.map((blog) => (
                    <div key={blog._id} className="sidebar-post">
                      <div className="post d-flex align-items-center">
                        <div className="post-thumb">
                          <Link to={`/blogs/${blog._id}`}>
                            <img src={blog.image} alt={blog.title} />
                          </Link>
                        </div>
                        <div className="post-content">
                          <h3 className="post-title">
                            <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                          </h3>
                          <div className="post-meta">
                            <span>{blog.date}</span>
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
      </section>
    </>
  );
};

export default Blogs;
