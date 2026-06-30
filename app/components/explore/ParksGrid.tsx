import ParkCard from "./ParkCard";

interface ParkItem {
  id: number;
  name: string;
  image: string;
  location: string;
  activities: string[];
  price: string;
  rating: string;
  type: string;
  instantBook: boolean;
  coordinates: number[];
}

interface ParksGridProps {
  columns?: 2 | 4;
  items: ParkItem[];
}

export default function ParksGrid({
  columns = 4,
  items,
}: ParksGridProps) {
  return (
    <section className="py-6">
      <div
        className={`grid gap-6 ${
          columns === 4
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {items.map((park) => (
          <ParkCard key={park.id} park={park} />
        ))}
      </div>
    </section>
  );
}