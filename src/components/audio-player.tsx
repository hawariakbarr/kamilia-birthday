"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);

  // Determine which audio file to use based on the current path
  const audioSrc = pathname === "/" 
    ? "/assets/Mila.mp3" 
    : "/assets/turning-page.mp3";

  useEffect(() => {
    // Try to play audio when component mounts or when path changes
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Auto-play prevented:", error);
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [pathname]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Playback error:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        className="hidden"
      />
      <button
        onClick={togglePlay}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
      >
        {isPlaying ? (
          <span className="text-2xl">🎵</span>
        ) : (
          <span className="text-2xl">🔇</span>
        )}
      </button>
    </>
  );
} 