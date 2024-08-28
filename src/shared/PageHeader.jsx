import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title }) => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <h3 className="breadcrumb-title">{title}</h3>
          <ul className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
