import {
  Heart,
  MapPin,
  Users,
  Clock3,
  CalendarDays,
  Star,
} from "lucide-react";
import { Thing } from "@/data/things";

interface ThingCardProps {
  thing: Thing;
}

export default function ThingCard({ thing }: ThingCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_14px_38px_rgba(0,0,0,0.08)]">
      {/* Image */}
      <div className="relative h-[261px] overflow-hidden rounded-t-[28px]">
        <img
          src={thing.image}
          alt={thing.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-[12px] font-semibold text-[#367347] backdrop-blur-sm">
          {thing.category}
        </div>

        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/15 backdrop-blur-md">
          <Heart className="h-4 w-4 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-5 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[20px] font-semibold text-black">
            {thing.title}
          </h3>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-[#FBA518] text-[#FBA518]" />
            <span className="text-sm font-medium">{thing.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-black/60">
          <MapPin className="h-4 w-4" />
          <span>{thing.location}</span>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-black/70">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {thing.guests} guests
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {thing.duration}
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {thing.deadline}
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-black/5 pt-4">
          <div>
            <p className="text-xs text-black/50">From</p>
            <h4 className="text-[20px] font-bold text-[#367347]">
              {thing.price}
            </h4>
            <p className="text-xs text-black/50">Per person</p>
          </div>

          <button className="rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-5 py-3 text-sm font-medium text-white">
            View Tour
          </button>
        </div>
      </div>
    </div>
  );
}