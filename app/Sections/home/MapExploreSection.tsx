export default function MapExploreSection() {
  const tabs = [
    "Stays & Accommodations",
    "Parks & Destinations",
    "Local Guides",
    "Experiences & Activities",
  ];

  return (
    <section className="relative min-h-[1150px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/map-bg.svg')",
        }}
      />

      {/* Top fade */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F2F6F9_-16.22%,rgba(242,246,249,0)_46.11%)]" />

      {/* Blur behind title */}
      <div className="absolute top-[220px] left-1/2 h-[268px] w-[1475px] -translate-x-1/2 bg-white/10 blur-[125px]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-6 pt-44">
        {/* Title */}
        <h2 className="max-w-7xl bg-gradient-to-b from-[#191717] to-[#191717]/60 bg-clip-text text-transparent text-center font-semibold tracking-[-0.04em] text-[clamp(3rem,7vw,6.25rem)] leading-tight drop-shadow-[0_5px_30px_rgba(0,0,0,0.3)]">
          Navigate The World Of Adventure
        </h2>

        {/* Subtitle */}
        <p className="mt-8 max-w-4xl text-center text-[clamp(1rem,2vw,1.75rem)] leading-relaxed text-black/80">
          Our immersive interactive map helps you discover nearby parks, local
          guides, and experiences, while planning your journey.
        </p>

        {/* Tabs */}
        <div className="relative mt-16 w-full max-w-7xl">
          <div className="absolute inset-0 rounded-full bg-white/50 blur-[62px]" />

          <div className="relative flex flex-wrap items-center justify-center gap-6 rounded-full bg-white/30 px-8 py-7 backdrop-blur-xl">
            {tabs.map((tab, index) => (
              <div key={index} className="flex items-center gap-6">
                <span className="text-[18px] md:text-[24px] font-semibold text-[#191717]">
                  {tab}
                </span>

                {index !== tabs.length - 1 && (
                  <div className="h-10 w-[2px] bg-[#191717]/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button className="mt-20 rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-12 py-5 text-white text-lg font-medium shadow-[inset_0px_-2px_4px_rgba(255,255,255,0.25),inset_0px_2px_5px_rgba(0,0,0,0.25)]">
          Explore Map
        </button>
      </div>

      {/* Floating pins */}
      <div className="absolute top-[180px] left-[14%] " >
      <img src="/pin1.svg" alt="Pin 1" className="" />
      </div>
      <div className="absolute top-[400px] left-[60%] " >
      <img src="/pin2.svg" alt="Pin 2" className="" />
      </div>
      <div className="absolute top-[130px] left-[48%] h-20 w-20  border border-white/30 bg-white/10 backdrop-blur-md" />
      <div className="absolute top-[700px] left-[32%] h-20 w-20  border border-white/30 bg-white/10 backdrop-blur-md" />
      <div className="absolute top-[650px] right-[12%] h-20 w-20  border border-white/30 bg-white/10 backdrop-blur-md" />
    </section>
  );
}