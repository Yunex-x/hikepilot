"use client";

import {
  MapPin,
  CalendarDays,
  CalendarClock,
  Users,
  Clock3,
  ArrowRight,
  Star,
} from "lucide-react";
import FocusCarousel from "../../components/ui/FocusCarousel";

const tours = [
  {
    title: "5 nights–6 days safari in Kenya",
    price: "$450",
    location: "Kenya",
    image: "/toursection/2.svg",
  },
  {
    title: "5 nights–6 days safari in Kenya",
    price: "$450",
    location: "Kenya",
    image: "/toursection/2.svg",
  },
  {
    title: "5 nights–6 days safari in Kenya",
    price: "$450",
    location: "Kenya",
    image: "/toursection/1.svg",
  },
  {
    title: "5 nights–6 days safari in Kenya",
    price: "$450",
    location: "Kenya",
    image: "/toursection/2.svg",
  },
  {
    title: "5 nights–6 days safari in Kenya",
    price: "$450",
    location: "Kenya",
    image: "/toursection/2.svg",
  },
];

export default function TourJoinSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/toursection/tour-bg.svg')",
        }}
      />

      {/* Top fade */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F4F8FB_0%,rgba(244,248,251,0.55)_35%,rgba(244,248,251,0.05)_100%)]" />

      <div className="relative z-20 mx-auto max-w-[1800px] px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="bg-gradient-to-b from-[#191717]/90 to-[#191717]/40 bg-clip-text text-[clamp(3rem,6vw,5rem)] font-semibold tracking-[-0.04em] text-transparent drop-shadow-[0_8px_28px_rgba(0,0,0,0.2)]">
            Tour You Can Join
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#191717]/60 md:text-2xl">
            Accelerate your group tour with your near community. Feel safe,
            feel comfortable
          </p>

          <button className="mt-10 rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-10 py-4 text-white shadow-lg">
            View All
          </button>
        </div>

        {/* Carousel */}
        <div className="mt-20">
          <FocusCarousel
            items={tours}
            renderItem={(tour, active) => (
              <div
                className={`flex w-[592px] flex-col rounded-[57px] border border-white/20 bg-white/40 p-6 backdrop-blur-[2.5px] shadow-[0px_6px_9px_rgba(255,255,255,0.48),0px_235px_94px_rgba(0,0,0,0.03),0px_132px_79px_rgba(0,0,0,0.11),0px_59px_59px_rgba(0,0,0,0.19),0px_15px_32px_rgba(0,0,0,0.22)] transition-all ${active ? "h-[772px]" : "h-[690px]"
                  }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[365px] text-[32px] font-medium leading-[1.25] text-[#191717]">
                    {tour.title}
                  </h3>

                  <div className="text-right">
                    <p className="bg-gradient-to-b from-[#3E8451] to-[#205930] bg-clip-text text-[32px] font-semibold tracking-[-0.03em] text-transparent">
                      {tour.price}
                    </p>

                    <span className="text-sm text-[#191717]/60">
                      Per person
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative mt-8 overflow-hidden rounded-[40px]">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className={`w-full object-cover ${active ? "h-[343px]" : "h-[290px]"
                      }`}
                  />

                  {/* Safari */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/10 px-6 py-3 shadow-[0px_16px_25px_rgba(0,0,0,0.06)] backdrop-blur-xl">
                    <span className="text-[20px] font-medium text-[#367347]">
                      Safari
                    </span>
                  </div>

                  {/* Featured */}
                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-[#F69F14] px-7 py-3 shadow-[inset_0px_0px_16px_rgba(255,255,255,0.6)]">
                    <Star className="h-4 w-4 fill-white text-white" />
                    <span className="text-[20px] text-white">Featured</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 flex flex-1 flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-[22px] w-[22px] text-[#348F57]" />
                      <span className="text-[24px] text-[#191717]/60">
                        {tour.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-[22px] w-[22px] text-[#348F57]" />
                      <span className="text-[24px] font-semibold text-[#191717]/60">
                        Dates: From 25 May to 27 May
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-[22px] w-[22px] text-[#348F57]" />
                      <span className="text-[24px] font-semibold text-[#191717]/60">
                        Reg. Deadline: 31 Jul 2026
                      </span>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Users className="h-[22px] w-[22px] text-[#191717]/60" />
                        <span className="text-[24px] font-medium text-[#191717]">
                          6 guests
                        </span>
                      </div>

                      <div className="h-5 w-px bg-[#191717]/20" />

                      <div className="flex items-center gap-2">
                        <Clock3 className="h-[22px] w-[22px] text-[#191717]/60" />
                        <span className="text-[24px] font-medium text-[#191717]">
                          4 days
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 overflow-hidden rounded-full">
                        <img
                          src="/tour/avatar.png"
                          alt="Agency"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <span className="text-[24px] font-semibold text-[#191717]">
                        Kalahari Tour & Travels
                      </span>
                    </div>

                    <button className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] shadow-[inset_0px_-2px_4px_rgba(255,255,255,0.25),inset_0px_2px_5px_rgba(0,0,0,0.25)]">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}