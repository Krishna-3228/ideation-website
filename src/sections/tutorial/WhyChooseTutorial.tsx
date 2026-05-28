import WhyChooseCard from "../../components/tutorial/WhyChooseCard";

import { tutorialWhyChoose } from "../../data/tutorial/tutorialWhyChoose";

const WhyChooseTutorial = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Academic Guidance That Builds Confidence
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our student-focused academic system combines
            conceptual teaching,
            continuous evaluation,
            mentorship,
            and structured preparation
            for long-term academic success.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {tutorialWhyChoose.map((item) => (
            <WhyChooseCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseTutorial;