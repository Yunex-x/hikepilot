import StayCard from "./StayCard";

interface StayItem {
  id: number;
  name: string;
  image: string;
  location: string;
  features: string[];
  price: string;
  rating: string;
  type: string;
  instantBook: boolean;
  coordinates: number[];
}

interface StaysGridProps {
  columns?: 2 | 4;
  items: StayItem[];
}

export default function StaysGrid({
  columns = 4,
  items,
}: StaysGridProps) {
  return (
    <section className="py-6">
      <div
        className={`grid gap-6 ${
          columns === 4
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {items.map((stay) => (
          <StayCard
            key={stay.id}
            stay={stay}
          />
        ))}
      </div>
    </section>
  );
}