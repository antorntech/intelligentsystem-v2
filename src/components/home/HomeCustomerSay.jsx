import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="next-arrow">
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="prev-arrow">
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
}

const HomeCustomerSay = () => {
  const reviews = [
    {
      id: 1,
      name: "Mr. Kamal",
      designation: "CEO",
      image: "/images/customer-logo/1.png",
      description:
        "“Marceline are always accommodating our diverse needs and we feel like they are a part of our Company rather than an external supplier”",
    },
    {
      id: 2,
      name: "Mrs. Rotna",
      designation: "CFO",
      image: "/images/customer-logo/2.png",
      description:
        "“Marceline are always accommodating our diverse needs and we feel like they are a part of our Company rather than an external supplier”",
    },
    {
      id: 3,
      name: "Mr. Jakir",
      designation: "CTO",
      image: "/images/customer-logo/3.png",
      description:
        "“Marceline are always accommodating our diverse needs and we feel like they are a part of our Company rather than an external supplier”",
    },
    {
      id: 4,
      name: "Mr. Jamil",
      designation: "CMO",
      image: "/images/customer-logo/4.png",
      description:
        "“Marceline are always accommodating our diverse needs and we feel like they are a part of our Company rather than an external supplier”",
    },
    {
      id: 5,
      name: "Mr. Mohon",
      designation: "COO",
      image: "/images/customer-logo/5.png",
      description:
        "“Marceline are always accommodating our diverse needs and we feel like they are a part of our Company rather than an external supplier”",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="customer-say">
      <div className="container">
        <div className="home-customer-say">
          <div className="home-customer-say-content">
            <div className="home-customer-say-title">
              <span>Testimonials</span>
              <h1>Our Customer Say</h1>
            </div>
            <Slider {...settings}>
              {reviews.map((review) => (
                <div className="home-customer-say-review" key={review.id}>
                  <div className="home-customer-say-review-box">
                    <div className="home-customer-say-review-image">
                      <img src={review.image} alt={review.name} />
                    </div>
                    <div className="home-customer-say-review-content">
                      <p>{review.description}</p>
                      <h3>{review.name}</h3>
                      <h4>{review.designation}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCustomerSay;
