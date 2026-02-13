import React, { useState, useEffect } from 'react';
import './VideoQuestion.css';

const VideoQuestion = ({ onYes }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonSize, setNoButtonSize] = useState(1);

  const mediaSteps = [
    {
      type: 'gif',
      src: '/videos/step1.gif',
      text: 'I have something to ask you... 🥺',
      showQuestion: false
    },
    {
      type: 'video',
      src: '/videos/step2.mp4',
      text: 'You make me so happy... 💕',
      showQuestion: false
    },
    {
      type: 'video',
      src: '/videos/step3.mp4',
      text: 'Every day with you feels like magic ✨',
      showQuestion: false
    },
    {
      type: 'video',
      src: '/videos/step4.mp4',
      text: 'You mean everything to me... 💖',
      showQuestion: false
    },
    {
      type: 'video',
      src: '/videos/step5.mp4',
      text: "I'm really in love with you…\nWill you be my Valentine? 💝",
      showQuestion: true
    }
  ];

  useEffect(() => {
    setYesButtonSize(1 + currentStep * 0.3);
    setNoButtonSize(Math.max(0.4, 1 - currentStep * 0.2));
  }, [currentStep]);

  const handleNo = () => {
    if (currentStep < mediaSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const currentMedia = mediaSteps[currentStep];
  const showNoButton = currentStep < mediaSteps.length - 1 && noButtonSize > 0.5;
  const isLastStep = currentStep === mediaSteps.length - 1;

  return (
    <section className="section video-section">
      <div className="video-container">
        <div className="media-wrapper">
          {currentMedia.type === 'gif' ? (
            <img
              src={currentMedia.src}
              alt="Cute animation"
              className="media-content"
              onError={(e) => {
                e.target.style.display = 'none';
                console.log('GIF failed to load');
              }}
            />
          ) : (
            <video
              key={currentMedia.src}
              autoPlay
              loop
              muted
              playsInline
              className="media-content"
              onError={(e) => {
                e.target.style.display = 'none';
                console.log('Video failed to load');
              }}
            >
              <source src={currentMedia.src} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="question-content">
          <h2 className="question-text">{currentMedia.text}</h2>

          {/* Show buttons only on the last step when the actual question is asked */}
          {isLastStep && (
            <div className="buttons-container">
              <button
                className="button button-yes"
                onClick={onYes}
                style={{
                  transform: `scale(${yesButtonSize})`,
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                YES! 💖
              </button>

              {showNoButton && (
                <button
                  className="button button-no"
                  onClick={handleNo}
                  style={{
                    transform: `scale(${noButtonSize})`,
                    transition: 'all 0.5s ease',
                    opacity: noButtonSize
                  }}
                >
                  No...
                </button>
              )}
            </div>
          )}

          {/* Show continue button for all steps except the last */}
          {!isLastStep && (
            <button
              className="button button-continue-video"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Continue ✨
            </button>
          )}

          <div className="step-indicator">
            {mediaSteps.map((_, index) => (
              <div
                key={index}
                className={`step-dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoQuestion;