import TutorialHero from "../../sections/tutorial/TutorialHero";
import TutorialOverview from "../../sections/tutorial/TutorialOverview";
import BoardsSection from "../../sections/tutorial/BoardsSection";
import SpecialPrograms from "../../sections/tutorial/SpecialPrograms";
import WhyChooseTutorial from "../../sections/tutorial/WhyChooseTutorial";
import TutorialCTA from "../../sections/tutorial/TutorialCTA";

const Tutorial = () => {
  return (
    <>
      <TutorialHero />
      <TutorialOverview />
      <BoardsSection />
      <SpecialPrograms />
      <WhyChooseTutorial />
      <TutorialCTA />
    </>
  );
};

export default Tutorial;