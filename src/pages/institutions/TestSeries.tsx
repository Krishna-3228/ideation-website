import TestSeriesHero from "../../sections/test-series/TestSeriesHero";
import WhyTestSeriesSection from "../../sections/test-series/WhyTestSeriesSection";
import HowOurTestSeriesWorksSection from "../../sections/test-series/HowOurTestSeriesWorkssection";
import TestSeriesTimetableSection from "../../sections/test-series/TestSeriesTimeTable";
import StudentResultsSection from "../../sections/test-series/StudentResults";
import AdmissionCTA from "../../sections/test-series/TestSeriesCTASection"
const TestSeries = () => {
  return (
    <>
      <TestSeriesHero />
      <WhyTestSeriesSection />
      <HowOurTestSeriesWorksSection />
      <TestSeriesTimetableSection />
      <StudentResultsSection />
      <AdmissionCTA />
    </>
  );
};

export default TestSeries;