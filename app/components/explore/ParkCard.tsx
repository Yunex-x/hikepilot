import { Heart, MapPin, Star, Trees } from "lucide-react";

interface ParkCardProps {
  park: {
    name: string;
    image: string;
    location: string;
    activities: string[];
    price: string;
    rating: string;
    type: string;
  };
}

export default function ParkCard({ park }: ParkCardProps) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
      {/* Image */}
      <div className="relative h-[276px]">
        <img
          src={park.image}
          alt={park.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute left-5 top-5 rounded-full bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md">
          {park.type}
        </div>

        <button className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-md">
          <Heart className="h-4 w-4 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-[22px] font-semibold">{park.name}</h3>

          <div className="mt-2 flex items-center gap-2 text-black/60">
            <MapPin className="h-4 w-4" />
            <span>{park.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-[#FBA518] text-[#FBA518]" />
          <span>{park.rating}</span>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2 text-black/60">
            <Trees className="h-4 w-4" />
            <span>Activities Include:</span>
          </div>

          <p className="text-sm text-black/80">
            {park.activities.join(" • ")}
          </p>
        </div>

        <div className="flex items-end justify-between pt-4">
          <div>
            <p className="text-xs text-black/50">From</p>
            <h4 className="text-[22px] font-bold text-[#367347]">
              {park.price}
            </h4>
            <p className="text-xs text-black/50">Per person</p>
          </div>

          <button className="rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-5 py-3 text-sm font-medium text-white">
            Explore Park
          </button>
        </div>
      </div>
    </div>
  );
}