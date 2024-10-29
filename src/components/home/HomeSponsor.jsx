import React, { useEffect, useRef } from "react";
import Loader from "../../loader/Loader";
import useGet from "../../customhooks/useGet";

const HomeSponsor = () => {
  const { data: sponsors, isLoading, error } = useGet("sponsors");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section className="sponsors">
        <div data-aos="fade-up" data-aos-duration="1000" className="container">
          <div className="sponsor-logos">
            {sponsors?.map((sponsor) => (
              <div className="logos-slide" key={sponsor._id}>
                <img
                  src={`https://apiserver.intelligentsystems.com.bd/${sponsor.banner}`}
                  alt={sponsor.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSponsor;
