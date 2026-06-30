"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";

type CardCarouselProps<T> = {
  items: T[];
  cardWidth?: number;
  gap?: number;
  renderItem: (item: T, index: number) => ReactNode;
};

export default function CardCarousel<T>({
  items,
  renderItem,
  cardWidth = 360,
  gap = 24,
}: CardCarouselProps<T>) {
  const [current, setCurrent] = useState(0);

  const maxSlide = items.length - 1;
  const slideAmount = cardWidth + gap;

  const nextSlide = () => {
    if (current < maxSlide) setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  return (
    <div className="grid gap-10">
      {/* Track */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: `-${current * slideAmount}px` }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 24,
          }}
          drag="x"
          dragConstraints={{
            left: -(maxSlide * slideAmount),
            right: 0,
          }}
          className="flex"
          style={{ gap: `${gap}px` }}
        >
          {items.map((item, index) => renderItem(item, index))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-8">
        <button
          onClick={prevSlide}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-xl backdrop-blur-xl"
        >
          <ChevronLeft className="h-8 w-8 text-[#8A8A8A]" />
        </button>

        <button
          onClick={nextSlide}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-xl backdrop-blur-xl"
        >
          <ChevronRight className="h-8 w-8 text-[#191717]" />
        </button>

        {/* Progress */}
        <div className="h-[2px] w-full rounded-full bg-white/30">
          <motion.div
            animate={{
              width: `${((current + 1) / items.length) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
            className="h-full rounded-full bg-white"
          />
        </div>

        <span className="text-[88px] font-semibold text-white">
          {String(current + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}