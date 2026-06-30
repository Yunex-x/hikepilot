import GuidesGrid from "./GuidesGrid";
import ThingsGrid from "./ThingsGrid";
import StaysGrid from "./StaysGrid";
import ParksGrid from "./ParksGrid";
import ExploreMap from "./ExploreMap";
import ExploreFilters from "./ExploreFilters";

import { guidesData } from "@/app/data/guides";
import { thingsData } from "@/app/data/things";
import { staysData } from "@/app/data/stays";
import { parksData } from "@/app/data/parks";

interface FiltersProps {
  minPrice: number;
  maxPrice: number;
  minRating: number;
  instantBook: boolean;
}

interface ExploreLayoutProps {
  activeTab: "guides" | "things" | "stays" | "parks";
  activeView: "list" | "split" | "map";
  search: string;
  sortBy: string;
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}

export default function ExploreLayout({
  activeTab,
  activeView,
  search,
  sortBy,
  filters,
  setFilters,
}: ExploreLayoutProps) {
  const dataMap = {
    guides: guidesData,
    things: thingsData,
    stays: staysData,
    parks: parksData,
  };

  const filteredItems = dataMap[activeTab]
    .filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => {
      const price = Number(item.price.replace("$", ""));
      return (
        price >= filters.minPrice &&
        price <= filters.maxPrice
      );
    })
    .filter(
      (item) => Number(item.rating) >= filters.minRating
    )
    .filter((item) =>
      filters.instantBook ? item.instantBook : true
    )
    .sort((a, b) => {
      if (sortBy === "price-low") {
        return (
          Number(a.price.replace("$", "")) -
          Number(b.price.replace("$", ""))
        );
      }

      if (sortBy === "price-high") {
        return (
          Number(b.price.replace("$", "")) -
          Number(a.price.replace("$", ""))
        );
      }

      if (sortBy === "rating") {
        return Number(b.rating) - Number(a.rating);
      }

      return b.id - a.id;
    });

  const renderGrid = (columns: 2 | 4) => {
    switch (activeTab) {
      case "guides":
        return (
          <GuidesGrid
            activeTab={activeTab}
            columns={columns}
            items={filteredItems}
          />
        );

      case "things":
        return (
          <ThingsGrid
            columns={columns}
            items={filteredItems}
          />
        );

      case "stays":
        return (
          <StaysGrid
            columns={columns}
            items={filteredItems}
          />
        );

      case "parks":
        return (
          <ParksGrid
            columns={columns}
            items={filteredItems}
          />
        );

      default:
        return null;
    }
  };

  // LIST VIEW
  if (activeView === "list") {
    return (
      <section className="px-8 py-8">
        <div className="mx-auto max-w-[1800px]">
          {renderGrid(4)}
        </div>
      </section>
    );
  }

  // SPLIT VIEW
  if (activeView === "split") {
    return (
      <section className="py-8">
        <div className="flex w-full">
          <ExploreFilters
            activeView={activeView}
            filters={filters}
            setFilters={setFilters}
          />

          <div className="w-[42%] px-6">
            {renderGrid(2)}
          </div>

          <div className="sticky top-0 h-screen w-[58%] overflow-hidden rounded-l-[32px]">
            <ExploreMap
              activeTab={activeTab}
              items={filteredItems}
            />
          </div>
        </div>
      </section>
    );
  }

  // MAP VIEW
  return (
    <section className="py-8">
      <div className="flex w-full">
        <ExploreFilters
          activeView={activeView}
          filters={filters}
          setFilters={setFilters}
        />

        <div className="h-screen flex-1 overflow-hidden rounded-l-[32px]">
          <ExploreMap
            activeTab={activeTab}
            items={filteredItems}
            fullMap
          />
        </div>
      </div>
    </section>
  );
}