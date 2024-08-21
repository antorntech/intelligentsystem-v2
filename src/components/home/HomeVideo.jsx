import React, { useState, useEffect } from "react";
import CustomVideoModal from "../../customVideoModal/CustomVideoModal";

const HomeVideo = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  const headings = [
    "Welcome to Our Site",
    "Explore the Future",
    "Innovate with Us",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
      const heading = document.querySelector(".heading");
      heading.classList.remove("fade-in-fwd"); // Remove the class to reset the animation
      void heading.offsetWidth; // Trigger reflow to restart the animation
      heading.classList.add("fade-in-fwd");
    }, 5000); // Change heading every 1.5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <div
        className="home-video-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="overlay">
          <h1 className="heading">{headings[currentHeadingIndex]}</h1>
          <p className="subheading">Discover the possibilities</p>
          <div
            className="music-icon"
            onClick={() =>
              handleVideoClick(
                "https://www.youtube.com/embed/6nDmtt1I4TY?si=5G33XYfdJxHeGbQk"
              )
            }
          >
            <lord-icon
              src="https://cdn.lordicon.com/aklfruoc.json"
              trigger="morph"
              state="morph-play-pause"
              colors="primary:#050828"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </div>
        </div>
      </div>
      <CustomVideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        video={selectedVideo}
      />
    </>
  );
};

export default HomeVideo;
