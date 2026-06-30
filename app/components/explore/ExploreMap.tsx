"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

interface MapItem {
  id: number;
  name: string;
  image: string;
  rating: string;
  location: string;
  price: string;
  coordinates?: number[];
  position?: [number, number];
}

interface ExploreMapProps {
  activeTab: "guides" | "things" | "stays" | "parks";
  items: MapItem[];
  fullMap?: boolean;
}

export default function ExploreMap({
  activeTab,
  items,
  fullMap = false,
}: ExploreMapProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState<MapItem | null>(null);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    const loadLeaflet = async () => {
      const leaflet = await import("leaflet");
      setL(leaflet);
      setIsMounted(true);
    };

    loadLeaflet();
  }, []);

  const createMarkerIcon = (image: string, rating: string) => {
    if (!L) return null;

    return L.divIcon({
      className: "",
      html: `
        <div style="position:relative;width:64px;height:64px;">
          <img
            src="${image}"
            style="
              width:56px;
              height:56px;
              border-radius:999px;
              object-fit:cover;
              border:4px solid white;
              box-shadow:0 8px 20px rgba(0,0,0,.18);
            "
          />
          <div style="
            position:absolute;
            bottom:-6px;
            left:50%;
            transform:translateX(-50%);
            background:white;
            padding:4px 8px;
            border-radius:999px;
            font-size:12px;
            font-weight:600;
            box-shadow:0 4px 10px rgba(0,0,0,.1);
          ">
            ⭐ ${rating}
          </div>
        </div>
      `,
      iconSize: [64, 64],
    });
  };

  const getPosition = (item: MapItem): [number, number] => {
    if (item.coordinates) {
      return [
        item.coordinates[0],
        item.coordinates[1],
      ];
    }

    if (item.position) {
      return item.position;
    }

    return [-1.9403, 29.8739];
  };

  const center = useMemo(
    () =>
      items.length
        ? getPosition(items[0])
        : [-1.9403, 29.8739],
    [items]
  );

  if (!isMounted || !L) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-[32px] ${
        fullMap ? "h-[85vh]" : "h-full min-h-[700px]"
      }`}
    >
      {/* Floating search */}
      <div className="absolute left-6 right-6 top-6 z-[1000] flex gap-4">
        <div className="flex h-14 flex-1 items-center rounded-full bg-white px-5 shadow-lg">
          <Search className="h-5 w-5 text-black/40" />
          <input
            placeholder="Search destinations, and activities..."
            className="ml-3 flex-1 bg-transparent outline-none"
          />
        </div>

        <button className="flex h-14 items-center gap-2 rounded-full bg-[#367347] px-6 text-white shadow-lg">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* Map */}
      <MapContainer
        center={center}
        zoom={7}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />

        {items.map((item) => (
          <Marker
            key={item.id}
            position={getPosition(item)}
            icon={createMarkerIcon(item.image, item.rating)}
            eventHandlers={{
              click: () => setSelectedItem(item),
            }}
          />
        ))}
      </MapContainer>

      {/* Selected card */}
      {selectedItem && (
        <div className="absolute bottom-28 left-6 z-[1000] w-[320px] rounded-[28px] bg-white p-4 shadow-2xl backdrop-blur-xl">
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="h-[180px] w-full rounded-[20px] object-cover"
          />

          <div className="mt-4">
            <h3 className="text-[26px] font-semibold">
              {selectedItem.name}
            </h3>

            <p className="mt-2 text-sm text-black/50">
              {selectedItem.location}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[28px] font-bold text-[#367347]">
                {selectedItem.price}
              </span>

              <button className="rounded-full bg-[#367347] px-5 py-3 text-white">
                Explore
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Count bubble */}
      <div className="absolute bottom-28 left-1/2 z-[1000] flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-[#367347] text-center text-white shadow-xl">
        <div>
          <p className="text-[28px] font-semibold">
            {items.length}
          </p>
          <p className="text-sm capitalize">{activeTab}</p>
        </div>
      </div>

      {/* AI button */}
      <button className="absolute bottom-8 right-8 z-[1000] flex h-16 items-center gap-2 rounded-full bg-white px-8 text-[18px] font-semibold shadow-xl">
        <Sparkles className="h-5 w-5 text-[#367347]" />
        Plan with AI
      </button>
    </div>
  );
}