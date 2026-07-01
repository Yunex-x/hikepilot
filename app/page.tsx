// pages/index.tsx or app/page.tsx

import Navbar from "./components/Navbar";
import AiTravelSection from "./Sections/home/AiTravelSection";
import CommunitySection from "./Sections/home/CommunitySection";
import ExperiencesSection from "./Sections/home/ExperiencesSection";
import FeaturesSection from "./Sections/home/FeaturesSection";
import HeroSection from "./Sections/home/HeroSection";
import JoinAs from "./Sections/home/JoinAs";
import JourneyCards from "./Sections/home/JourneySection";
import JourneySection from "./Sections/home/JourneySection";
import LocalGuidesSection from "./Sections/home/LocalGuidesSection";
import MapExploreSection from "./Sections/home/MapExploreSection";
import PopularDestinationsSection from "./Sections/home/PopularDestinationsSection";
import PromoAfricaSection from "./Sections/home/PromoAfricaSection";
import TourJoinSection from "./Sections/home/TourJoinSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MapExploreSection />
      <PopularDestinationsSection />
      <ExperiencesSection />
      <LocalGuidesSection />
      <PromoAfricaSection />
      <TourJoinSection />
      <AiTravelSection />
      <JourneyCards />
      <CommunitySection />
      <JoinAs />

    </main>
  );
}