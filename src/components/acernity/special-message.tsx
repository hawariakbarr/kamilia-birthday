"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export function SpecialMessage() {
  const paragraphs = [
    "apa sih makna hidup mila buat orang lain terutama buat kamu?",
    "i've spent so long trying to understand what love truly means, only to discover it through you. i never thought being loved like this was possible until you came. you never fail to amaze me with how much love i can receive for the person who i was and who i am.",
    "it seems like you don't realize that you have given light and brought life to the people around you (including and especially me), by creating warmth yourself. your love is warm and unconditional, like I know tomorrow your love will be there and is still there every day. and i'm so grateful for that.",
    "you know how much I hate living in this cruel world. but, you need to know something. i forgive the world because of your existance is a blessing that came from love and patience choosing to stay. i forgive the world, not because it is kind, but because in its imperfections, it created you, an extraordinary soul who makes universe feel softer, brighter and more bearable. i forgive the world, because it has you in it.",
    "waktu itu aku pernah bilang kalau ketika aku baca loveless, aku makin sadar kalau friendship is all i have. but maybe i found my rooney's in you. dan ketakutanku kembali muncul ketika membaca hopeless aromantic. you know how much i pour love and affection to my friends because i dont think i can be this person right now if i dont have them (especially you). tapi aku juga tahu kalau part of being an adult is to learn that not all things have reciprocity. including adult friendship. to be honest, i was still afraid of losing you when you said you wanted to get married.",
    "aku gak yakin gimana wujud masa depan. satu hal yang pasti, no matter where life takes us, i'll cary you with me. i'll love you not because i have to, but i can't imagine not loving you.",
    "ini sebenernya muter-muter dan aku gak yakin aku menjawab pertanyaan di awal. because the truth is i still dont think i can describe it properly. because you are my home. you make me feel safe. you make me feel loved. intinya, aku tau seberapapun jahatnya dunia, aku akan baik-baik aja karena aku punya kamu sebagai sahabatku.",
    "-Nesha Surya-"
  ];

  return (
    <div className={cn(
      "min-h-screen bg-black text-white p-8 md:p-16 flex flex-col items-center justify-center",
      inter.className
    )}>
      <div className="max-w-2xl mx-auto space-y-8">
        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={cn(
              "text-lg leading-relaxed tracking-wide",
              index === 0 && "text-gray-400 italic text-2xl",
              index === 3 && "text-gray-400 italic mb-8",
              index === paragraphs.length - 1 && "text-right text-gray-400 italic mt-12"
            )}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
} 