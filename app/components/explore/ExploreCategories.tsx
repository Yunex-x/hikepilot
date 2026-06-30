"use client";

import {
  ChevronLeft,
  ChevronRight,
  Tent,
  Bike,
  Trees,
  ShipWheel,
  Mountain,
  Binoculars,
  Map,
  Landmark,
  Footprints,
  PawPrint,
} from "lucide-react";

const categories = [
  { name: "Safari", icon: Binoculars },
  { name: "Trekking", icon: Footprints },
  { name: "Tours", icon: Map },
  { name: "Climbing", icon: Mountain },
  { name: "Cultural", icon: Landmark },
  { name: "Camping", icon: Tent },
  { name: "Kayaking", icon: ShipWheel },
  { name: "Wildlife", icon: PawPrint },
  { name: "Cycling", icon: Bike },
  { name: "Nature", icon: Trees },
];

export default function ExploreCategories() {
  return (
    <section className="px-8 pt-8">
      <div className="mx-auto flex max-w-[1800px] items-center gap-4">
        {/* Left Arrow */}
        <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/70 shadow-[0px_21px_28px_rgba(0,0,0,0.06),inset_0px_-3px_4px_#FFFFFF,inset_-2px_1px_15px_rgba(0,0,0,0.07)] backdrop-blur-xl">
          <ChevronLeft className="h-5 w-5 text-black/70" />
        </button>

        {/* Categories */}
        <div className="flex flex-1 gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <button
                key={index}
                className="flex h-14 shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/70 px-6 shadow-[0px_21px_28px_rgba(0,0,0,0.06),inset_0px_-3px_4px_#FFFFFF,inset_-2px_1px_15px_rgba(0,0,0,0.07)] backdrop-blur-xl transition hover:scale-[1.02]"
              >
                <Icon className="h-5 w-5 text-black/40" />
                <span className="text-[18px] font-medium tracking-[0.02em] text-black/60">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/70 shadow-[0px_21px_28px_rgba(0,0,0,0.06),inset_0px_-3px_4px_#FFFFFF,inset_-2px_1px_15px_rgba(0,0,0,0.07)] backdrop-blur-xl">
          <ChevronRight className="h-5 w-5 text-black/70" />
        </button>
      </div>
    </section>
  );
}