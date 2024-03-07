"use client";
import { useRef, useState } from "react";

// const tracks = [
//   {
//     url: "audioI_Feel.mp3",
//     title: "I Feel",
//   },
//   {
//     url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
//     title: "Madza - Late Night Drive",
//   },
//   {
//     url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
//     title: "Madza - Persistence",
//   },
// ];

export default function Player1() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };
  return (
    <div className="flex justify-evenly gap-10 font-aldrich">
      <button
        className={
          isPlaying
            ? "neon"
            : "text-white tracking-widest hover:text-purple-300"
        }
        onClick={handlePlay}
      >
        PLAY
      </button>
      <button
        className={
          !isPlaying
            ? "neon"
            : "text-white tracking-widest hover:text-purple-300"
        }
        onClick={handlePause}
      >
        PAUSE
      </button>
      <button
        className="text-white tracking-widest hover:text-purple-300"
        onClick={handleStop}
      >
        STOP
      </button>
      <audio ref={audioRef} src="\audio\Walkman.mp3" type="audio/mpeg"></audio>
    </div>
  );
}
