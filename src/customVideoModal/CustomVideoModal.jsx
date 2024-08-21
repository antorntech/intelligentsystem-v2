import React from "react";
import "./CustomVideoModal.css";

const CustomVideoModal = ({ isOpen, onClose, video }) => {
  if (!isOpen) return null;
  return (
    <div className="video-modal">
      <button onClick={onClose} className="close-button">
        <lord-icon
          src="https://cdn.lordicon.com/nqtddedc.json"
          trigger="hover"
          colors="primary:#ffffff"
        ></lord-icon>
      </button>
      <div className="modal-content">
        <iframe
          className="video-frame"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CustomVideoModal;
