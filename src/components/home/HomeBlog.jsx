import React from "react";
import { Link } from "react-router-dom";
import useGet from "../../customhooks/useGet";
import Loader from "../../loader/Loader";

const BASE_URL = "https://apiserver.intelligentsystems.com.bd";

const HomeBlog = () => {
  const { data: blogs, isLoading, error } = useGet("blogs/recent");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {/* <!-- ========== Start Blog ========== --> */}

      <section className="blog">
        <div data-aos="fade-up" data-aos-duration="1000" className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="main-title">
                Latest Blog
                <div className="underline-wrapper">
                  <div className="underline-circle"></div>
                  <div className="underline-line"></div>
                </div>
              </h3>
            </div>
            <div className="col-6">
              <div className="posts-more discover-more text-right">
                <Link to="/blogs" style={{ color: "#000", fontWeight: "bold" }}>
                  Discover more <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs?.map((blog) => (
              <div key={blog._id} className="col-md-6 item">
                <div className="blog-item">
                  <div
                    className="blog-item-wrap"
                    style={{
                      backgroundImage: `url(${BASE_URL}${blog.banner})`,
                    }}
                  >
                    <div className="blog-info">
                      <div className="post-content">
                        <h3 className="post-title text-white">
                          <Link
                            to={{
                              pathname: `/blogs/${blog.title
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`,
                            }}
                            state={{
                              id: blog._id,
                            }}
                          >
                            {blog.title}
                          </Link>
                        </h3>
                      </div>
                      <div className="author-info d-flex align-items-center">
                        <div className="author-info-content">
                          <h4 className="author-info-name">
                            <a href="#0">{blog.author}</a>
                          </h4>
                          <span className="post-date">{blog.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- ========== End Blog ========== --> */}
    </>
  );
};

export default HomeBlog;
