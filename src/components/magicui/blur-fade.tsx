"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  blur?: number;
  duration?: number;
  delay?: number;
  inView?: boolean;
  inViewMargin?: string;
}

export const BlurFade = ({
  children,
  className,
  yOffset = 24,
  blur = 4,
  duration = 0.4,
  delay = 0,
  inView = true,
  inViewMargin = "-120px"
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as `${number}px` });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur}px)` },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      initial="hidden"
      variants={defaultVariants}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
};
