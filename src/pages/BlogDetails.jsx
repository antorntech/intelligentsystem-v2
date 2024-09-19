import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link, useLocation } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();

  // Access the id from location state
  const { id } = location.state || {};

  const blog = {
    title: "It’s the Great Chance to Invest in NFTs",
    image: "/images/blog/7.jpg",
    author: "AM Antor",
    date: "September 17, 2022",
    category: "Digitalart",
  };

  const allBlogs = [
    {
      id: 1,
      title: "How to Create Your 1st Crypto NFTs",
      image: "/images/blog/1.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 2,
      title: "How to Create Your 2nd Crypto NFTs",
      image: "/images/blog/2.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 3,
      title: "How to Create Your 3rd Crypto NFTs",
      image: "/images/blog/3.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 4,
      title: "How to Create Your 4th Crypto NFTs",
      image: "/images/blog/4.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 5,
      title: "How to Create Your 5th Crypto NFTs",
      image: "/images/blog/5.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 6,
      title: "How to Create Your 6th Crypto NFTs",
      image: "/images/blog/6.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 7,
      title: "How to Create Your 7th Crypto NFTs",
      image: "/images/blog/7.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 8,
      title: "How to Create Your 8th Crypto NFTs",
      image: "/images/blog/1.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
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
      <PageHeader title="Blog Details" />
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-single">
                <div className="blog-item">
                  {/* <!-- Post Image --> */}
                  <div className="blog-item-thumb">
                    <img src={blog.image} className="img-fluid" alt="" />
                  </div>
                  {/* <!-- Post Content --> */}
                  <div className="blog-item-content">
                    <div className="post-content">
                      <span className="cat">
                        <div>{blog.category}</div>
                      </span>
                      <h3 className="post-title">
                        <div>{blog.title}</div>
                      </h3>
                    </div>
                    <div className="author-info d-flex align-items-center">
                      <div className="author-info-content">
                        <h4 className="author-info-name">
                          <div>AM Antor</div>
                        </h4>
                        <span className="post-date">September 17, 2022</span>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt labore et
                          dolore magna aliqua. enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
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
                          <a href="/blogs">{category.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget sidebar-recent-posts">
                  <h3 className="sidebar-widget-title">Recent Posts</h3>
                  <div className="sidebar-widget-content">
                    {allBlogs.slice(0, 3).map((blog) => (
                      <div key={blog.id} className="sidebar-post">
                        <div className="post d-flex align-items-center">
                          <div className="post-thumb">
                            <Link to={`/blogs/${blog.id}`}>
                              <img src={blog.image} alt="" />
                            </Link>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
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
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
