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
      <lord-icon
        src="https://cdn.lordicon.com/dwoxxgps.json"
        trigger="loop"
        colors="primary:#ffffff"
        style={{ width: "40px", height: "40px" }}
      ></lord-icon>
    </a>
  );
};

export default ScrollTop;
