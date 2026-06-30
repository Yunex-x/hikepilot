import { Star } from "lucide-react";

export default function PromoAfricaSection() {
  return (
    <section className="bg-[#F4F8FB] px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1676px]">
        <div className="relative overflow-hidden rounded-[32px] shadow-[inset_0_0_44px_rgba(255,255,255,0.7)] sm:rounded-[50px] lg:rounded-[86px]">
          {/* Background */}
          <img
            src="/africa/africa-bg.svg"
            alt="Africa Banner"
            className="h-[480px] w-full object-cover sm:h-[580px] md:h-[680px] lg:h-[760px]"
          />

          {/* Left ambient blur (Vector 1) */}
          <div className="absolute left-[-8%] top-1/2 h-[65%] w-[55%] -translate-y-1/2 rounded-full bg-white/80 blur-[95px]" />

          {/* Light overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/20 to-transparent sm:h-40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col px-5 py-6 sm:px-8 sm:py-8 md:px-12 md:py-12 lg:px-16 lg:py-14">
            {/* Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F69F14] px-4 py-2 shadow-[inset_0_0_16px_rgba(255,255,255,0.6)] sm:px-6 sm:py-3">
                <Star className="h-4 w-4 fill-white text-white" />
                <span className="text-sm font-medium text-white sm:text-base md:text-lg">
                  Featured
                </span>
              </div>
            </div>

            {/* Main content */}
            <div className="mt-8 flex w-full flex-col sm:mt-10 md:mt-12">
              {/* Title image */}
              <div className="w-[75%] sm:w-[65%] md:w-[58%] lg:w-[52%] xl:w-[48%]">
                <img
                  src="/africa/calling.svg"
                  alt="Africa Is Calling"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Description */}
              <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-[#191717]/80 sm:text-base md:mt-8 md:text-xl lg:text-2xl">
                Serengeti at dawn, summit Kilimanjaro at sunrise, trekking with
                gorillas in the mist.
              </p>

              {/* CTA */}
              <button className="mt-6 w-fit rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-6 py-3 text-sm font-medium text-white shadow-[inset_0px_-2px_4px_rgba(255,255,255,0.25),inset_0px_2px_5px_rgba(0,0,0,0.25)] transition hover:scale-[1.02] sm:px-8 sm:py-4 sm:text-base md:mt-8 md:px-10">
                Discover Africa!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}