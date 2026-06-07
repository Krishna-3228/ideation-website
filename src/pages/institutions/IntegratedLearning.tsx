import Hero from "../../sections/integrated-learning/IntegratedLearningHero";
import IntegratedLearningOverview from "../../sections/integrated-learning/IntegratedLearningOverview";
import StudentBenefits from "../../sections/integrated-learning/StudentBenefits";
import SpecialPrograms from "../../sections/integrated-learning/SpecialPrograms";
import LearningEnvironmentSection from "../../sections/integrated-learning/LearningEnvironmentSection";
import IntegratedLearningCTA from "../../sections/integrated-learning/IntegratedLearningCTA";

const IntegratedLearningPage = () => {
  return (
    <>
      <Hero />
      <IntegratedLearningOverview />
      <StudentBenefits />
      <SpecialPrograms />
      <LearningEnvironmentSection />
      <IntegratedLearningCTA />
    </>
  );
};

export default IntegratedLearningPage;