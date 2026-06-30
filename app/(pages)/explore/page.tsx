"use client";

import { useState } from "react";
import ExploreNavbar from "@/app/components/explore/ExploreNavbar";
import ExploreCategories from "@/app/components/explore/ExploreCategories";
import ExploreTabs from "@/app/components/explore/ExploreTabs";
import ExploreHeader from "@/app/components/explore/ExploreHeader";
import ExploreLayout from "@/app/components/explore/ExploreLayout";

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState<
    "guides" | "things" | "stays" | "parks"
  >("guides");

  const [activeView, setActiveView] = useState<
    "list" | "split" | "map"
  >("list");

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 5000,
    minRating: 0,
    instantBook: false,
  });

  return (
    <main className="min-h-screen bg-[#F7F9F8]">
      <ExploreNavbar />

      <ExploreTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <ExploreCategories />

      <ExploreHeader
        activeTab={activeTab}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <ExploreLayout
        activeTab={activeTab}
        activeView={activeView}
        search={search}
        sortBy={sortBy}
        filters={filters}
        setFilters={setFilters}
      />
    </main>
  );
}