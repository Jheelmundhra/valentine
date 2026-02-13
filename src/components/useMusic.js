import { useRef, useState } from "react";

export default function useMusic() {
  const audio = useRef(new Audio("/music.mp3"));
  const [playing, setPlaying] = useState(false);

  const startMusic = () => {
    audio.current.loop = true;
    audio.current.volume = 0.4;
    audio.current.play();
    setPlaying(true);
  };

  const toggleMusic = () => {
    playing ? audio.current.pause() : audio.current.play();
    setPlaying(!playing);
  };

  return { startMusic, toggleMusic, playing };
}
