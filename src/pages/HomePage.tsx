import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import InstitutionsSection from "../sections/InstitutionsSection";
import AchievementsSection from "../sections/AchievementsSection";
import LifeAtIdeationSection from "../sections/LifeAtIdeationSection";
import ContactCTASection from "../sections/ContactCTASection";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">


      <main>
        <HeroSection />

        <AboutSection />

        <InstitutionsSection />

        <AchievementsSection />

        <LifeAtIdeationSection />

        <ContactCTASection />
      </main>

    </div>
  );
}