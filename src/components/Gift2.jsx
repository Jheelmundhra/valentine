import React, { useState } from 'react';
import './Gift2.css';

const Gift2 = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const loveQuestions = [
    {
      question: "What's the most romantic thing we can do together?",
      options: [
        "Watch the sunset hand in hand",
        "Dance in the rain",
        "Stargazing on a rooftop",
        "Cook a meal together"
      ],
      romantic: 0
    },
    {
      question: "If I could give you anything, what would make you happiest?",
      options: [
        "A handwritten love letter",
        "A surprise date night",
        "Your favorite flowers",
        "A song written just for you"
      ],
      romantic: 1
    },
    {
      question: "What makes our love special?",
      options: [
        "We understand each other without words",
        "We laugh at the silliest things together",
        "We support each other's dreams",
        "All of the above ❤️"
      ],
      romantic: 3
    },
    {
      question: "How do you want me to say 'I love you'?",
      options: [
        "With a warm hug",
        "Through a sweet text",
        "While looking into your eyes",
        "Every single day"
      ],
      romantic: 3
    },
    {
      question: "What's your favorite thing about us?",
      options: [
        "How comfortable we are together",
        "Our inside jokes",
        "How safe I feel with you",
        "Everything about you 💕"
      ],
      romantic: 3
    }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === loveQuestions[currentQuestion].romantic) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < loveQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleClose = () => {
    setIsOpened(false);
    resetGame();
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
              <div className="seal-stamp">🎮</div>
            </div>
          </div>
          <p className="gift-label">Gift 2</p>
        </div>
      ) : (
        <div className="gift-modal" onClick={handleClose}>
          <div className="gift-modal-content love-quiz-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>✕</button>
            
            {!showResult ? (
              <div className="quiz-container">
                <div className="quiz-header">
                  <h2 className="quiz-title">💕 Love Quiz 💕</h2>
                  <div className="quiz-progress">
                    Question {currentQuestion + 1} of {loveQuestions.length}
                  </div>
                </div>

                <div className="question-card">
                  <h3 className="question-text">{loveQuestions[currentQuestion].question}</h3>
                  
                  <div className="options-grid">
                    {loveQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        className={`option-btn ${
                          selectedAnswer === index ? 'selected' : ''
                        }`}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hearts-decoration">
  {['💕','💖','💗','💓','💝'].map((heart, i) => (
    <span
      key={i}
      className="floating-quiz-heart"
      style={{ animationDelay: `${i * 0.2}s` }}
    >
      {heart}
    </span>
  ))}
</div>

              </div>
            ) : (
              <div className="quiz-result">
                <h2 className="result-title">Quiz Complete! 🎉</h2>
                <div className="result-score">
                  <span className="score-number">{score}</span>
                  <span className="score-total">/ {loveQuestions.length}</span>
                </div>
                <p className="result-message">
                  {score === loveQuestions.length 
                    ? "Perfect! You know exactly what makes our love special! 💖"
                    : score >= 3
                    ? "Amazing! Our hearts are truly connected! 💕"
                    : "Every answer is perfect because it's from you! 💗"}
                </p>
                <p className="result-love-note">
                  No matter the score, you're always 100% perfect to me! ✨
                </p>
                <button className="play-again-btn" onClick={resetGame}>
                  Play Again 💕
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gift2;