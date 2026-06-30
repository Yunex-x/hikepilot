import { MapPin, Route, Scale, MessageCircle } from "lucide-react";


export default function AiTravelSection() {
  return (
    <section className="bg-[#F4F8FB] px-6 py-28">
      <div className="mx-auto max-w-[1676px]">
        <div className="relative overflow-hidden rounded-[56px]">
          {/* Main Background */}
          <img
            src="/ai.png"
            alt="AI Travel"
            className="w-full rounded-[56px] object-cover"
          />

          {/* Search bar overlay */}
          <div className="absolute left-[5%] top-[48%] z-30 w-[42%] max-w-[760px]">
            <div className="relative">
              {/* glow */}
              <div className="absolute inset-x-10 top-5 h-8 rounded-full bg-white/30 blur-xl" />

              {/* bar */}
              <div className="relative flex h-[88px] items-center rounded-full border border-white/60 bg-[#DDE5DF] pl-8 pr-2 shadow-[0px_6px_9px_rgba(255,255,255,0.48),0px_132px_79px_rgba(0,0,0,0.11),0px_59px_59px_rgba(0,0,0,0.19),0px_15px_32px_rgba(0,0,0,0.22)]">
                {/* icon */}
                <img
                  src="/Sparkle.png"
                  alt="AI"
                  className="h-10 w-10 shrink-0"
                />

                {/* input */}
                <input
                  type="text"
                  placeholder="Ask anything about your tour..."
                  className="flex-1 bg-transparent px-6 text-[clamp(1rem,1.4vw,2rem)] font-medium text-[#6C6C6C] outline-none placeholder:text-[#6C6C6C]"
                />

                {/* send button */}
                <button className="flex h-[76px] w-[76px] items-center justify-center ">
                  <img
                    src="/Group 16.png"
                    alt="Send"
                    className=""
                  />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}