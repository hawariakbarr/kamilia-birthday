"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[15rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Agus",
    designation: "Best Friend",
    content: (
      <p>
        <Highlight>Happy Birthday</Highlight> Kamilia! Wishing you all the best on your special day 🎉
      </p>
    ),
    image: "/assets/agus.jpg"
  },
  {
    id: 1,
    name: "Bella",
    designation: "Best Friend",
    content: (
      <p>
        May your day be filled with <Highlight>joy and laughter</Highlight>. Happy Birthday! 🎂
      </p>
    ),
    image: "/assets/bella.jpg"
  },
  {
    id: 2,
    name: "Dita",
    designation: "Best Friend",
    content: (
      <p>
        Sending you the warmest <Highlight>birthday wishes</Highlight> on your special day! 🎈
      </p>
    ),
    image: "/assets/dita.jpg"
  },
  {
    id: 3,
    name: "Prama",
    designation: "Best Friend",
    content: (
      <p>
        Here's to another year of <Highlight>amazing memories</Highlight> together! Happy Birthday! 🎊
      </p>
    ),
    image: "/assets/prama.jpg"
  }
];
