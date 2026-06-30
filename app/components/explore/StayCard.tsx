import {
  Heart,
  MapPin,
  Users,
  Clock3,
} from "lucide-react";

interface StayCardProps {
  stay: {
    name: string;
    image: string;
    location: string;
    guests: number;
    days: number;
    host: string;
    hostAvatar: string;
    price: string;
    type: string;
  };
}

export default function StayCard({ stay }: StayCardProps) {
  return (
    <div className="overflow-hidden rounded-[37px] border border-black/10 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
      <div className="relative h-[246px]">
        <img
          src={stay.image}
          alt={stay.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute left-5 top-5 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
          {stay.type}
        </div>

        <button className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-black/50">
          <Heart className="h-4 w-4 text-white" />
        </button>
      </div>

      <div className="space-y-5 p-6">
        <h3 className="text-[22px] font-semibold">{stay.name}</h3>

        <div className="flex items-center gap-2 text-black/60">
          <MapPin className="h-4 w-4" />
          <span>{stay.location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {stay.guests} guests
          </div>

          <div className="h-4 w-px bg-black/20" />

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {stay.days} days
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={stay.hostAvatar}
            alt={stay.host}
            className="h-8 w-8 rounded-full object-cover"
          />

          <div>
            <p className="text-xs text-black/40">Posted by:</p>
            <p className="text-sm font-semibold">{stay.host}</p>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-black/50">From</p>
            <div className="flex items-end gap-1">
              <h4 className="text-[22px] font-bold text-[#367347]">
                {stay.price}
              </h4>
              <span className="text-xs text-black/50">
                Per Night
              </span>
            </div>
          </div>

          <button className="rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-5 py-3 text-sm font-medium text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}