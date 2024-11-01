import React, { useState } from "react";
import "./TrainingModules.css";

// const modules = [
//   {
//     id: 1,
//     title: "Module One",
//     description:
//       "Learn the basics of React and start building modern web applications.",
//     list: ["Introduction to React", "Installing React", "Creating a React App"],
//   },
//   {
//     id: 2,
//     title: "Module Two",
//     description:
//       "Dive deep into advanced JavaScript concepts and improve your coding skills.",
//     list: [
//       "Introduction to JavaScript",
//       "Variables and Data Types",
//       "Control Structures",
//     ],
//   },
//   {
//     id: 3,
//     title: "Module Three",
//     description:
//       "Understand the fundamentals of CSS and how to style web pages effectively.",
//     list: ["Introduction to CSS", "CSS Selectors", "CSS Properties"],
//   },
// ];

const TrainingModules = ({ modules }) => {
  console.log(modules);

  const [activeModuleId, setActiveModuleId] = useState(null);

  const handleAccordionClick = (id) => {
    setActiveModuleId((prevActiveModuleId) =>
      prevActiveModuleId === id ? null : id
    );
  };

  return (
    <section className="accordion-wrapper" role="tablist">
      {modules?.map((module, index) => (
        <div className="accordion" key={module._id}>
          <lavel
            className={`accordion-label ${
              activeModuleId === module.id ? "open" : ""
            }`}
            onClick={() => handleAccordionClick(module._id)}
          >
            <span>
              <span className="module-number">{index + 1}</span> {module.title}
            </span>
          </lavel>
          <div
            className={`accordion-content ${
              activeModuleId === module._id ? "open" : ""
            }`}
          >
            <p className="description">{module.description}</p>
            <ul>
              {module?.lists?.map((item, index) => (
                <li className="list-item" key={index}>
                  <i class="fa-regular fa-square-check mr-2"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TrainingModules;
