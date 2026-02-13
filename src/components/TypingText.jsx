import React, { useState, useEffect } from 'react';
import './TypingText.css';

const TypingText = ({ text, speed = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <p className="typing-text">
      {displayedText}
      {currentIndex < text.length && <span className="cursor">|</span>}
    </p>
  );
};

export default TypingText;