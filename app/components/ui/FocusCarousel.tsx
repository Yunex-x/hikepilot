"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";

type CarouselItem = {
  [key: string]: any;
};

type Props = {
  items: CarouselItem[];
  renderItem: (item: CarouselItem, active: boolean) => ReactNode;
};

export default function FocusCarousel({ items, renderItem }: Props) {
  const [current, setCurrent] = useState(0);

  const CARD_WIDTH = 420;
  const GAP = 40; // gap بين cards

  const next = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  // loop data
  const loopedItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden">
      {/* Track */}
      <div className="overflow-hidden px-4">
        <motion.div
          animate={{
            x: -(current * (CARD_WIDTH + GAP)),
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
          className="flex"
          style={{
            gap: `${GAP}px`,
          }}
        >
          {loopedItems.map((item, index) => (
            <div key={index} className="shrink-0">
              {renderItem(item, index % items.length === current)}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-5">
        <button
          onClick={prev}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl"
        >
          <ChevronLeft className="h-6 w-6 text-[#191717]" />
        </button>

        <button
          onClick={next}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl"
        >
          <ChevronRight className="h-6 w-6 text-[#191717]" />
        </button>
      </div>
    </div>
  );
}