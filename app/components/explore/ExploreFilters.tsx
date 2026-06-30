"use client";

import { SlidersHorizontal, ChevronLeft, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface FiltersProps {
  minPrice: number;
  maxPrice: number;
  minRating: number;
  instantBook: boolean;
}

interface ExploreFiltersProps {
  activeView: "list" | "split" | "map";
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}

export default function ExploreFilters({
  activeView,
  filters,
  setFilters,
}: ExploreFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  // auto open in split/map
  useEffect(() => {
    if (activeView === "split" || activeView === "map") {
      setIsOpen(true);
    }
  }, [activeView]);

  const ratingOptions = [
    { label: "4.8+ Guest Favorite", value: 4.8 },
    { label: "4.5+ Top Rated", value: 4.5 },
    { label: "4.0+ Well Reviewed", value: 4.0 },
  ];

  return (
    <div className="relative flex">
      {/* Collapsed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-[970px] w-[56px] flex-col items-center justify-center gap-6 bg-[#F4F8FB]"
        >
          <SlidersHorizontal className="h-5 w-5 rotate-90 text-[#367347]" />

          <span className="rotate-90 text-[14px] font-semibold tracking-[0.2em] text-black/40">
            FILTERS
          </span>

          <ChevronLeft className="h-4 w-4 rotate-180 text-black/40" />
        </button>
      )}

      {/* Expanded */}
      {isOpen && (
        <div className="flex h-[970px] w-[380px] border-r border-[#EDEDED] bg-white">
          {/* Rail */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex w-[56px] flex-col items-center justify-center gap-6 bg-[#F4F8FB]"
          >
            <SlidersHorizontal className="h-5 w-5 rotate-90 text-[#367347]" />

            <span className="rotate-90 text-[14px] font-semibold tracking-[0.2em] text-black/40">
              FILTERS
            </span>

            <ChevronLeft className="h-4 w-4 text-black/40" />
          </button>

          {/* Content */}
          <div className="flex flex-1 flex-col px-8 py-8">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold">Filters</h3>

              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-[#367347]"
              >
                Hide Filters
              </button>
            </div>

            {/* Price */}
            <div className="border-b pb-8">
              <h4 className="mb-4 text-[16px] font-medium">
                Price Range
              </h4>

              <input
                type="range"
                min={0}
                max={5000}
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    maxPrice: Number(e.target.value),
                  }))
                }
                className="w-full accent-[#367347]"
              />

              <div className="mt-4 flex gap-4">
                <div className="flex-1 rounded-lg bg-[#F4F8FB] px-4 py-3">
                  ${filters.minPrice}
                </div>

                <div className="flex-1 rounded-lg bg-[#F4F8FB] px-4 py-3">
                  ${filters.maxPrice}
                </div>
              </div>
            </div>

            {/* Instant Book */}
            <div className="border-b py-8">
              <label className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={filters.instantBook}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      instantBook: e.target.checked,
                    }))
                  }
                  className="mt-1 h-5 w-5"
                />

                <div>
                  <p className="font-medium">Instant Book Only</p>
                  <p className="text-sm text-black/40">
                    Available to book instantly
                  </p>
                </div>
              </label>
            </div>

            {/* Ratings */}
            <div className="py-8">
              <h4 className="mb-4 text-[16px] font-medium">Rating</h4>

              <div className="flex flex-col gap-3">
                {ratingOptions.map((rating) => (
                  <button
                    key={rating.label}
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        minRating: rating.value,
                      }))
                    }
                    className={`flex items-center gap-2 rounded-full px-4 py-3 text-sm ${
                      filters.minRating === rating.value
                        ? "bg-gradient-to-b from-[#367347] to-[#205930] text-white"
                        : "bg-white text-black/60 shadow-md"
                    }`}
                  >
                    <Star className="h-4 w-4" />
                    {rating.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-auto">
              <button className="w-full rounded-full bg-gradient-to-b from-[#367347] to-[#205930] py-4 font-semibold text-white">
                Apply Filters
              </button>

              <button
                onClick={() =>
                  setFilters({
                    minPrice: 0,
                    maxPrice: 5000,
                    minRating: 0,
                    instantBook: false,
                  })
                }
                className="mt-4 w-full text-sm font-medium text-[#367347]"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}