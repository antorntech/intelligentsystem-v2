import React, { useState, useEffect } from "react";
import CustomVideoModal from "../../customVideoModal/CustomVideoModal";
import useGet from "../../customhooks/useGet";
import Loader from "../../loader/Loader";

const HomeVideo = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch videos
  const { data: videos, isLoading, error } = useGet("promotions");

  // Define headings based on videos data
  const headings = [
    videos?.[0]?.titleOne,
    videos?.[0]?.titleTwo,
    videos?.[0]?.titleThree,
  ];

  // Setup interval for heading change
  useEffect(() => {
    if (headings.length === 0) return; // Guard against empty headings

    const intervalId = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
      const heading = document.querySelector(".heading");
      heading.classList.remove("fade-in-fwd");
      void heading.offsetWidth; // Trigger reflow
      heading.classList.add("fade-in-fwd");
    }, 5000); // Change heading every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [headings.length]); // Include dependencies

  // Function to handle video click
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Render loader or error messages
  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div
        className="home-video-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="overlay">
          <h1 className="heading">{headings[currentHeadingIndex]}</h1>
          <p className="subheading">{videos?.[0]?.subtitle}</p>
          <div
            className="music-icon"
            onClick={() => handleVideoClick(videos[0]?.videoLink)}
          >
            <lord-icon
              src="https://cdn.lordicon.com/aklfruoc.json"
              trigger="morph"
              state="morph-play-pause"
              colors="primary:#050828"
              style={{ width: "50px", height: "50px" }}
            />
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
