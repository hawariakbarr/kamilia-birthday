"use client";

import { motion } from "framer-motion";
import { Inter } from 'next/font/google';
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export function Message() {
  return (
    <div className={cn(
      "min-h-screen bg-black text-white p-8 md:p-16 flex flex-col items-center justify-center",
      inter.className
    )}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 max-w-3xl"
      >
        <div className="text-left space-y-6 text-gray-200">
          <p className="text-xl">Hai, Kamilia.</p>
          
          <p>Selamat pagi untuk kamu yg ke 27 tahun (versi kalender Masehi), semoga selalu sehat dan berbahagia di hidup dan mimpi tidurnya pagi ini.</p>
          
          <p>Kita mulai dengan beberapa fun fact ya:</p>
          
          <div className="space-y-4 pl-4">
            <p>1. Seseorang yang lahir pada 1 Desember 1997 (Masehi) lahir pada sekitar 1 Sya'ban 1418 (Hijriah) dan dari 1418 ke 1446 adalah 28 tahun 😇</p>
            
            <p>2. ternyata tanggal 1 Desember itu diperingati sebagai Hari AIDS Sedunia. Jadi, selain ulang tahunmu, dunia juga memperingati kamu buat lebih peduli sama kesehatan 😇 😇 😇 😇</p>
            
            <p>3. Nama Kamilia itu berasal dari bunga camellia, yang katanya melambangkan kekaguman dan kesempurnaan, dan itu adalah aku, tiap hari melihat dan memandang wajah kamu.</p>
          </div>
          
          <div className="space-y-4">
            <p>Mil, siapa yang menyangka bahwa momentum kamu dilahirkan, akhirnya menjadi bagian paling penting di hidup aku. 1 Desember yang sebelumnya hanya sebuah tanggal dan angka yg biasa biasa aja (bgt), sebuah tanggal dan angka yg kalo di kalender tuh dia selalu kosong, gapernah ada reminder sebuah event ataupun alarm yg bisa muncul di notifikasi aku selama ini.</p>
            
            <p>Sekarang dan kedepannya, 1 Desember aku bakal cuti mil, 1 Desember aku jadiin hari libur nasional (versi aku) karena 24 jam sepanjang hari, aku akan menyediakan waktu aku sepenuhnya untuk kamu, tanpa terkecuali.</p>
          </div>
          
          <p className="text-gray-400 italic mb-8">Menurutku ya mil, aku, bumi dan seisinya itu perlu bersyukur karena momen hari ini adalah momen di mana dunia diberkahi dengan kehadiran kamu, utamanya adalah aku.</p>
          <p>Jadi kamilia sayang, terima kasih ya karena sampai hari ini kamu gapernah menyerah dan tetap bertahan untuk hidup dengan amat sangat baik; terima kasih karena sudah bisa melewati semua kesulitan hidup kamu selama ini; Terima kasih karena sudah menjadi versi terbaik kamu hingga hari ini dan memperkenankan diri bertemu dengan aku;</p>
          
          <p className="text-xl font-semibold text-center pt-4">Selamat ulang tahun Kamilia sayang, I Love You.</p>
        </div>
      </motion.div>
    </div>
  );
} 