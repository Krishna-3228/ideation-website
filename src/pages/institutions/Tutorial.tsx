import TutorialHero from "../../sections/tutorial/TutorialHero";
import TutorialOverview from "../../sections/tutorial/TutorialOverview";
import TutorialAchievements from "../../sections/tutorial/TutorialAchievements";
import SpecialPrograms from "../../sections/tutorial/SpecialPrograms";
import FacilitiesInfrastructure from "../../sections/tutorial/FacilitiesInfrastructure";
import TutorialCTA from "../../sections/tutorial/TutorialCTA";

const Tutorial = () => {
  return (
    <>
      <TutorialHero />
      <TutorialOverview />
      <SpecialPrograms />
      <FacilitiesInfrastructure />
      <TutorialAchievements />
      <TutorialCTA />
    </>
  );
};

export default Tutorial;