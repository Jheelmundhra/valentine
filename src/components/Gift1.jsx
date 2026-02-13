import React, { useState } from 'react';
import TypingText from './TypingText';
import './Gift1.css';

const Gift1 = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  const letterText = `Dear Devansh,

I don't know when it happened, but somewhere between your smile and your voice, I fell. 

You make my days softer and my heart calmer. Every moment with you feels like coming home.

I'm really, really in love with you.

With all my heart ♡`;

  const handleOpenGift = () => {
    setIsOpened(true);
    setTimeout(() => {
      setShowContent(true);
    }, 800);
  };

  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  const handleClose = () => {
    setIsOpened(false);
    setShowContent(false);
    setTypingComplete(false);
  };

  return (
    <>
      {!isOpened ? (
        <div className="gift-scroll-item" onClick={handleOpenGift}>
          <div className="scroll-paper">
            <div className="scroll-rod left-rod"></div>
            <div className="scroll-rod right-rod"></div>
            <div className="paper-roll"></div>
            <div className="wax-seal">
              <div className="seal-stamp">💌</div>
            </div>
          </div>
          <p className="gift-label">Gift 1</p>
        </div>
      ) : (
        <div className="gift-modal" onClick={handleClose}>
          <div className="gift-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>✕</button>
            <div className={`unrolled-scroll ${showContent ? 'show' : ''}`}>
              <div className="scroll-content">
                {showContent && (
                  <div className="handwritten-text">
                    <TypingText 
                      text={letterText} 
                      speed={40} 
                      onComplete={handleTypingComplete}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gift1;