import React, { useEffect, useState } from 'react';
import './FloatingHearts.css';

const FloatingHearts = ({ hideInCenter = false }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartShapes = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    const newHearts = Array.from({ length: 15 }, (_, i) => {
      let left = Math.random() * 100;
      
      // If hideInCenter is true, avoid the center area (35% to 65%)
      if (hideInCenter) {
        if (left > 35 && left < 65) {
          left = left < 50 ? Math.random() * 30 : 70 + Math.random() * 30;
        }
      }
      
      return {
        id: i,
        shape: heartShapes[Math.floor(Math.random() * heartShapes.length)],
        left: left,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        size: 0.8 + Math.random() * 1.2,
      };
    });
    setHearts(newHearts);
  }, [hideInCenter]);

  return (
    <div className={`floating-hearts-container ${hideInCenter ? 'avoid-center' : ''}`}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}rem`,
          }}
        >
          {heart.shape}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;