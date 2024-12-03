"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();

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
        }
      } catch (error) {
        console.log("Auto-play prevented:", error);
      }
    };

    playAudio();
  }, [pathname]); // Re-run when pathname changes

  return (
    <audio
      ref={audioRef}
      src={audioSrc}
      loop
      preload="auto"
      className="hidden"
    />
  );
} 