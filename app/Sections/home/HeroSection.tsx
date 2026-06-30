import {
  Search,
  BadgeCheck,
  Wallet,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Guides",
    desc: "Trusted local experts",
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    desc: "Encrypted checkout",
  },
  {
    icon: ShieldCheck,
    title: "Trip Protection",
    desc: "Covered if plans change",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    desc: "Help whenever needed",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[120vh] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Smooth fade */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.38)_55%,rgba(14,23,17,0.75)_82%,rgba(14,23,17,0.96)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[120vh] flex-col items-center px-6 pt-32 pb-32">
        {/* Main Hero */}
        <div className="max-w-6xl text-center">
          <h1 className="font-bold uppercase tracking-[-0.05em] leading-[0.92] text-white drop-shadow-[0_20px_14px_rgba(0,0,0,0.48)]">
            <span className="block text-[clamp(3rem,9vw,7.5rem)]">
              Your Adventure
            </span>
            <span className="block text-[clamp(3rem,9vw,7.5rem)]">
              Your Way
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-white/80 text-base sm:text-lg md:text-xl lg:text-[28px] leading-relaxed">
            HikePilot helps you discover routes, build your adventure plan,
            and travel with confidence — all without needing a guide.
          </p>
        </div>

        {/* Search */}
        <div className="relative mt-10 w-full max-w-3xl">
          <div className="absolute inset-x-8 top-4 h-5 rounded-full bg-white/30 blur-md" />

          <div className="relative flex h-16 md:h-[72px] items-center rounded-full bg-white/80 shadow-[0px_5px_12px_rgba(255,255,255,0.38),0px_114px_46px_rgba(0,0,0,0.01),0px_64px_38px_rgba(0,0,0,0.05),0px_28px_28px_rgba(0,0,0,0.09),0px_7px_16px_rgba(0,0,0,0.1),inset_2px_11px_24px_#FFFFFF] backdrop-blur-xl">
            <input
              type="text"
              placeholder="I am looking for National Parks..."
              className="flex-1 bg-transparent px-7 text-sm md:text-base outline-none placeholder:text-black/40"
            />

            <button className="mr-1 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] shadow-[inset_0px_-2px_4px_rgba(255,255,255,0.25),inset_0px_2px_5px_rgba(0,0,0,0.25)]">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid w-full max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/70 shadow-[0px_21px_28px_rgba(0,0,0,0.06),inset_0px_-3px_4px_#fff,inset_-2px_1px_15px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-[0px_21px_28px_rgba(0,0,0,0.04),inset_0px_-3px_4px_#fff,inset_-2px_1px_15px_rgba(0,0,0,0.32)]">
                    <Icon className="h-7 w-7 text-[#2C6B42]" />
                  </div>
                </div>

                <h3 className="mt-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent text-xl md:text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm md:text-base text-white/80">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transition text */}
        <div className="mt-24 flex flex-col items-center text-center px-6">
          <h2 className="max-w-7xl bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-semibold tracking-[-0.04em] leading-tight text-[clamp(2.5rem,6vw,5rem)]">
            The Next Revolution In Adventure Travel
          </h2>

          <p className="mt-6 max-w-4xl text-white/80 text-base sm:text-lg md:text-xl lg:text-[28px] leading-relaxed tracking-[0.02em]">
            Connect directly with local guides, design trips around your own
            budget, explore the outdoors your way.
          </p>
        </div>
      </div>
    </section>
  );
}