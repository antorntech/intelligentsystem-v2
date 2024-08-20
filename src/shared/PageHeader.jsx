import React from "react";

const PageHeader = ({ title }) => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="container">
          <h3 className="breadcrumb-title">{title}</h3>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
