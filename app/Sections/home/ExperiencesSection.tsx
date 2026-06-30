"use client";

import {
  MapPin,
  Users,
  Clock3,
} from "lucide-react";
import CardCarousel from "../../components/ui/CardCarousel";

const experiences = [
  {
    title: "Central Kalahari Game Reserve",
    location: "Rwanda, Middle Africa",
    guests: "6 guests",
    duration: "4 days",
    price: "$450",
    company: "Kalahari Tour & Travels",
    image: "/experience-1.svg",
    avatar: "/avatar-1.svg",
  },
  {
    title: "Virunga Adventures",
    location: "Rwanda, Middle Africa",
    guests: "6 guests",
    duration: "4 days",
    price: "$450",
    company: "Virunga Adventures",
    image: "/experience-2.svg",
    avatar: "/avatar-2.svg",
  },
  {
    title: "Volcanoes Expedition",
    location: "Rwanda, Middle Africa",
    guests: "6 guests",
    duration: "4 days",
    price: "$450",
    company: "Volcanoes Expedition",
    image: "/experience-3.svg",
    avatar: "/avatar-3.svg",
  },
];

const categories = [
  "Safari",
  "Trekking",
  "Tours",
  "Climbing",
  "Cultural",
  "Birding",
];

export default function ExperiencesSection() {
  return (
    <section
      className="grid gap-20 bg-cover bg-center px-6 py-28"
      style={{
        backgroundImage:
          " url('/experience.svg')",
      }}
    >
      {/* Header */}
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="bg-gradient-to-b from-[#191717]/80 to-[#191717]/40 bg-clip-text text-transparent text-[clamp(3rem,6vw,5rem)] font-semibold tracking-[0.04em]">
          Choose Your Next Experience
        </h2>

        <p className="mt-6 max-w-3xl text-[clamp(1rem,2vw,1.75rem)] text-[#191717]/60">
          Explore best adventures trips location to make your travel more memorable
        </p>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`rounded-full px-6 py-4 text-lg font-semibold ${index === 0
                  ? "bg-gradient-to-b from-[#348F57] to-[#205930] text-white"
                  : "border border-white bg-white/70 text-[#191717]/60"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-14 lg:grid-cols-[0.8fr_1.4fr]">
        {/* Left */}
        <div>
          <h3 className="text-[clamp(4rem,7vw,5.5rem)] font-semibold leading-[1] tracking-[-0.05em] text-white/40">
            Our Experiences
          </h3>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
            Epic trails, expert guides, real connections. Plan your next
            adventure with the world’s most trusted hiking community.
          </p>

          <button className="mt-12 rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-12 py-5 text-white font-medium">
            View All
          </button>
        </div>

        {/* Carousel */}
        <CardCarousel
          items={experiences}
          cardWidth={380}
          gap={24}
          renderItem={(experience, index) => (
            <div
              key={index}
              className="grid min-w-[380px] overflow-hidden rounded-[45px] bg-gradient-to-b from-[#191717] to-[#191717]/60 p-1 shadow-xl"
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="h-[300px] w-full rounded-[40px] object-cover"
              />

              <div className="grid gap-5 p-6">
                {/* Tag */}
                <div className="w-fit rounded-full bg-black/40 px-5 py-2 text-sm text-white">
                  Tours
                </div>

                {/* Title + Price */}
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <h4 className="text-2xl font-semibold text-white">
                    {experience.title}
                  </h4>

                  <div className="text-right">
                    <p className="text-xl font-medium text-white">
                      {experience.price}
                    </p>
                    <p className="text-sm text-white/60">Per person</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>

                {/* Guests + Duration */}
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{experience.guests}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                </div>

                {/* Company */}
                <div className="flex items-center gap-3">
                  <img
                    src={experience.avatar}
                    alt={experience.company}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-lg font-semibold text-white">
                    {experience.company}
                  </span>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}