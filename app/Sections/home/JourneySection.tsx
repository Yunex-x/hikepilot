import Image from "next/image";

const SECTION_HEIGHT = 1150;
const CARD_WIDTH = 420;
const CARD_HEIGHT = 550;

const cards = [
  {
    id: 1,
    image: "/journey/1.png",
    category: "Destination",
    date: "12 May, 2026",
    title: "Why Patagonies Should Be On Your Bucket List",
  },
  {
    id: 2,
    image: "/journey/2.png",
    category: "Destination",
    date: "12 May, 2026",
    title: "Why Patagonies Should Be On Your Bucket List",
  },
  {
    id: 3,
    image: "/journey/3.png",
    category: "Destination",
    date: "12 May, 2026",
    title: "Why Patagonies Should Be On Your Bucket List",
  },
];

export default function JourneySection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: `${SECTION_HEIGHT}px` }}
    >
      {/* Background */}
      <Image
        src="/journey/journey-bg.png"
        alt="Journey Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Main grid */}
      <div className="relative z-10 h-full grid grid-rows-[auto_1fr] px-10 pt-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Know Before Your Journey.png"
            alt="Know Before Your Journey"
            width={989}
            height={310}
            priority
          className="w-auto h-auto"
          />

          <p className="max-w-[787px] mt-6 text-[28px] leading-[42px] tracking-[0.02em] text-[rgba(25,23,23,0.65)]">
            Accelerate your group tour with your near community.
            <br />
            Feel safe, feel comfortable.
          </p>

          <button className="mt-8 w-[260px] h-[64px] rounded-[46px] bg-gradient-to-b from-[#348F57] to-[#205930] text-white text-[20px] font-medium shadow-[0_8px_20px_rgba(47,138,76,0.35)]">
            View All
          </button>
        </div>

        {/* Cards centered inside remaining bg space */}
        <div className="grid place-content-center h-full pb-32">
          <div className="flex justify-center gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative rounded-[44px] overflow-hidden shrink-0"
                style={{
                  width: `${CARD_WIDTH}px`,
                  height: `${CARD_HEIGHT}px`,
                }}
              >
                {/* Card image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  width={CARD_WIDTH}
                  height={CARD_HEIGHT}
                  className="w-full h-full object-cover"
                />

                {/* Blur */}
                <div className="absolute bottom-0 left-0 w-full h-[220px] bg-black/40 blur-[45px]" />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-5">
                  <span className="inline-flex w-fit px-4 py-2 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-medium">
                    {card.category}
                  </span>

                  <div className="px-2 pb-3">
                    <p className="text-white/70 text-[12px] mb-3">
                      {card.date}
                    </p>

                    <h3 className="text-white text-[24px] leading-[32px] font-medium max-w-[300px] mb-5">
                      {card.title}
                    </h3>

                    <button className="px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}