"use client";

import { motion } from "framer-motion";
import { Inter } from 'next/font/google';
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export function UntukIbu() {
  const paragraphs = [
    "Hai Ibu, sehat sehat yaa, semoga cepet sembuh dari sakitnya aamiin;",
    "Hawari mau sedikit menyampaikan beberapa hal berkaitan dengan momen hari kelahiran Mila 1 Desember kemarin, salah satunya adalah ucapan terima kasih.",
    "Seringkali, hari ulang tahun atau hari kelahiran itu dirayakan dan disyukuri hanya untuk mereka yang lahir dan dilahirkan, tapi banyak yang lupa atau bahkan hampir semua orang ga menyadari kalo sebetulnya sebagai anak yang dilahirkan kita belum punya kemampuan untuk mengingat apapun, sama sekali.",
    "Justru, seorang ibu yang bertaruh dengan nyawanya selama kurang lebih 9 bulan, berusaha untuk hidup dan matinya, berjuang untuk anaknya bisa lahir dengan sehat dan baik, berjuang untuk Mila bisa hidup dan hadir di dunia ini.",
    "Maka dari itu, hawari mau bilang terima kasih banyak untuk perjuangannya pada saat itu, dan sampai hari ini; Terima kasih karena sudah berhasil membesarkan Mila menjadi perempuan yang sebegitu baik hatinya, menjadi perempuan yang solehah dan selalu rendah hati, menjadi perempuan yang menyenangkan dan yang paling utama menjadi anak yang sangat sayang sama ibu, keluarga dan suadaranya.",
    "Ga lupa juga ucapan terima kasih karena ibu, ayah dan semuanya sudah amat sangat baik menerima hawari, terima kasih karena sudah memperkenankan hawari untuk bisa bareng sama Mila sampai saat ini dan kedepannya;",
    "Selamat hari lahir untuk Mila, dan juga Ibu yang ke 27 tahun ❤️"
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
              index === 0 && "text-xl font-semibold",
              index === 3 && "text-gray-400 italic mb-8",
              index === paragraphs.length - 1 && "text-xl font-semibold text-center pt-4"
            )}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
} 