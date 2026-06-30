"use client";

import { MapPin } from "lucide-react";
import CardCarousel from "../../components/ui/CardCarousel";

const destinations = [
  {
    title: "Volcanoes National Park",
    location: "Tanzania",
    image: "/destination-1.svg",
  },
  {
    title: "Volcanoes National Park",
    location: "Tanzania",
    image: "/destination-2.png",
  },
  {
    title: "Volcanoes National Park",
    location: "Tanzania",
    image: "/destination-3.png",
  },
];

export default function PopularDestinationsSection() {
  return (
    <section
      className="grid gap-20 bg-cover bg-bottom px-6 py-28"
      style={{
        backgroundImage:
          " url('/popular.svg')",
      }}
    >
      {/* Header */}
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="text-[clamp(3rem,6vw,6rem)] font-semibold tracking-[-0.04em] text-[#191717]">
          Where Will You Go Next
        </h2>

        <p className="mt-6 text-[clamp(1rem,2vw,2rem)] leading-relaxed text-[#191717]/60">
          Discover amazing places, read real reviews, and start building your
          perfect trip
        </p>
      </div>

      {/* Main Grid */}
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-14 lg:grid-cols-[0.9fr_1.4fr]">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[clamp(4rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            <span className="text-[#191717]">Popular</span>
            <br />
            <span className="text-[#3B7D4E]">Destination</span>
          </h3>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#191717]/60">
            Epic trails, expert guides, real connections. Plan your next
            adventure with the world’s most trusted hiking community.
          </p>

          <button className="mt-12 w-fit rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-12 py-5 text-white font-medium shadow-lg">
            View All
          </button>
        </div>

        {/* Right Carousel */}
        <CardCarousel
          items={destinations}
          cardWidth={360}
          gap={24}
          renderItem={(destination, index) => (
            <div
              key={index}
              className="relative h-[560px] min-w-[360px] overflow-hidden rounded-[40px]"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

              {/* Content */}
              <div className="absolute bottom-8 left-6 right-6">
                <h4 className="text-[34px] font-medium leading-tight text-white">
                  {destination.title}
                </h4>

                <div className="mt-4 flex items-center gap-2 text-white/70">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{destination.location}</span>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}