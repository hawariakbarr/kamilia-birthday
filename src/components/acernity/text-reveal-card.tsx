"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { useHasMounted } from "@/hooks/use-has-mounted";

const flirtyMessages = [
  {
    title: "Are you a magician? ✨",
    text: "Because whenever I look at you...",
    revealText: "Everyone else disappears",
    description: "Smooth like butter, cheesy like pizza."
  },
  {
    title: "Breaking News 📰", 
    text: "You must be tired today...",
    revealText: "Because you've been running through my mind all day",
    description: "Side effects may include excessive eye rolling."
  },
  {
    title: "Quick Question 🤔",
    text: "Do you have a map?",
    revealText: "I keep getting lost in your eyes",
    description: "Warning: May cause spontaneous smiling."
  },
  {
    title: "Fun Fact 🌟",
    text: "My doctor says I'm lacking vitamin U",
    revealText: "Would you help me fix that?",
    description: "Scientifically proven to work 60% of the time, every time."
  },
  {
    title: "Excuse Me ☕️",
    text: "Is your name Google?", 
    revealText: "Because you've got everything I've been searching for",
    description: "Results may vary, but satisfaction guaranteed."
  }
];

export function TextRevealCardPreview() {
  const hasMounted = useHasMounted();
  const [message, setMessage] = React.useState(flirtyMessages[0]);

  React.useEffect(() => {
    setMessage(flirtyMessages[Math.floor(Math.random() * flirtyMessages.length)]);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="flex items-center justify-center rounded-2xl w-full">
      <TextRevealCard
        text={message.text}
        revealText={message.revealText}
        className="bg-[#1c1c1c] border-neutral-800"
      >
        <TextRevealCardTitle className="text-3xl md:text-4xl font-bold tracking-wide text-neutral-100">
          {message.title}
        </TextRevealCardTitle>
        <TextRevealCardDescription className="text-base md:text-lg text-neutral-400 mt-2">
          {message.description}
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
