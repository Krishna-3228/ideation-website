import SpecialFeatureCard from "../../components/integrated-learning/SpecialFeatureCard";

import { specialFeatures } from "../../data/integrated-learning/specialFeatures";

const SpecialFeatures = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Special Features
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Focused on Student Development
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our integrated academic system combines
            conceptual learning, continuous support,
            practical orientation, and student-focused mentorship.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {specialFeatures.map((feature) => (
            <SpecialFeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default SpecialFeatures;