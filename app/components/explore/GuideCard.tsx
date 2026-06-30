import { MapPin, ArrowRight } from "lucide-react";

interface GuideCardProps {
  guide: {
    name: string;
    country: string;
    image: string;
    tours: number;
  };
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <div className="w-full max-w-[390px] overflow-hidden rounded-[32px] bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      {/* Image */}
      <img
        src={guide.image}
        alt={guide.name}
        className="h-[300px] w-full rounded-[24px] object-cover"
      />

      {/* Content */}
      <div className="mt-5">
        <h3 className="line-clamp-1 text-[28px] font-semibold text-[#191717]">
          {guide.name}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-black/60">
          <MapPin className="h-4 w-4 shrink-0" />
          <span className="text-[16px]">{guide.country}</span>
        </div>

        <p className="mt-2 text-[15px] text-black/40">
          +{guide.tours} tours available
        </p>

        {/* CTA */}
        <button className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] transition hover:scale-105">
          <ArrowRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}