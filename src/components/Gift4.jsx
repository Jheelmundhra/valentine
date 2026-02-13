import React, { useState } from 'react';
import './Gift4.css';

const Gift4 = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const handleOpenEnvelope = () => {
    setShowLetter(true);
  };

  const handleYes = () => {
    setYesClicked(true);
  };

  const handleNoHover = () => {
    const min = 100;
    const max = 200;
    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    setNoButtonPos({ x: moveX, y: moveY });
  };

  const handleClose = () => {
    setIsOpened(false);
    setShowLetter(false);
    setYesClicked(false);
    setNoButtonPos({ x: 0, y: 0 });
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
              <div className="seal-stamp">🐱</div>
            </div>
          </div>
          <p className="gift-label">Gift 4</p>
        </div>
      ) : (
        <div className="gift-modal gift4-modal">
          <button className="close-btn-gift4" onClick={handleClose}>✕</button>
          
          <div className="valentine-game-container">
            {!showLetter ? (
              <div className="envelope-screen" onClick={handleOpenEnvelope}>
                <img src="/envelope.png" alt="Envelope" className="envelope-img" />
                <p className="envelope-text">♡ Letter for You ♡</p>
              </div>
            ) : (
              <div className="letter-window">
                {!yesClicked ? (
                  <>
                    <h1 className="letter-title">Will you be my Valentine?</h1>
                    <img src="/cat_heart.gif" alt="Cat with heart" className="cat-gif" />
                    <div className="valentine-buttons">
                      <img 
                        src="/yes.png" 
                        alt="Yes" 
                        className="btn-yes" 
                        onClick={handleYes}
                      />
                      <img 
                        src="/no.png" 
                        alt="No" 
                        className="btn-no"
                        onMouseEnter={handleNoHover}
                        onClick={handleNoHover}
                        style={{
                          transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="letter-title celebration">Yippeeee!</h1>
                    <img src="/cat_dance.gif" alt="Dancing cat" className="cat-gif dancing" />
                    <p className="final-message">
                      <strong>I LOVE YOU DUDU 💕</strong><br />
                      Grateful that you are my valentine !<br />
                    
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gift4;