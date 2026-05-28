import TestSeriesHero from "../../sections/test-series/TestSeriesHero";
import TestSeriesOverview from "../../sections/test-series/TestSeriesOverview";
import EvaluationSection from "../../sections/test-series/EvaluationSection";
import BenefitsSection from "../../sections/test-series/BenefitSection";
import TestSeriesCTA from "../../sections/test-series/TestSeriesCTA";

const TestSeries = () => {
  return (
    <>
      <TestSeriesHero />
      <TestSeriesOverview />
      <EvaluationSection />
      <BenefitsSection />
      <TestSeriesCTA />
    </>
  );
};

export default TestSeries;