"use client";

import {
  MapPin,
  Star,
  Languages,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import CardCarousel from "../../components/ui/CardCarousel";

const guides = [
  {
    name: "Marvin McKinney",
    country: "Tanzania",
    rating: "4.9",
    languages: "Spanish • Arabic • Urdu • English",
    specialties: "Hiking • Trekking • Climbing • Birding +3",
    price: "$120",
    image: "guideSection/guide-1.svg",
    badge: "Platinum",
  },
  {
    name: "John Carter",
    country: "Kenya",
    rating: "4.8",
    languages: "English • French • Arabic",
    specialties: "Safari • Wildlife • Trekking",
    price: "$140",
    image: "guideSection/guide-2.svg",
    badge: "Platinum",
  },
  {
    name: "Emma Wilson",
    country: "Uganda",
    rating: "4.9",
    languages: "English • Swahili • Spanish",
    specialties: "Birding • Climbing • Tours",
    price: "$110",
    image: "guideSection/guide-3.svg",
    badge: "Platinum",
  },
];

export default function LocalGuidesSection() {
  return (
    <section
      className="grid gap-20 bg-cover bg-center px-6 py-28"
      style={{
        backgroundImage:
          " url('/guideSection/guide-bg.svg')",
      }}
    >      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="bg-gradient-to-b from-[#191717]/80 to-[#191717]/40 bg-clip-text text-transparent text-[clamp(3rem,6vw,5rem)] font-semibold tracking-[0.04em]">
          Directly Connect With Your Local Expert
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-[clamp(1rem,2vw,1.6rem)] text-[#191717]/60">
          Personal assistance designed to deliver secure and memorable adventures
        </p>
      </div>

      {/* Main Grid */}
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-14 lg:grid-cols-[0.8fr_1.4fr]">
        {/* Left */}
        <div>
          <h3 className="text-[clamp(4rem,7vw,5.5rem)] font-semibold leading-[1] tracking-[-0.05em] text-[#191717]">
            Our Local
            <br />
            Tour Guides
          </h3>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#191717]/60">
            Epic trails, expert guides, real connections. Plan your next
            adventure with the world’s most trusted hiking community.
          </p>

          <button className="mt-12 rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-12 py-5 text-white font-medium">
            See All
          </button>
        </div>

        {/* Carousel */}
        <CardCarousel
          items={guides}
          cardWidth={360}
          gap={24}
          renderItem={(guide, index) => (
            <div
              key={index}
              className="grid min-w-[360px] overflow-hidden rounded-[36px] bg-gradient-to-b from-[#191717] to-[#191717]/90 p-1 shadow-xl"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="h-[300px] w-full rounded-[32px] object-cover"
                />

                {/* Badge */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#2446DA]">
                  <BadgeCheck className="h-4 w-4" />
                  {guide.badge}
                </div>

                {/* Favorite */}
                <button className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-black/20">
                  <Star className="h-4 w-4 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="grid gap-6 p-5">
                {/* Name */}
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-semibold text-white">
                    {guide.name}
                  </h4>

                  <div className="flex items-center gap-1 text-white">
                    <Star className="h-4 w-4 fill-[#FBA518] text-[#FBA518]" />
                    <span>{guide.rating}</span>
                  </div>
                </div>

                {/* Country */}
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="h-4 w-4" />
                  {guide.country}
                </div>

                {/* Languages */}
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Languages className="h-4 w-4" />
                    Speaks
                  </div>

                  <p className="text-sm text-white/80">{guide.languages}</p>
                </div>

                {/* Specialties */}
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Sparkles className="h-4 w-4" />
                    Specialized In
                  </div>

                  <p className="text-sm text-white/80">{guide.specialties}</p>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-xs text-white/60">From</p>
                    <p className="text-2xl font-bold text-white">
                      {guide.price}
                    </p>
                    <p className="text-xs text-white/60">Per person</p>
                  </div>

                  <button className="rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-5 py-3 text-sm font-medium text-white">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}