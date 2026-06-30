"use client";

import {
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

interface ExploreHeaderProps {
  activeTab: "guides" | "things" | "stays" | "parks";
  search: string;
  setSearch: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

const tabTitles = {
  guides: {
    title: "Expert Guides",
    count: "45 guides available",
  },
  things: {
    title: "Things to Do",
    count: "32 activities available",
  },
  stays: {
    title: "Best Stays",
    count: "28 stays available",
  },
  parks: {
    title: "National Parks",
    count: "18 parks available",
  },
};

export default function ExploreHeader({
  activeTab,
  search,
  setSearch,
  sortBy,
  setSortBy,
}: ExploreHeaderProps) {
  const current = tabTitles[activeTab];

  return (
    <section className="px-8 py-8">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between">
        {/* Left */}
        <div>
          <h2 className="text-[28px] font-semibold text-black">
            {current.title}
          </h2>

          <p className="mt-2 text-sm text-black/50">
            {current.count}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex h-[64px] w-[540px] items-center gap-3 rounded-full bg-white px-6 shadow-sm">
            <Search className="h-5 w-5 shrink-0 text-black/40" />

            <input
              type="text"
              placeholder="Search destinations, and activities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-full w-full bg-transparent text-[16px] leading-none outline-none placeholder:text-black/40"
            />
          </div>

          {/* Filter Button */}
          <button className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow-sm">
            <SlidersHorizontal className="h-5 w-5 text-black" />
          </button>

          {/* Sort */}
          <div className="relative flex h-[64px] items-center">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-[64px] min-w-[240px] appearance-none rounded-full bg-white px-6 pr-12 text-[16px] leading-none text-black/60 shadow-sm outline-none"
            >
              <option value="newest">Sort by: Newest</option>
              <option value="price-low">
                Price: Low to High
              </option>
              <option value="price-high">
                Price: High to Low
              </option>
              <option value="rating">Top Rated</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-5 h-4 w-4 text-black/50" />
          </div>
        </div>
      </div>
    </section>
  );
}