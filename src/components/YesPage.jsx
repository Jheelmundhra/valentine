import React, { useEffect, useState } from 'react';
import './YesPage.css';

const YesPage = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const shapes = ['❤️', '💕', '💖', '💗', '💓', '💝', '🌸', '✨', '🦋', '🌹'];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
      size: 0.8 + Math.random() * 1.5,
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <section className="section yes-page">
      <div className="confetti-container">
        {confetti.map((item) => (
          <div
            key={item.id}
            className="confetti-piece"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
              fontSize: `${item.size}rem`,
            }}
          >
            {item.shape}
          </div>
        ))}
      </div>

      <div className="yes-content">
        <div className="celebration-card glass-card">
          <h1 className="celebration-title">
            You said YES! 💖
          </h1>
          <div className="celebration-message">
            <p className="celebration-text">
              It's you. Always you.
            </p>
            <p className="celebration-text">
              Happy Valentine's Day, Devansh
            </p>
            <div className="final-heart">
              💝
            </div>
          </div>
          <p className="celebration-subtitle">
            You've made me the happiest person alive ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default YesPage;