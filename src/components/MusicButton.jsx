import React, { useState, useRef, useEffect } from 'react';
import './MusicButton.css';

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create and configure audio
    const audio = new Audio('/audio/romantic-music.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // AGGRESSIVE AUTO-PLAY STRATEGY
    const playMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        console.log('✅ Music started!');
      } catch (err) {
        console.log('❌ Autoplay blocked:', err.message);
      }
    };

    // Try 1: Play immediately
    playMusic();

    // Try 2: Play on page visibility
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !isPlaying) {
        playMusic();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Try 3: Play on ANY interaction
    const events = ['click', 'touchstart', 'touchend', 'mousedown', 'keydown', 'scroll'];
    const playOnInteraction = () => {
      if (!isPlaying) {
        playMusic();
      }
    };

    events.forEach(event => {
      document.addEventListener(event, playOnInteraction, { once: true });
    });

    // Try 4: Listen for custom event
    const handleForcePlay = () => playMusic();
    window.addEventListener('forcePlayMusic', handleForcePlay);

    // Try 5: Interval check (every 2 seconds for first 30 seconds)
    let attempts = 0;
    const intervalId = setInterval(() => {
      attempts++;
      if (!isPlaying && attempts < 15) {
        playMusic();
      } else {
        clearInterval(intervalId);
      }
    }, 2000);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('forcePlayMusic', handleForcePlay);
      events.forEach(event => {
        document.removeEventListener(event, playOnInteraction);
      });
      clearInterval(intervalId);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Update playing state when audio actually plays
  useEffect(() => {
    if (!audioRef.current) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audioRef.current.addEventListener('play', handlePlay);
    audioRef.current.addEventListener('pause', handlePause);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('play', handlePlay);
        audioRef.current.removeEventListener('pause', handlePause);
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.log('Toggle failed:', err);
    }
  };

  return (
    <button
      className={`music-button ${isPlaying ? 'playing' : ''}`}
      onClick={toggleMusic}
      aria-label="Toggle music"
      title={isPlaying ? 'Music Playing - Click to Pause' : 'Music Paused - Click to Play'}
    >
      {isPlaying ? '🎵' : '🔇'}
    </button>
  );
};

export default MusicButton;