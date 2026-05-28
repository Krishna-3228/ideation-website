import JournalHero from "../../sections/journal/JournalHero";
import JournalOverview from "../../sections/journal/JournalOverview";
import ResearchAreas from "../../sections/journal/ResearchAreas";
import PublicationProcess from "../../sections/journal/PublicationProcess";
import WhyPublish from "../../sections/journal/WhyPublish";
import JournalCTA from "../../sections/journal/JournalCTA";

const Journal = () => {
  return (
    <>
      <JournalHero />
      <JournalOverview />
      <ResearchAreas />
      <PublicationProcess />
      <WhyPublish />
      <JournalCTA />
    </>
  );
};

export default Journal;