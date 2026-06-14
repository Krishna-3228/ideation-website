import LifeHero from "../sections/life/LifeHero";
import LearningGallery from "../sections/life/LearningGallery";
import SportsGallery from "../sections/life/SportsGallery";
import TripsGallery from "../sections/life/TripsGallery";
import EventsGallery from "../sections/life/EventsGallery";
import AchievementsGallery from "../sections/life/AchievementsGallery";

export default function LifeAtIdeationPage() {
  return (
    <main className="bg-white">
      {/* <LifeHero /> */}

      <LearningGallery />

      <SportsGallery />

      <TripsGallery />

      <EventsGallery />

      <AchievementsGallery />
    </main>
  );
}