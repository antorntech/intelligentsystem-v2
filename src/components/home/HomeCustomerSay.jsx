import React from "react";

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
  return (
    <section className="customer-say">
      <div className="container">
        <div className="home-customer-say">
          <div className="home-customer-say-content">
            <div className="home-customer-say-title">
              <p>Testimonials</p>
              <h1>Our Customer Say</h1>
            </div>
            <div className="home-customer-say-reviews">
              {reviews.map((review) => (
                <div className="home-customer-say-review" key={review.id}>
                  <div className="home-customer-say-review-image">
                    <img src={review.image} alt={review.name} />
                  </div>
                  <div className="home-customer-say-review-content">
                    <p>{review.description}</p>
                    <h3>{review.name}</h3>
                    <h4>{review.designation}</h4>
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

export default HomeCustomerSay;
