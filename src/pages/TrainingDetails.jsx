import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageHeader from "../shared/PageHeader";
import TrainingModules from "../trainingmodules/TrainingModules";
import useGetDetails from "../customhooks/useGetDetails";
import useGet from "../customhooks/useGet";
import Loader from "../loader/Loader"; // Ensure Loader is correctly imported

const TrainingDetails = () => {
  const location = useLocation();
  const { id } = location.state || {}; // Handle undefined state gracefully

  const { data: training, isLoading, error } = useGetDetails(`trainings/${id}`);
  console.log(training);
  const { data: allTrainings } = useGet("trainings");

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <PageHeader title="Training Details" />
      <section className="blog">
        <div className="container">
          <div className="row">
            {/* Main Content Section */}
            <div className="col-lg-8">
              <div className="blog-single">
                <div className="blog-item">
                  <div className="blog-item-thumb">
                    <img
                      src={`https://apiserver.intelligentsystems.com.bd${training?.banner}`}
                      alt={training?.title || "Training Banner"}
                      width="100%"
                      height="500px"
                    />
                  </div>
                  <div className="blog-item-content">
                    <div className="post-content">
                      <h3 className="post-title">{training?.title}</h3>
                    </div>

                    <div className="author-info-content">
                      <h4 className="author-info-name">{training?.author}</h4>
                      <span className="post-date">{training?.date}</span>
                    </div>
                    <div className="post-text">
                      <p>{training?.details}</p>
                    </div>

                    <div className="more-details">
                      <blockquote>
                        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>
                          Modules
                        </h4>
                        <TrainingModules modules={training?.module} />
                      </blockquote>
                    </div>

                    <div className="post-tags">
                      <h5>Tags</h5>
                      <ul className="tags-list list-unstyled d-flex mt-3">
                        {training?.tags?.map((tag, index) => (
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

            {/* Sidebar Section */}
            <div className="col-lg-4">
              <div className="sidebar">
                <SidebarWidget
                  title="Key Benefits"
                  items={training?.benefits}
                />
                <SidebarWidget
                  title="Training Offers"
                  items={training?.offers}
                />
                <SidebarWidget title="How It Works" items={training?.works} />

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

// Sidebar Widget Component
const SidebarWidget = ({ title, items = [] }) => (
  <div className="sidebar-widget sidebar-category">
    <h3 className="sidebar-widget-title">{title}</h3>
    <div className="sidebar-widget-content">
      <ul>
        {items?.map((item, index) => (
          <li key={index} className="d-flex align-items-center">
            <lord-icon
              src="https://cdn.lordicon.com/oqdmuxru.json"
              trigger="loop"
              colors="primary:#f2b021"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TrainingDetails;
