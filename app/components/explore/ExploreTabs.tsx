"use client";

import {
  Users,
  List,
  SplitSquareHorizontal,
  Map,
} from "lucide-react";

const tabs = [
  { id: "guides", label: "Guides" },
  { id: "things", label: "Things to Do" },
  { id: "stays", label: "Stays" },
  { id: "parks", label: "Parks" },
];

const viewModes = [
  {
    id: "list",
    label: "List",
    icon: List,
  },
  {
    id: "split",
    label: "Split",
    icon: SplitSquareHorizontal,
  },
  {
    id: "map",
    label: "Map",
    icon: Map,
  },
];

interface ExploreTabsProps {
  activeTab: "guides" | "things" | "stays" | "parks";
  setActiveTab: (
    tab: "guides" | "things" | "stays" | "parks"
  ) => void;

  activeView: "list" | "split" | "map";
  setActiveView: (
    view: "list" | "split" | "map"
  ) => void;
}

export default function ExploreTabs({
  activeTab,
  setActiveTab,
  activeView,
  setActiveView,
}: ExploreTabsProps) {
  return (
    <section className="px-8 pt-10">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between">
        {/* Left Tabs */}
        <div className="flex rounded-full bg-[#F4F8FB] p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(
                  tab.id as "guides" | "things" | "stays" | "parks"
                )
              }
              className={`flex items-center gap-2 rounded-full px-8 py-4 text-[20px] transition ${
                activeTab === tab.id
                  ? "bg-[#367347] font-medium text-white"
                  : "text-black/40"
              }`}
            >
              {tab.id === "guides" && <Users className="h-5 w-5" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right View Switch */}
        <div className="flex rounded-full bg-[#F4F8FB] p-1">
          {viewModes.map((mode) => {
            const Icon = mode.icon;

            return (
              <button
                key={mode.id}
                onClick={() =>
                  setActiveView(
                    mode.id as "list" | "split" | "map"
                  )
                }
                className={`flex items-center gap-2 rounded-full px-6 py-4 text-[20px] transition ${
                  activeView === mode.id
                    ? "bg-[#367347] text-white"
                    : "text-black/40"
                }`}
              >
                <Icon className="h-5 w-5" />
                {mode.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}