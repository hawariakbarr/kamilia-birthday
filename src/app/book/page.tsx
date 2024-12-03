"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from 'next/font/google';
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function BookPage() {
  return (
    <div className={cn(
      "min-h-screen bg-black text-white p-8 md:p-16 flex flex-col items-center justify-center",
      playfair.className
    )}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">📚 Book in Progress</h1>
        <p className="text-xl md:text-2xl text-gray-400">
          Our story is still being written...
        </p>
        <div className="mt-8 space-y-2 text-gray-500">
          <p>Chapter 1: The Unseen Threads of Fate</p>
          <p>Chapter 2: A Digital Reconnection</p>
          <p>Chapter 3: Building a Foundation</p>
          <p>Chapter 4: Challenges Along the Way</p>
          <p>Chapter 5: Embracing Change and Growth</p>
          <p>Chapter 6: The Power of Serendipity</p>
        </div>
        <p className="text-sm text-gray-600 mt-12 italic">
          Coming soon...
        </p>
      </motion.div>
    </div>
  );
} 