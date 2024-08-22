import React, { useState, useEffect } from "react";
import "./AnimatedSlider.css";
import { Link } from "react-router-dom";

// Sample slider images and texts
const sliderData = [
  {
    image: "/images/1.jpg",
    heading: "Innovative Cloud Solutions",
    description:
      "Transform your business with cutting-edge cloud technology. Our scalable solutions offer seamless integration, enhanced security, and the flexibility to adapt to your growing needs. Experience the future of cloud computing today.",
  },
  {
    image: "/images/2.jpg",
    heading: "Next-Gen AI Development",
    description:
      "Unlock the power of artificial intelligence with our advanced AI solutions. From machine learning to natural language processing, our expertise in AI technologies helps you gain valuable insights and drive innovation in your industry.",
  },
  {
    image: "/images/3.jpg",
    heading: "Robust Cybersecurity Services",
    description:
      "Protect your digital assets with our comprehensive cybersecurity services. We provide state-of-the-art solutions to safeguard your business from cyber threats, ensuring your data remains secure and your operations run smoothly.",
  },
];

// Adjust this value to extend slide duration
const AUTO_SLIDE_INTERVAL = 5000;

const AnimatedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  useEffect(() => {
    // Set up auto-slide interval
    const intervalId = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      <div className="slides-wrapper">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${
              index === currentIndex ? "active" : "inactive"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className={`slide-content ${
                index === currentIndex ? "show" : ""
              }`}
            >
              <h2 className="slide-heading banner-heading">{slide.heading}</h2>
              <p className="slide-description">{slide.description}</p>
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

export default AnimatedSlider;
