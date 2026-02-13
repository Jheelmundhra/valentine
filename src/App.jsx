import React, { useState } from 'react';
import Hero from './components/Hero';
import Gift1 from './components/Gift1';
import Gift2 from './components/Gift2';
import Gift3 from './components/Gift3';
import Gift4 from './components/Gift4';
import FloatingHearts from './components/FloatingHearts';
import MusicButton from './components/MusicButton';

function App() {
  const [currentStep, setCurrentStep] = useState('hero');

  const handleContinueFromHero = () => {
    setCurrentStep('gifts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hideHeartsInCenter = currentStep === 'gifts';

  return (
    <div className="app-container">
      <FloatingHearts hideInCenter={hideHeartsInCenter} />
      <MusicButton autoPlay={true} />
      
      {currentStep === 'hero' && <Hero onContinue={handleContinueFromHero} />}
      {currentStep === 'gifts' && (
        <section className="gifts-page">
          <h1 className="gifts-title">Choose Your Gift ❤️</h1>
          <div className="gifts-grid">
            <Gift1 />
            <Gift2 />
            <Gift3 />
            <Gift4 />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;