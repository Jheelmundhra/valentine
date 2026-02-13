import React from 'react';
import './Hero.css';

const Hero = ({ onContinue }) => {
  return (
    <section className="section hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hey Devansh…
          </h1>
          <p className="hero-subtitle">
            I made something special for you 🤍
          </p>
        </div>
        <button className="button button-continue" onClick={onContinue}>
          Open Your Heart
        </button>
      </div>
      <div className="sparkles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="sparkle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}>✨</div>
        ))}
      </div>
    </section>
  );
};

export default Hero;