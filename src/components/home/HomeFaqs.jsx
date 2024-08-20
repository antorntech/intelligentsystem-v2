import React, { useState } from "react";

const HomeFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      id: "collapseOne",
      heading: "headingOne",
      question: "What are the Marceline?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: "collapseTwo",
      heading: "headingTwo",
      question: "How do I get Marceline?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: "collapseThree",
      heading: "headingThree",
      question: "How can we buy and invest in Marceline?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: "collapseFour",
      heading: "headingFour",
      question: "Where can we buy and sell Marceline?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: "collapseFive",
      heading: "headingFive",
      question: "Who are the team behind the project?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
  ];

  return (
    <section className="faq">
      <div data-aos="fade-up" data-aos-duration="1000" className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="main-title text-white">
              FAQs{" "}
              <div className="underline-wrapper">
                <div className="underline-circle bg-white"></div>
                <div className="underline-line bg-white"></div>
              </div>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div id="accordion">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="card active">
                  <div className="card-header" id={faq.heading}>
                    <h5>
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target={"#" + faq.id}
                        aria-expanded={activeIndex === index}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                      </button>
                    </h5>
                  </div>
                  <div
                    id={faq.id}
                    className={`collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                    aria-labelledby={faq.heading}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>{faq.answer}</p>
                    </div>
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

export default HomeFaqs;
