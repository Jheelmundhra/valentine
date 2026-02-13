import React, { useState } from "react";
import "./Gift3.css";

const Gift3 = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
  ];

  // ✅ 5 romantic lines (same order as photos)
  const lines = [
    "In every lifetime, I’d still choose you. ✨",
    "You’re my favorite place to rest my heart 🤍",
    "With you, even ordinary moments feel magical 🌸",
    "If loving you is a dream, I never want to wake up 💫",
    "You’re not just my love… you’re my forever 💕",
  ];

  const handleClose = () => {
    setIsOpened(false);
    setCurrentPhoto(0);
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      {!isOpened ? (
        <div className="gift-scroll-item" onClick={() => setIsOpened(true)}>
          <div className="scroll-paper">
            <div className="scroll-rod left-rod"></div>
            <div className="scroll-rod right-rod"></div>
            <div className="paper-roll"></div>
            <div className="wax-seal">
              <div className="seal-stamp">📸</div>
            </div>
          </div>
          <p className="gift-label">Gift 3</p>
        </div>
      ) : (
        <div className="gift-modal" onClick={handleClose}>
          <div
            className="gift-modal-content photo-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>

            <h2 className="photo-title">Our Beautiful Memories 💕</h2>

            <div className="photo-gallery">
              <button className="photo-nav prev" onClick={prevPhoto}>
                ‹
              </button>

              <div className="photo-frame">
                <img
                  src={photos[currentPhoto]}
                  alt={`Memory ${currentPhoto + 1}`}
                  className="gallery-photo"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/500x500?text=Add+Your+Photo";
                  }}
                />
                <p className="photo-counter">
                  {currentPhoto + 1} / {photos.length}
                </p>
              </div>

              <button className="photo-nav next" onClick={nextPhoto}>
                ›
              </button>
            </div>

            {/* ✅ line changes with next/prev */}
            <p className="photo-caption">{lines[currentPhoto]}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gift3;
