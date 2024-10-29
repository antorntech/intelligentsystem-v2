import React, { useState, useEffect } from "react";
import "./AnimatedSlider.css";
import { Link } from "react-router-dom";
import useGet from "../customhooks/useGet";
import Loader from "../loader/Loader";

const AUTO_SLIDE_INTERVAL = 5000;

const AnimatedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: sliders, isLoading, error } = useGet("sliders");

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length
    );
  };

  // Set up automatic slide interval
  useEffect(() => {
    const intervalId = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [sliders]);

  // Render loading state
  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  // Render error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="slider-container">
      <div className="slides-wrapper">
        {sliders?.map((slide, index) => (
          <Slide key={index} slide={slide} isActive={index === currentIndex} />
        ))}
      </div>
      <button className="swiper-button-prev" onClick={prevSlide}>
        <i className="fa fa-angle-left"></i>
      </button>
      <button className="swiper-button-next" onClick={nextSlide}>
        <i className="fa fa-angle-right"></i>
      </button>
    </div>
  );
};

const BASE_URL = "https://apiserver.intelligentsystems.com.bd";

const Slide = ({ slide, isActive }) => {
  const backgroundImageUrl = `${BASE_URL}${slide.banner}`;

  return (
    <div
      className={`slide ${isActive ? "active" : "inactive"}`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className={`slide-content ${isActive ? "show" : ""}`}>
        <h2 className="slide-heading banner-heading">{slide.title}</h2>
        <p className="slide-description">{slide.details}</p>
        <Link to="/services" className="slide-button">
          <span>Learn More</span>
          <lord-icon
            src="https://cdn.lordicon.com/vduvxizq.json"
            trigger="loop"
            delay="2000"
            colors="primary:#ffffff"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </Link>
      </div>
    </div>
  );
};

export default AnimatedSlider;
