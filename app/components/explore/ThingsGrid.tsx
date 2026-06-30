import ThingCard from "./ThingCard";

interface ThingItem {
  id: number;
  name: string;
  image: string;
  location: string;
  activities: string[];
  price: string;
  rating: string;
  duration: string;
  instantBook: boolean;
  coordinates: number[];
}

interface ThingsGridProps {
  columns?: 2 | 4;
  items: ThingItem[];
}

export default function ThingsGrid({
  columns = 4,
  items,
}: ThingsGridProps) {
  return (
    <section className="py-6">
      <div
        className={`grid gap-6 ${
          columns === 4
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {items.map((thing) => (
          <ThingCard
            key={thing.id}
            thing={thing}
          />
        ))}
      </div>
    </section>
  );
}