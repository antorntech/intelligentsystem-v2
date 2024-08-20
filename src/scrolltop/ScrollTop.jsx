import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  const [isActive, setIsActive] = useState(false);

  const scrollUp = () => {
    if (window.scrollY >= 1100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#0"
      className={`scroll-top ${isActive ? "active" : ""}`}
      onClick={scrollToTop}
    >
      <span>
        <i className="fa fa-arrow-up"></i>
      </span>
    </a>
  );
};

export default ScrollTop;
