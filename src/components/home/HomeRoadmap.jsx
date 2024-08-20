import React from "react";

const HomeRoadmap = () => {
  const roadmapItems = [
    {
      id: 1,
      title: "Project Initiation",
      description:
        "Conduct initial meetings to gather requirements, define project scope, and set objectives. Establish the project team and outline the project plan.",
      color: "blue",
    },
    {
      id: 2,
      title: "Design Phase",
      description:
        "Create detailed design documents and prototypes. Validate design with stakeholders and ensure alignment with business goals and technical requirements.",
      color: "green",
    },
    {
      id: 3,
      title: "Development",
      description:
        "Begin coding and development based on the finalized design. Implement features, write unit tests, and conduct code reviews to ensure quality and functionality.",
      color: "yellow",
    },
    {
      id: 4,
      title: "Testing & QA",
      description:
        "Perform thorough testing including functional, integration, and user acceptance tests. Identify and fix bugs, and ensure the software meets quality standards.",
      color: "purple",
    },
    {
      id: 5,
      title: "Deployment",
      description:
        "Deploy the software to the production environment. Monitor the release, address any issues, and ensure a smooth transition for users.",
      color: "orange",
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description:
        "Provide ongoing support and maintenance. Address any issues or bugs that arise post-deployment and implement updates and enhancements as needed.",
      color: "red",
    },
  ];

  return (
    <section className="roadmap animate__animated animate__fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="main-title text-black">
              Our Roadmap
              <div className="underline-wrapper">
                <div className="underline-circle text-black"></div>
                <div className="underline-line text-black"></div>
              </div>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="roadmap-items">
              {roadmapItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`roadmap-item ${
                    index % 2 === 0 ? "left" : "right"
                  } ${item.color}`}
                >
                  <div className="roadmap-item-inner">
                    <h4 className="text-black">{item.title}</h4>
                    <p className="text-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRoadmap;
