import React from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../loader/Loader";
import PageHeader from "../shared/PageHeader";
import useGet from "../customhooks/useGet";
import useGetDetails from "../customhooks/useGetDetails";

// Main BlogDetails Component
const BlogDetails = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const { data: allBlogs } = useGet("blogs");
  const { data: blog, isLoading, error } = useGetDetails(`blogs/${id}`);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>; // Ensure the error message is displayed properly

  // Check if blog data is available before rendering
  if (!blog) {
    return <div>No blog details available.</div>; // Return a message if blog data is not found
  }

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
              <BlogContent blog={blog} />
            </div>
            <div className="col-lg-4">
              <Sidebar categories={categories} allBlogs={allBlogs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Component for displaying the blog content
const BlogContent = ({ blog }) => {
  return (
    <div className="blog-single">
      <div className="blog-item">
        <div className="blog-item-thumb">
          <img
            src={`https://apiserver.intelligentsystems.com.bd${blog.banner}`}
            className="img-fluid"
            alt={blog.title || "Blog Post"}
          />
        </div>
        <div className="blog-item-content">
          <div className="post-content">
            <span className="cat">{blog.category}</span>
            <h3 className="post-title">{blog.title}</h3>
          </div>
          <div className="author-info d-flex align-items-center">
            <div className="author-info-content">
              <h4 className="author-info-name">{blog.author}</h4>
              <span className="post-date">{blog.date}</span>
            </div>
          </div>
          <div className="post-text">
            <p>{blog.details}</p>
          </div>
          <div className="more-details">
            <blockquote>
              <p dangerouslySetInnerHTML={{ __html: blog.blockQuote }} />
            </blockquote>
          </div>
          <div className="post-footer">
            <div className="post-tags">
              <h5>Tags</h5>
              <ul className="tags-list list-unstyled">
                {blog?.tags?.map((tag, index) => (
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

// Sidebar component to display categories and recent posts
const Sidebar = ({ categories, allBlogs }) => {
  return (
    <div className="sidebar">
      <CategoryList categories={categories} />
      <RecentPostsList allBlogs={allBlogs} />
    </div>
  );
};

// Component for displaying category list
const CategoryList = ({ categories }) => {
  return (
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
  );
};

// Component for displaying recent posts
const RecentPostsList = ({ allBlogs }) => {
  return (
    <div className="sidebar-widget sidebar-recent-posts">
      <h3 className="sidebar-widget-title">Recent Posts</h3>
      <div className="sidebar-widget-content">
        {allBlogs?.slice(0, 3)?.map((blog) => (
          <div key={blog._id} className="sidebar-post">
            <div className="post d-flex align-items-center">
              <div className="post-thumb">
                <Link to={`/blogs/${blog.id}`}>
                  <img
                    src={`https://apiserver.intelligentsystems.com.bd${blog.banner}`}
                    alt={blog.title || "Recent Post"}
                  />
                </Link>
              </div>
              <div className="post-content">
                <h3 className="post-title">
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
                <div className="post-meta">
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
