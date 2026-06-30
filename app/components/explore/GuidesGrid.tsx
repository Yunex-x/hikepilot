import {
  Heart,
  MapPin,
  Star,
  Languages,
  Mountain,
  BadgeCheck,
} from "lucide-react";

interface GuideItem {
  id: number;
  name: string;
  image: string;
  location: string;
  languages: string[];
  specialties: string[];
  price: string;
  rating: string;
  instantBook: boolean;
}

interface GuidesGridProps {
  activeTab: "guides" | "things" | "stays" | "parks";
  columns?: 2 | 4;
  items: GuideItem[];
}

export default function GuidesGrid({
  activeTab,
  columns = 4,
  items,
}: GuidesGridProps) {
  return (
    <section className="py-6">
      <div
        className={`grid gap-6 ${
          columns === 4
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {items.map((guide) => (
          <div
            key={guide.id}
            className="w-full overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_14px_38px_rgba(0,0,0,0.08)]"
          >
            {/* Image */}
            <div className="relative h-[261px] overflow-hidden rounded-t-[28px]">
              <img
                src={guide.image}
                alt={guide.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-[12px] font-semibold text-[#2446DA] backdrop-blur-sm">
                {activeTab === "guides" ? "Platinum" : "Tours"}
              </div>

              <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/15 backdrop-blur-md">
                <Heart className="h-4 w-4 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-5 p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[20px] font-semibold text-black">
                      {guide.name}
                    </h3>

                    <BadgeCheck className="h-4 w-4 text-green-700" />
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[#FBA518] text-[#FBA518]" />
                    <span className="text-sm font-medium text-black">
                      {guide.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-black/60">
                  <MapPin className="h-4 w-4" />
                  <span>{guide.location}</span>

                  <div className="h-1 w-1 rounded-full bg-black/20" />

                  <span className="font-semibold text-[#367347]">
                    +15
                  </span>
                </div>
              </div>

              {/* Languages / Activities */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-black/60">
                  <Languages className="h-4 w-4" />
                  <span>
                    {activeTab === "guides"
                      ? "Speaks"
                      : "Activities"}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-black/80">
                  {guide.languages.join(" • ")}
                </p>
              </div>

              {/* Specialties */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-black/60">
                  <Mountain className="h-4 w-4" />
                  <span>
                    {activeTab === "guides"
                      ? "Specialized In"
                      : "Tour Details"}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-black/80">
                  {guide.specialties.join(" • ")} +3
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-end justify-between border-t border-black/5 pt-4">
                <div>
                  <p className="text-xs text-black/50">From</p>

                  <h4 className="text-[20px] font-bold text-[#367347]">
                    {guide.price}
                  </h4>

                  <p className="text-xs text-black/50">
                    Per person
                  </p>
                </div>

                <button className="rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-5 py-3 text-sm font-medium text-white shadow-[inset_0px_-2px_4px_rgba(255,255,255,0.25),inset_0px_2px_5px_rgba(0,0,0,0.25)] transition hover:scale-[1.02]">
                  {activeTab === "guides"
                    ? "View Profile"
                    : "View Tour"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}