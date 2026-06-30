import {
  Users,
  Route,
  WalletCards,
  Globe2,
} from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Connect With Local Guys",
    desc: "Chat directly with guides who know the destinations best",
    image: "/feature-1.png",
  },
  {
    icon: Route,
    title: "Design Your Own Tour",
    desc: "Build the trip round your taste, interests, dates, and travel style",
    image: "/feature-2.png",
  },
  {
    icon: WalletCards,
    title: "Plan For Any Budget",
    desc: "Choose what matters most, and create an adventure that fits your price range",
    image: "/feature-3.png",
  },
  {
    icon: Globe2,
    title: "Get Inspired By Community",
    desc: "Discover ideas, ask questions, and learn from our guides and adventure travelers",
    image: "/feature-4.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative -mt-32 overflow-hidden bg-[linear-gradient(180deg,#0E1711_0%,#1E2B23_14%,#55635C_38%,#A9B5AE_72%,#F1F6F9_100%)] pt-44 pb-32 px-6">
      <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
<div
  key={index}
  className="relative h-[500px] overflow-hidden rounded-[36px] border border-white/30 bg-white/20 backdrop-blur-[18px] shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
>
  {/* Soft top glass */}
  <div className="absolute inset-x-0 top-0 h-[68%] bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.58)_40%,rgba(255,255,255,0.16)_100%)]" />

  {/* Icon */}
  <div className="relative z-20 pt-12 flex justify-center">
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] shadow-[inset_0px_-2px_4px_rgba(255,255,255,0.25),inset_0px_2px_5px_rgba(0,0,0,0.25)]">
      <Icon className="h-9 w-9 text-white" />
    </div>
  </div>

  {/* Content */}
  <div className="relative z-20 mt-8 px-8 text-center">
    <h3 className="bg-gradient-to-r from-[#191717] to-[#5E5A5A] bg-clip-text text-transparent text-[18px] md:text-[22px] font-medium leading-[28px] tracking-[-0.03em]">
      {card.title}
    </h3>

    <p className="mt-4 text-[14px] md:text-[15px] leading-[22px] text-[#191717]/60 max-w-[280px] mx-auto">
      {card.desc}
    </p>
  </div>

  {/* Image */}
  <div className="absolute bottom-0 left-0 h-[42%] w-full overflow-hidden">
    <img
      src={card.image}
      alt={card.title}
      className="h-full w-full object-cover"
    />

    {/* smoother top fade */}
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.32)_38%,rgba(255,255,255,0)_100%)]" />

    {/* bottom soft light */}
    <div className="absolute inset-0 shadow-[inset_0_-14px_22px_rgba(255,255,255,0.45)]" />
  </div>
</div>          );
        })}
      </div>
      {/* Bottom subtitle */}
<div className="relative z-20 mt-20 flex justify-center px-6">
  <p className="max-w-6xl text-center text-[clamp(1rem,2vw,1.75rem)] leading-relaxed font-normal text-[#191717]/80">
    No fixed packages, no middle man pressure, join the tools to explore the
    world your way.
  </p>
</div>
    </section>
  );
}